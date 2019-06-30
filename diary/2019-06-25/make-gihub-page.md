# 祝 Github Pages 設立

## 対象者

* 毎日何かしら投稿したい！
* 技術をキャッチアップしたい！
* Github に commit を積みたい！

でも、めんd(ry な人向け

## 背景

継続という言葉がとても苦手な僕が "ふと" 「あ、なんかはじめなきゃ」と思った。

アドベントカレンダー的なものをやりたくて最初の一歩として

```
既存のアドベントカレンダーだと個人でやる魅力がない
↓
なら、Github Pages でアドベントカレンダーすれば Github の commit も積んでハッピーになれそうじゃね？
↓
久々に JS 書こう！せっかくなら流行りの Typescript で書こう！
↓
ｲﾏｺｺ!
```

というわけである

とはいえ、まるっと一から作るのも面倒だし create-react-app で全部お任せするのはなんか癪だった

そこで、ローカルで 最新の create-react-app で my-app 的なやつをビルドしながら、怒られない程度に美味しい蜜を吸おうと考えたわけだ。

## 結果

ここに[このホームページ](https://shimomuh.github.io)が誕生した。

とはいえ、これで終わると何も伝わらないので、やったことを書く

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/701ff943a1bada641bf941af404ba9e1551852bc)

## 過程

### Github Pages

過去に [Github Pages](https://pages.github.com/) でサイトを作ったことはあったのでサイト構築については割愛。

Github Pages については Google 先生や Siri に聞いてみよう！

### nodejs

次にリポジトリに `.node-version` を作った。

stable でなくてもよかったので [nodejs](https://nodejs.org/ja/) から最新版を取得した（もちろん ndenv を使ってね）

### Typescript / create-react-app

Typescript を触ってみたかった + Github Pages 上で React を動かしてみたかったので、 https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter に倣って、ローカルに test-react-sample 的な名前で create-react-app を実行して一通り動作を確認。

`npm -g` を `npm --save-dev` にしたりディレクトリを調整しながら必要なものだけつまんで導入。

リポジトリ内の構成や react-dom にまつわるコンポーネントなんかは初めからサンプルは全無視して作ったが、サンプルをみながら作る方がよろしい（~syntax エラーで何度もビルドに失敗したのは内緒（￣b￣ｼｰｯ~）

### 試運転

test-react-sample というディレクトリでサンプルはすでに試したことだったが、自分の作った index.tsx を `npm run start` してローカルで動かした（一安心）

### ビルド

test-react-sample もといオリジナルの create-react-app で build を試した時にアップしたものが build の中にいると URL が https://shimomuh.github.io/build/index.html となることにダサさを感じていたので、 https://shimomuh.github.io に直接打ち込むだけで表示されるように index.html の出力先をリポジトリ直下になるように工夫が必要なことに気づいた

### favicon

僕は適当なファビコン生成サイトでサムネをアップして作ったが、 Photoshop のプラグインなんかでもよい

### `npm run ejest`

ビルド先を変更したいが変更ファイルらしきものがなくて tsconfig.json をいじるのかなと迷走しかけた

が、怠け者の僕はすぐに Google 先生に聞いたら先人がいた

[create-react-appでbuild先のパスを変更する](https://qiita.com/yakimeron/items/7a4f8d9e70a4a2b1b96b)

ありがたく参考にさせてもらってディレクトリをカスタマイズ

あとは build して commit を push してめでたしめでたし

## 謝辞

まず僕は [Github Pages の存在](https://pages.github.com/) を知っていた（これはなんて幸運なことだ！）

次に、過去に業務レベルで ReactJS をバリバリ触っていた

さらには、ついこの前まで隣の席で一緒にお仕事をしていた [@Takepepe](https://github.com/Takepepe) さんが[実践TypeScript ~	BFFとNext.js&Nuxt.jsの型定義~](https://www.amazon.co.jp/dp/483996937X?fbclid=IwAR2f8NdtIH6YFiojk-dgtCWEg-dibkggPCTVtEqR73DEdSRiM1Q6iotC0c8) という本を出すと聞いて、久々に書こうと触発されたのもあるかもしれない（謝謝）

いろんな因果があって、今ここに commit しているが、どれか一つでも欠けていたらはじめなかっただろう

世の中のいろんな事象に感謝感激雨あられ
