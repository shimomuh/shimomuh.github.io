//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190712: React.FC = () => {
  return (
    <div className='diary'>
      <h1>タグを分類するための&nbsp;JSON&nbsp;生成とエンドポイントの修正</h1>タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/12'><span className='inline-code'>設計</span></Link><br /><h2>対象者</h2>このサイトの生い立ちを追ってきた人<br /><h2>背景</h2>タイトルの通り、タグをリンクにしてタグに関する記事をまとめたいなと思ったのでその&nbsp;JSON&nbsp;を生成する仕組みとエンドポイントの見直しを行った<br /><h2>結果</h2><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/b2150ce16dfd0c9132280e29d8bf0e267c5ecf4a"}>→成果</a><br />JSON&nbsp;吐き出しについてはタイトルのときと類似なので割愛して今回はエンドポイントの見直しについて少し触れる<br />&nbsp;<br />今回は閲覧もほぼされてないだろうと割り切りエンドポイントをざっくり以下のように変更した<br /><p className="code"><code><span className="code__with-order">-&nbsp;/2019-07-12</span><br /><span className="code__with-order">+&nbsp;/diary/2019-07-12</span><br /></code></p>こうすることで、&nbsp;<span className="inline-code">/tag/**</span>&nbsp;が切りやすくなるという次第である<br />しかし本来はこういったものはすでに閲覧が多いサイトなどでは容易にはいかない<br />エンドポイントを被らないようにしながら一定期間リダイレクトをかけたり歪な&nbsp;URL&nbsp;設計を許容したりする必要がある<br />そういう意味でもエンドポイントの設計は最初からされるべきだ<br />&nbsp;<br />とはいえ、サービスは日々改善され新しい機能が実装されるごとにエンドポイントが増えることが往往にしてある<br />そのため、&nbsp;<s>（今回ほどひどい設計はしないまでも）</s>&nbsp;ある程度最初にエンドポイントを設計して、あとは柔軟に対応していく必要がある<br />&nbsp;<br />次回はいよいよタグのエンドポイントを切ろうと思うが、日本語URL設計やファイル名をどうするかについては検討の余地がある（もちろん&nbsp;id&nbsp;にしてしまえば楽ではあるのだが、JSON&nbsp;で書き出す場合は&nbsp;DB&nbsp;のように恒久的にその&nbsp;ID&nbsp;を保証しきれないので）
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190712
