//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190704: React.FC = () => {
  return (
    <div className='diary'>
      <h1>CSS&nbsp;ハックを使って以前実装した&nbsp;<span className="inline-code">&lt;code&gt;</span>&nbsp;タグのデザイン崩れに対応する</h1>タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/9'><span className='inline-code'>CSS</span></Link>&nbsp;<Link to='/tag/6'><span className='inline-code'>Scss</span></Link><br /><h2>対象者</h2><ul><li>CSS&nbsp;ハックなにそれ食べれるの？</li><li>CSS&nbsp;ハックバリバリ使ってるよ！</li></ul>という方々向け。<br />残念ながら&nbsp;CSS&nbsp;ハックは使うべきじゃない！方、&nbsp;JS&nbsp;でやるべきだろ！派の方は対象外。<br /><h2>背景</h2>ブラウザでなんとなく確認したら画像がとんでもないことになっていたのを見つけた...<br /><img src="/diary/2019-07-04/browser-diff-before.png" /><br />スタイルはあくまで&nbsp;CSS&nbsp;が担当すべき派の僕としては&nbsp;CSS&nbsp;をハックしてでも頑張るという方向で対処することにした<br /><br /><h2>結果</h2><ul><li>Firefox&nbsp;は&nbsp;<span className="inline-code">height</span>&nbsp;がうまくとれないので諦めてデザイン自体を変更する方向に</li><li>Safari&nbsp;は微調整</li><li>IE&nbsp;は...&nbsp;色々ありそうなので別途</li></ul><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/ff334744a9283e290e7dff3baaa539ee8a21f6b3"}>→成果</a><br /><p className="code"><code><span className="code__with-order">/*&nbsp;Safari&nbsp;のみ&nbsp;*/</span><br /><span className="code__with-order">_::-webkit-full-page-media&nbsp;_:future&nbsp;:root&nbsp;.diary&nbsp;&#123;</span><br /><span className="code__with-order">&nbsp;&nbsp;color:&nbsp;red;</span><br /><span className="code__with-order">&#125;</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">/*&nbsp;Firefox&nbsp;のみ&nbsp;*/</span><br /><span className="code__with-order">@-moz-document&nbsp;url-prefix()&nbsp;&#123;</span><br /><span className="code__with-order">&nbsp;&nbsp;.diary&nbsp;&#123;</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;red;</span><br /><span className="code__with-order">&nbsp;&nbsp;&#125;</span><br /><span className="code__with-order">&#125;</span><br /></code></p><br />みたいな感じで対応した<br /><a href={"https://kuroko-role.co.jp/css-html/browser-hack2018/"}>ブラウザ別に適用させるCSSハック2018&nbsp;|&nbsp;株式会社クロコロール</a>&nbsp;を丸パクリ...<br /><img src="/diary/2019-07-04/browser-diff-after.png" />
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190704
