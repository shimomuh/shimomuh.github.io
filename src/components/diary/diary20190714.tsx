//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190714: React.FC = () => {
  return (
    <div className='diary'>
      <h1>Github&nbsp;からセキュリティ脆弱性の通知がきたとき</h1>タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/3'><span className='inline-code'>Github</span></Link><br /><h2>背景</h2>ある日&nbsp;Github&nbsp;をみているとセキュリティ脆弱性に関する警告が出ていた<br /><img src="/diary/2019-07-14/security-alert.png" /><br />これに対策する<br /><h2>結果</h2><h3>自力で入れる</h3>単純に上記の&nbsp;[See&nbsp;security&nbsp;alert]&nbsp;ボタンを押すと<br /><img src="/diary/2019-07-14/warned-module.png" /><br />このようにエラーモジュール一覧が表示されているので選択すると解消方法が記載されている<br /><img src="/diary/2019-07-14/resolve-security-alert.png" /><br />この通りに対応すればいける<br />&nbsp;<br />今回は以下のような感じ<br /><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/a8a1acd8691635107bbf7a7209301911dc5df89c"}>→成果</a><br /><p className="code"><code><span className="code__with-order">npm&nbsp;i&nbsp;--save-dev&nbsp;lodash.template@4.5.0</span><br /></code></p><br /><h3>Github&nbsp;bot&nbsp;で自動で導入する</h3>先程の解消方法が記載されたページに&nbsp;[Create&nbsp;automated&nbsp;security&nbsp;fix]&nbsp;という緑のボタンがある<br />これを押すと以下のようにボタンがなくなり&nbsp;Generating&nbsp;an&nbsp;automated&nbsp;security&nbsp;fix&nbsp;な&nbsp;Pull&nbsp;Request&nbsp;が生成される<br /><img src="/diary/2019-07-14/after-create-automated-security-fix.png" /><br />実際に&nbsp;Pull&nbsp;Request&nbsp;ができていて<br /><img src="/diary/2019-07-14/pull-request.png" /><br />クリックすると、&nbsp;Bot&nbsp;によって生成されていることがわかる<br /><img src="/diary/2019-07-14/pr-by-bot.png" /><br /><h2>補足</h2>ビジネス的な要件やステークホルダーの都合で脆弱性が含まれていることがわかっていても更新が許容できない場合があるかもしれない（あまりよくわからないが）<br />一応その場合の対処法についても述べると、先程の解消方法が記載されたページの&nbsp;[Dismiss]&nbsp;のボタンを押すと実施できる<br />その際理由を求められるので選択すれば許容できる<br /><img src="/diary/2019-07-14/dismiss.png" /><br />実施していないからわからないが、おそらく&nbsp;Github&nbsp;リポジトリトップの警告が消えるんじゃないかな？<br /><br />
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190714
