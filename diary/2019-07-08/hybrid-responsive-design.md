# ハイブリットレスポンシブ（レスポンシブ + メディアクエリ）デザイン

タグ `このサイトの生い立ち` `CSS` `Scss` `UI/UX` `デザイン`

## 対象者

* メディアクエリって聞いたことはある
* 今更だけど flex を導入しようと思っている
* 端末によって表示切り替えてる
* レスポンシブ意識してる

って人向け

## 背景

レスポンシブデザインで生きたい人生だった（端末サイズなどに依存せず実装できるのは素晴らしい！）

が、カレンダーは縮小すると流石に可読性が落ちる

 

そこで、レスポンシブを取り入れつつ、メディアクエリで可読性が下がると感じた画面サイズからデザインを変更する方法をとる

このデザイン設計のメリットは以下の通り

* 可読性が落ちない
* スマホかどうかを UA なんかで判断すると、特定端末がうまく拾えなくて死ぬ、みたいなケースを回避できる

特に後者は悩みもので、昔 Ruby on Rails の [jpmobile](https://github.com/jpmobile/jpmobile) という Gem を使って端末をサーバサイドで判断して出力先テンプレートを変えるということをしていたが、これだと後者の問題にひっかかる

 

とはいえ、無理にメディアクエリを濫用すると、 DOM 構造が崩れたり `display: none;` でも html として出力してはいけないような機微情報やセキュリティ情報はサーバ側で render すら制約した方が無難なので使えない場面もある

## 結論

今回は PC サイズをテーブルレイアウト、 SP サイズをリストレイアウトに見せることで実現した

 

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/842e8a628fc405d61bd6f2a6f7ee97098e8c95a7)

![](/static/diary/2019-07-08/responsive-plus-media-query.gif)

## 過程

まずはテーブルレイアウトをリストレイアウトに見せるために DOM 構造をいじってやる必要があった

今回は flex を上手いこと使って実現した

 

**DOM**

```html
<ul class="table-header">
  <li>日</li>
  <li>月</li>
  <li>火</li>
  <li>水</li>
  <li>木</li>
  <li>金</li>
  <li>土</li>
</ul>
<ul>
  <li>1<span>(日)</span></li>
  <li>2<span>(月)</span></li>
  <li>3<span>(火)</span></li>
  <li>4<span>(水)</span></li>
  <li>5<span>(木)</span></li>
  <li>6<span>(金)</span></li>
  <li>7<span>(土)</span></li>
  <li>8<span>(日)</span></li>
  <li>9<span>(月)</span></li>
  <li>10<span>(火)</span></li>
  <li>11<span>(水)</span></li>
  <li>12<span>(木)</span></li>
  <li>13<span>(金)</span></li>
  <li>14<span>(土)</span></li>
</ul>
```

**CSS**

```css
/* スマホサイズはそのまま */
@media screen and (max-width: 1024px) {
  .table-header { display: none; } /* テーブルレイアウト時のヘッダーにあたる曜日は隠す */
}

/* PC サイズは少し工夫 */
@media screen and (min-width: 1024px) {
  li span { display: none; } /* 曜日は隠す */
  ul {
    display: flex; /* flex style を使う */
    flex-wrap: wrap; /* いい塩梅で折り返す */
    li {
      width: 14%; /* (int)(100 / 7) = 14 */
      &:nth-child(7n + 1) {
        color: red; /* 日曜 */
      }
      &:nth-child(7n) {
        color: blue; /* 土曜 */
      }
    }
  }
}
```

* メディアクエリは [デバイスに合わせてCSSを振り分ける「Media Queries」](https://dev.classmethod.jp/smartphone/device-media-queries/)

* flex レイアウトは[日本語対応！CSS Flexboxのチートシートを作ったので配布します | Web クリエイターボックス](https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet)

あたりを参照するのがいいかな ~（一部書き方忘れてた）~

ポイントは

```css
.parent {
  flex-wrap: wrap;
  .children {
    width: 14%;
  }
}
```

の部分

これで 100% を超える 8 要素目からいい感じに折り返してくれる
