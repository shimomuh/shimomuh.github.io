//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190717: React.FC = () => {
  return (
    <div className='diary'>
        <h1>react-router&nbsp;で遷移したときにスクロール位置を&nbsp;Top&nbsp;に戻す(React&nbsp;16.8&nbsp;and&nbsp;above&nbsp;版)</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>
        <br />
        <h2>対象者</h2>
        
        react-router&nbsp;を使っていて、ページ遷移後にスクロール位置が遷移前と同じ場所になっていて困っている人
        <br />
        <h2>結論</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/638a25b6e9aa4d6fc39187583a98c579427256a0">→成果</a>
        <br />
        <br />
        <table><tr><th>before</th><th>after</th></tr>
        
        <tr><td><img src="/static/diary/2019-07-17/before.gif" alt="" /></td><td><img src="/static/diary/2019-07-17/after.gif" alt="" /></td></tr>
        </table>
        <h2>過程</h2>
        
        まずは動きをみてもらってどう変わったかをみてもらった
        <br />
        仕組みは案外簡単で&nbsp;<a href="https://taroken.org/react-router-scroll-top/">【React】React-Routerで別パスに行った時に上にスクロールしてくれない時</a>&nbsp;を参考にさせてもらって作ったのだが、この記事の中に&nbsp;<a href="https://reacttraining.com/react-router/web/guides/scroll-restoration">公式</a>&nbsp;をみよ！とあったのでみてみたら
        <br />
        &nbsp;
        <br />
        <q>Or&nbsp;if&nbsp;you&nbsp;are&nbsp;running&nbsp;React&nbsp;16.8&nbsp;and&nbsp;above&nbsp;you&nbsp;can&nbsp;use&nbsp;hooks:</q>
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--const">const</span>&nbsp;ScrollToTop&nbsp;=&nbsp;(<span className="syntax--braces">&#123;</span>&nbsp;children&nbsp;location:&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;pathname&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;<span className="syntax--braces">&#125;</span>)&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;useEffect(()&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;window.scrollTo(0&nbsp;0);</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;<span className="syntax--brackets">[</span>pathname<span className="syntax--brackets">]</span>);</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;children;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span>;</span><br />
        </code></p>
        
        とあったので丸パクリしたというわけである
        <br />
        せっかくなので新鮮なネタにしてみたので上記記事とも差分はある
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190717
