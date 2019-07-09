//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190703: React.FC = () => {
  return (
    <div className='diary'>
      <h1>タグを楽に仕込む方法を今のうちに考える</h1>タグ&nbsp;<span className="inline-code">このサイトの生い立ち</span>&nbsp;<span className="inline-code">UI/UX</span>&nbsp;<span className="inline-code">設計</span><br /><h2>対象者</h2><ul><li>ここまで記事を一から読んできた</li><li>サービスやプロダクトの先々を考えて設計したい</li></ul>そんな人たち<br /><h2>背景</h2>アドベントカレンダーとはいえ、この技術ブログの目的をおさらいする<br />&nbsp;<br /><b>目的</b><br />Roma&nbsp;was&nbsp;build&nbsp;in&nbsp;a&nbsp;day.&nbsp;からいきなり全てができる全知全能の神にはなりえないので少しずつでも定期的に技術やものづくりに関わる仕組みが自分の中でほしかった<br />&nbsp;<br /><b>裏を返せば</b><br />過去の状態を検索できて、容易に思い出せるべき<br />&nbsp;<br />なのだが、今のままだと目的の記事をみつけるのに全ての日を網羅的にみていかないといけない！なんてことだ&nbsp;Σ(ﾟДﾟ！ﾊｯ<br />そこで、後々のことを考えてタグを仕込めるようにしたい<br />また、時期によって多少のアップデートはあれど、全く違う構成で記事を書いてしまうと同じサイト構成に見えないのでテンプレートがほしくなった<br /><h2>結果</h2>そこで今回作ったのが<br /><ul><li>タグの下準備</li><li>テンプレート</li></ul><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/e5f75adf508c6e4b92806eb0e80fc96f58c1ad9d"}>→成果</a><br />テンプレートは言わずもがなテンプレートを用意しただけ。<br />本来ならこれをスクリプトで自動生成できれば理想だが、それはまた別の機会で。<br />タグの下準備について少し触れる<br /><h2>過程</h2>タグはいろんな方法で実現できる<br />例えば&nbsp;json&nbsp;で各ファイルの関連性を示すとか極端にやればデータベースを使うとか<br />でも今回投稿者は僕しかいないのでとにかく手間を省く方向で考えた<br />結果としてテンプレートをつくり、そのルールの一つとして、ファイルの&nbsp;3行目にタグを書くという方針にした<br />色々と欠点もあるのだが、それを差し置いて以下のメリットを享受できるのでこの形をとった<br /><ul><li>まず記事を書くだけなのに複数のファイルをいじりたくない（めんどい）</li><li>連想語データベースみたいなことをしても、所詮僕がはてなキーワードやウィキペディアのように関連性の高い用語を自動で検索できる機能を作れる気がしなかった（いや、本家が自動かどうかは知らんが）</li></ul>というわけで一番楽なテンプレートを決めて特定の位置にタグが書かれているという構成をとった<br />今はタグがリンクではないが、この方法なら先々&nbsp;tsx&nbsp;ファイルにコンバート時にリンクとして収集したりするのも楽そうである<br />今回みたいに最小限の価値ある機能を考えて作り出すという考え方は&nbsp;MVP(Minimum&nbsp;Viable&nbsp;Product)&nbsp;と呼ばれる<br /><a href={"https://www.oreilly.co.jp/books/9784873117324/"}>O&#39;Reilly&nbsp;Japan&nbsp;-&nbsp;ユーザーストーリーマッピング</a>&nbsp;の書籍などでも触れられているので知っていると今後ものづくりをする人は役にたつかもしれない<br /><h2>謝辞</h2>MVP&nbsp;の考え方については僕が社内でスタートアップのような制度を利用していた時にオブザーバーとしてお世話になっていた今や&nbsp;uni&#39;que&nbsp;Inc.&nbsp;CEO/Founder&nbsp;の&nbsp;<a href={"https://www.facebook.com/kazuo.wakamiya?fref=nf&amp;<i>tn</i>=%2Cdm-R-R&amp;eid=ARBofPGrIIXYL7OBz4orgZfLRJ_4LrzkgIAvjDnuC-9qR6yyI-C5j1bOmojWzykhnDgvRQIUqwezMKf2"}>@Kazuo&nbsp;Wakamiya</a>&nbsp;にお世話になりながら繰り返し実践した経験の賜物である。<br />今も当時とは違うサービスに携わっているがこの考え方のおかげでものづくりが洗練されているのはいうまでもないので、これを実体験として学ばせてもらったことに感謝したい。<br />
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190703
