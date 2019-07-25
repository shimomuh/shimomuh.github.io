//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190628: React.FC = () => {
  return (
    <div className='diary'>
        <h1>react-router-dom&nbsp;でルーティングする</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>
        <br />
        <h2>対象者</h2>
        
        react-router-dom&nbsp;何ソレ美味しいの？という人向け
        <br />
        <h2>背景</h2>
        
        今書いてるこの&nbsp;markdown&nbsp;ファイルを&nbsp;tsx&nbsp;に置換するスクリプトを書いて、それをルーティングすれば&nbsp;github&nbsp;のページに飛ばさなくてもあたかも自分のページのように表現できるんじゃね？と思ったのがきっかけ
        <br />
        <h2>結果</h2>
        
        <p className="code bash"><code>
        <span className="code__with-order">npm&nbsp;i&nbsp;--save&nbsp;react-douter-dom&nbsp;@types/react-router-dom</span><br />
        </code></p>
        
        をインスコ
        <br />
        あとは&nbsp;<a href="https://numb86-tech.hatenablog.com/entry/2017/05/06/125333">React&nbsp;Router&nbsp;v4&nbsp;の基本的な考え方と使い方</a>&nbsp;のママ
        <br />
        &nbsp;
        <br />
        <b>呼び出し側</b>
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--import">import&nbsp;</span>React&nbsp;from&nbsp;&#39;react&#39;;</span><br />
        <span className="code__with-order"><span className="syntax--import">import&nbsp;</span>ReactDOM&nbsp;from&nbsp;&#39;react-dom&#39;;</span><br />
        <span className="code__with-order"><span className="syntax--import">import&nbsp;</span><span className="syntax--braces">&#123;</span>&nbsp;BrowserRouter&nbsp;Route&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;from&nbsp;&#39;react-router-dom&#39;;</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--const">const&nbsp;</span>Router:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;(</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;BrowserRouter&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route&nbsp;exact&nbsp;path=&#39;/&#39;&nbsp;component=<span className="syntax--braces">&#123;</span>Index<span className="syntax--braces">&#125;</span>&nbsp;/&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route&nbsp;path=&#39;/home&#39;&nbsp;component=<span className="syntax--braces">&#123;</span>Home<span className="syntax--braces">&#125;</span>&nbsp;/&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/BrowserRouter&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;);</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--const">const&nbsp;</span>Index:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;(</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Index&lt;/h1&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;);</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--const">const&nbsp;</span>Home:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;(</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Home&lt;/h1&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;);</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">ReactDOM.r<span className="syntax--end">end</span>er(&lt;Router&nbsp;/&gt;<span className="syntax--do">&nbsp;do</span>cument.getElementById(&#39;#app&#39;));</span><br />
        </code></p>
        
        本当は他にも&nbsp;History&nbsp;対応だったり&nbsp;state&nbsp;を使ってページまたぎでデータを使ったりできるのだが、それはこの&nbsp;Web&nbsp;サイトではﾀﾌﾞﾝやらない
        <br />
        他にホームページを作っているのでそちらで実践についてお話する機会があれば寄稿しようと思ふ
        <br />
        明日は途中まで書いてる&nbsp;md&nbsp;を&nbsp;tsx&nbsp;に変えるスクリプトについてでも書きたいなぁ
        <br />
        &nbsp;
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/pull/4/commits/ebb1789f743089f95f9746d45da7890c80ac839b">→成果</a>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190628
