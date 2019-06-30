//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190625: React.FC = () => {
  return (
    <div className='diary'>
<h1>祝&nbsp;Github&nbsp;Pages&nbsp;設立</h1>

<h2>対象者</h2>

<ul><li>毎日何かしら投稿したい！</li>
<li>技術をキャッチアップしたい！</li>
<li>Github&nbsp;に&nbsp;commit&nbsp;を積みたい！</li>
</ul>
でも、めんd(ry&nbsp;な人向け<br />

<h2>背景</h2>

継続という言葉がとても苦手な僕が&nbsp;&quot;ふと&quot;&nbsp;「あ、なんかはじめなきゃ」と思った。<br />

アドベントカレンダー的なものをやりたくて最初の一歩として<br />

<p className="code"><code>
<span className='code__with-order'>既存のアドベントカレンダーだと個人でやる魅力がない</span><br />
<span className='code__with-order'>↓</span><br />
<span className='code__with-order'>なら、Github&nbsp;Pages&nbsp;でアドベントカレンダーすれば&nbsp;Github&nbsp;の&nbsp;commit&nbsp;も積んでハッピーになれそうじゃね？</span><br />
<span className='code__with-order'>↓</span><br />
<span className='code__with-order'>久々に&nbsp;JS&nbsp;書こう！せっかくなら流行りの&nbsp;Typescript&nbsp;で書こう！</span><br />
<span className='code__with-order'>↓</span><br />
<span className='code__with-order'>ｲﾏｺｺ!</span><br />
</code></p>

というわけである<br />

とはいえ、まるっと一から作るのも面倒だし&nbsp;create-react-app&nbsp;で全部お任せするのはなんか癪だった<br />

そこで、ローカルで&nbsp;最新の&nbsp;create-react-app&nbsp;で&nbsp;my-app&nbsp;的なやつをビルドしながら、怒られない程度に美味しい蜜を吸おうと考えたわけだ。<br />

<h2>結果</h2>

ここに<a href={"https://shimomuh.github.io"}>このホームページ</a>が誕生した。<br />

とはいえ、これで終わると何も伝わらないので、やったことを書く<br />

<a href={"https://github.com/shimomuh/shimomuh.github.io/commit/701ff943a1bada641bf941af404ba9e1551852bc"}>→成果</a><br />

<h2>過程</h2>

<h3>Github&nbsp;Pages</h3>

過去に&nbsp;<a href={"https://pages.github.com/"}>Github&nbsp;Pages</a>&nbsp;でサイトを作ったことはあったのでサイト構築については割愛。<br />

Github&nbsp;Pages&nbsp;については&nbsp;Google&nbsp;先生や&nbsp;Siri&nbsp;に聞いてみよう！<br />

<h3>nodejs</h3>

次にリポジトリに&nbsp;<span className="inline-code">.node-version</span>&nbsp;を作った。<br />

stable&nbsp;でなくてもよかったので&nbsp;<a href={"https://nodejs.org/ja/"}>nodejs</a>&nbsp;から最新版を取得した（もちろん&nbsp;ndenv&nbsp;を使ってね）<br />

<h3>Typescript&nbsp;/&nbsp;create-react-app</h3>

Typescript&nbsp;を触ってみたかった&nbsp;+&nbsp;Github&nbsp;Pages&nbsp;上で&nbsp;React&nbsp;を動かしてみたかったので、&nbsp;https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter&nbsp;に倣って、ローカルに&nbsp;test-react-sample&nbsp;的な名前で&nbsp;create-react-app&nbsp;を実行して一通り動作を確認。<br />

<span className="inline-code">npm&nbsp;-g</span>&nbsp;を&nbsp;<span className="inline-code">npm&nbsp;--save-dev</span>&nbsp;にしたりディレクトリを調整しながら必要なものだけつまんで導入。<br />

リポジトリ内の構成や&nbsp;react-dom&nbsp;にまつわるコンポーネントなんかは初めからサンプルは全無視して作ったが、サンプルをみながら作る方がよろしい（<s>syntax&nbsp;エラーで何度もビルドに失敗したのは内緒（￣b￣ｼｰｯ</s>）<br />

<h3>試運転</h3>

test-react-sample&nbsp;というディレクトリでサンプルはすでに試したことだったが、自分の作った&nbsp;index.tsx&nbsp;を&nbsp;<span className="inline-code">npm&nbsp;run&nbsp;start</span>&nbsp;してローカルで動かした（一安心）<br />

<h3>ビルド</h3>

test-react-sample&nbsp;もといオリジナルの&nbsp;create-react-app&nbsp;で&nbsp;build&nbsp;を試した時にアップしたものが&nbsp;build&nbsp;の中にいると&nbsp;URL&nbsp;が&nbsp;https://shimomuh.github.io/build/index.html&nbsp;となることにダサさを感じていたので、&nbsp;https://shimomuh.github.io&nbsp;に直接打ち込むだけで表示されるように&nbsp;index.html&nbsp;の出力先をリポジトリ直下になるように工夫が必要なことに気づいた<br />

<h3>favicon</h3>

僕は適当なファビコン生成サイトでサムネをアップして作ったが、&nbsp;Photoshop&nbsp;のプラグインなんかでもよい<br />

<h3><span className="inline-code">npm&nbsp;run&nbsp;ejest</span></h3>

ビルド先を変更したいが変更ファイルらしきものがなくて&nbsp;tsconfig.json&nbsp;をいじるのかなと迷走しかけた<br />

が、怠け者の僕はすぐに&nbsp;Google&nbsp;先生に聞いたら先人がいた<br />

<a href={"https://qiita.com/yakimeron/items/7a4f8d9e70a4a2b1b96b"}>create-react-appでbuild先のパスを変更する</a><br />

ありがたく参考にさせてもらってディレクトリをカスタマイズ<br />

あとは&nbsp;build&nbsp;して&nbsp;commit&nbsp;を&nbsp;push&nbsp;してめでたしめでたし<br />

<h2>謝辞</h2>

まず僕は&nbsp;<a href={"https://pages.github.com/"}>Github&nbsp;Pages&nbsp;の存在</a>&nbsp;を知っていた（これはなんて幸運なことだ！）<br />

次に、過去に業務レベルで&nbsp;ReactJS&nbsp;をバリバリ触っていた<br />

さらには、ついこの前まで隣の席で一緒にお仕事をしていた&nbsp;<a href={"https://github.com/Takepepe"}>@Takepepe</a>&nbsp;さんが<a href={"https://www.amazon.co.jp/dp/483996937X?fbclid=IwAR2f8NdtIH6YFiojk-dgtCWEg-dibkggPCTVtEqR73DEdSRiM1Q6iotC0c8"}>実践TypeScript&nbsp;<s>	BFFとNext.js&amp;Nuxt.jsの型定義</s></a>&nbsp;という本を出すと聞いて、久々に書こうと触発されたのもあるかもしれない（謝謝）<br />

いろんな因果があって、今ここに&nbsp;commit&nbsp;しているが、どれか一つでも欠けていたらはじめなかっただろう<br />

世の中のいろんな事象に感謝感激雨あられ<br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190625
