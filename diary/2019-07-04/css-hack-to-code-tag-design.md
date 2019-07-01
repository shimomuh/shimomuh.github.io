# CSS ハックを使って以前実装した `<code>` タグのデザイン崩れに対応する

タグ `CSS` `Scss`

## 対象者

* CSS ハックなにそれ食べれるの？
* CSS ハックバリバリ使ってるよ！

という方々向け。

残念ながら CSS ハックは使うべきじゃない！方、 JS でやるべきだろ！派の方は対象外。

## 背景

ブラウザでなんとなく確認したら画像がとんでもないことになっていたのを見つけた...

![](/diary/2019-07-04/browser-diff-before.png)

スタイルはあくまで CSS が担当すべき派の僕としては CSS をハックしてでも頑張るという方向で対処することにした


## 結果

* Firefox は `height` がうまくとれないので諦めてデザイン自体を変更する方向に
* Safari は微調整
* IE は... 色々ありそうなので別途

[成果→](https://github.com/shimomuh/shimomuh.github.io/commit/ff334744a9283e290e7dff3baaa539ee8a21f6b3)

```scss
/* Safari のみ */
_::-webkit-full-page-media, _:future, :root .diary {
  color: red;
}

/* Firefox のみ */
@-moz-document url-prefix() {
  .diary {
    color: red;
  }
}
```

みたいな感じで対応した

[ブラウザ別に適用させるCSSハック2018 | 株式会社クロコロール](https://kuroko-role.co.jp/css-html/browser-hack2018/) を丸パクリ...

![](/diary/2019-07-04/browser-diff-after.png)
