# コードブロックを counter プロパティを使ってオシャレにしてみた

タグ `このサイトの生い立ち` `CSS` `Scss` `UI/UX` `デザイン`

## 対象者

CSS を扱っていてそれなりに知見がある

## 背景

コードブロックの工夫が backround-color と border-color だけなのは技術ブログ的な位置付けなのにどうなのよと思ったので変えてみた

## 結論

このサイトをみてもらったらわかる通り。

工夫どころは3つ

* 行数が表示されて目が迷わない
* コピペしたい人が範囲選択したときに行数は選択されない
* レスポンシブに対応していて横幅の短いスマホなどの端末でみたり、内容が折り返しても適切に行数が表示される

試しにブラウザの幅を変更してもらえるとわかるはずだ

[→成果](https://github.com/shimomuh/shimomuh.github.io/pull/6/commits/97b9cb15da919f4ee9cff2dcc49cc4c1a6f4dac1)

## 過程

### いろんなサイトをみてデザインを検討

結果として、行数が表示されている方が、同じような単語が並んでいて行数が多い時に目が迷わないことが体感としてわかったので行数の表示を採用に至った

### 実装パターンの検討

僕がはじめに思いついたのは現在の実装に至っている counter プロパティの利用だが、他のサイトをのぞいてみると table レイアウトを使っているケースもあった

table レイアウトを採用しなかったのは以下の2つが理由

* 選択時に行数を選択しうるため、コピペしたい人（おそらく初心者さん）に優しくない
* 選択時複数セル (tr) にまたがった時に選択が美しくない（些細な問題）

そもそも counter 使うつもりだったので、そのまま counter を使った

table レイアウトの参考は [コードブロックを表すMarkdownをコードブロックの中に表示する方法](http://carrinova.com/markdown_code_blocks/)

### counter を使った実装

懐かしくて忘れてたので [<ol>の番号だけ装飾するには？CSSカウンタを使ってみた](https://www.granfairs.com/blog/staff/css-ol-styling-with-counter) にお世話になりつつ記憶を掘り起こした

今回は relative や counter margin をうまく採用した方法で以下の通り

**HTML**

セマンティックとcss都合から以下の3つの要素で構成されている

* コードの段落であることを意味する `display: block;` である要素 `<p>` タグ
* コードであることを意味する `<code>` タグ
* css 都合で各行に対してナンバリングするための `<span>` タグ

```html
<p class="code">
  <code class="code__block">
    <span class="code__block--element">function plus (a, b) {</span><br>
    <span class="code__block--element">&nbsp;&nbsp;return a + b;</span><br>
    <span class="code__block--element">}</span>
  </code class="code_block">
</p>
```

**SCSS**

以下のように分けて考えてもらうとよい

![](/static/diary/2019-06-30/description.png)

```css
/* ナンバリングの部分は含まない右側 */
.code {
  color: white;
  background-color: black;
  border-radius: 0 4px 4px 0;
  margin-left: 30px;
  counter-reset: num;
  &__block {
    position: relative;
    &:before {
      width: 30px;
      border-radius: 4px 0 0 4px;
      background-color: black;
      content: '';
      position: absolute;
      height: 100%;
      margin-left: -30px;
      padding-top: 2px;
    }
    &--element {
      position: relative;
      &:befor {
        counter-increment: num;
        content: counter(num);
        position: absolute;
        text-align: right;
        display: inline-block;
        width: 20px;
        margin-left: -30px;
      }
    }
  }
}
```
