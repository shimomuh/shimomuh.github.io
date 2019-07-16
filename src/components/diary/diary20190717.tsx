//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190717: React.FC = () => {
  return (
    <div className='diary'>
      <h1>react-router&nbsp;で遷移したときにスクロール位置を&nbsp;Top&nbsp;に戻す(React&nbsp;16.8&nbsp;and&nbsp;above&nbsp;版)</h1>タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link><br /><h2>対象者</h2>react-router&nbsp;を使っていて、ページ遷移後にスクロール位置が遷移前と同じ場所になっていて困っている人<br /><h2>結果</h2><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/638a25b6e9aa4d6fc39187583a98c579427256a0"}>→成果</a><br /><h3>before</h3><img src="/diary/2019-07-17/before.gif" /><br /><h3>after</h3><img src="/diary/2019-07-17/after.gif" /><br /><h2>過程</h2>まずは動きをみてもらってどう変わったかをみてもらった<br />仕組みは案外簡単で&nbsp;<a href={"https://taroken.org/react-router-scroll-top/"}>【React】React-Routerで別パスに行った時に上にスクロールしてくれない時</a>&nbsp;を参考にさせてもらって作ったのだが、この記事の中に&nbsp;<a href={"https://reacttraining.com/react-router/web/guides/scroll-restoration"}>公式</a>&nbsp;をみよ！とあったのでみてみたら<br />&nbsp;<br /><q>Or&nbsp;if&nbsp;you&nbsp;are&nbsp;running&nbsp;React&nbsp;16.8&nbsp;and&nbsp;above&nbsp;you&nbsp;can&nbsp;use&nbsp;hooks:</q><br /><p className="code"><code><span className="code__with-order">const&nbsp;ScrollToTop&nbsp;=&nbsp;(&#123;&nbsp;children&nbsp;location:&nbsp;&#123;&nbsp;pathname&nbsp;&#125;&nbsp;&#125;)&nbsp;=&gt;&nbsp;&#123;</span><br /><span className="code__with-order">&nbsp;&nbsp;useEffect(()&nbsp;=&gt;&nbsp;&#123;</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;window.scrollTo(0&nbsp;0);</span><br /><span className="code__with-order">&nbsp;&nbsp;&#125;&nbsp;[pathname]);</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">&nbsp;&nbsp;return&nbsp;children;</span><br /><span className="code__with-order">&#125;;</span><br /></code></p><br />とあったので丸パクリしたというわけである<br />せっかくなので新鮮なネタにしてみたので上記記事とも差分はある
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190717
