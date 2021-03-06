# タグを楽に仕込む方法を今のうちに考える

タグ `このサイトの生い立ち` `UI/UX` `設計`

## 対象者

* ここまで記事を一から読んできた
* サービスやプロダクトの先々を考えて設計したい

そんな人たち

## 背景

アドベントカレンダーとはいえ、この技術ブログの目的をおさらいする

 

**目的**

Roma was build in a day. からいきなり全てができる全知全能の神にはなりえないので少しずつでも定期的に技術やものづくりに関わる仕組みが自分の中でほしかった

 

**裏を返せば**

過去の状態を検索できて、容易に思い出せるべき

 

なのだが、今のままだと目的の記事をみつけるのに全ての日を網羅的にみていかないといけない！なんてことだ Σ(ﾟДﾟ！ﾊｯ

そこで、後々のことを考えてタグを仕込めるようにしたい

また、時期によって多少のアップデートはあれど、全く違う構成で記事を書いてしまうと同じサイト構成に見えないのでテンプレートがほしくなった

## 結論

そこで今回作ったのが

* タグの下準備
* テンプレート

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/e5f75adf508c6e4b92806eb0e80fc96f58c1ad9d)

テンプレートは言わずもがなテンプレートを用意しただけ。

本来ならこれをスクリプトで自動生成できれば理想だが、それはまた別の機会で。

タグの下準備について少し触れる

## 過程

タグはいろんな方法で実現できる

例えば json で各ファイルの関連性を示すとか極端にやればデータベースを使うとか

でも今回投稿者は僕しかいないのでとにかく手間を省く方向で考えた

結果としてテンプレートをつくり、そのルールの一つとして、ファイルの 3行目にタグを書くという方針にした

色々と欠点もあるのだが、それを差し置いて以下のメリットを享受できるのでこの形をとった

* まず記事を書くだけなのに複数のファイルをいじりたくない（めんどい）
* 連想語データベースみたいなことをしても、所詮僕がはてなキーワードやウィキペディアのように関連性の高い用語を自動で検索できる機能を作れる気がしなかった（いや、本家が自動かどうかは知らんが）

というわけで一番楽なテンプレートを決めて特定の位置にタグが書かれているという構成をとった

今はタグがリンクではないが、この方法なら先々 tsx ファイルにコンバート時にリンクとして収集したりするのも楽そうである

今回みたいに最小限の価値ある機能を考えて作り出すという考え方は MVP(Minimum Viable Product) と呼ばれる

[O'Reilly Japan - ユーザーストーリーマッピング](https://www.oreilly.co.jp/books/9784873117324/) の書籍などでも触れられているので知っていると今後ものづくりをする人は役にたつかもしれない

## 謝辞

MVP の考え方については僕が社内でスタートアップのような制度を利用していた時にオブザーバーとしてお世話になっていた今や uni'que Inc. CEO/Founder の [@Kazuo Wakamiya](https://www.facebook.com/kazuo.wakamiya?fref=nf&__tn__=%2Cdm-R-R&eid=ARBofPGrIIXYL7OBz4orgZfLRJ_4LrzkgIAvjDnuC-9qR6yyI-C5j1bOmojWzykhnDgvRQIUqwezMKf2) にお世話になりながら繰り返し実践した経験の賜物である。

今も当時とは違うサービスに携わっているがこの考え方のおかげでものづくりが洗練されているのはいうまでもないので、これを実体験として学ばせてもらったことに感謝したい。

