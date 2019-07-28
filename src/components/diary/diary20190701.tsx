//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190701: React.FC = () => {
  return (
    <div className='diary'>
        <h1>React&nbsp;+&nbsp;Typescript&nbsp;の&nbsp;Stateless&nbsp;Function&nbsp;で&nbsp;props&nbsp;を利用する</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>
        <br />
        <h2>対象者</h2>
        
        <ul><li>Stateless&nbsp;Function&nbsp;を使っていて&nbsp;props&nbsp;の渡し方がわからない方</li>
        <li><span className="inline-code">Type&nbsp;&#39;&#123;&nbsp;渡した変数:&nbsp;渡した変数の型;&nbsp;&#125;&#39;&nbsp;is&nbsp;not&nbsp;assignable&nbsp;to&nbsp;type&nbsp;&#39;IntrinsicAttributes&nbsp;&amp;&nbsp;&#123;&nbsp;children?:&nbsp;ReactNode;&nbsp;&#125;&#39;.</span>&nbsp;が出て困ってる方</li>
        </ul>
        <h2>背景</h2>
        
        カレンダー拡張にあたり、props&nbsp;を扱いたくなったが、<span className="inline-code">Type&nbsp;&#39;&#123;&nbsp;渡した変数:&nbsp;渡した変数の型;&nbsp;&#125;&#39;&nbsp;is&nbsp;not&nbsp;assignable&nbsp;to&nbsp;type&nbsp;&#39;IntrinsicAttributes&nbsp;&amp;&nbsp;&#123;&nbsp;children?:&nbsp;ReactNode;&nbsp;&#125;&#39;.</span>&nbsp;というエラーに阻まれた
        <br />
        ちなみに、そもそもなぜ&nbsp;stateless&nbsp;function&nbsp;を採用しているかは&nbsp;<a href="https://www.webprofessional.jp/optimizing-react-performance-stateless-components/">ステートレスなコンポーネントによるReactのパフォーマンス最適化</a>&nbsp;あたりを参照。
        <br />
        <br />
        <h2>結果</h2>
        
        React.FC&nbsp;にうまいこと型宣言してあげる
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--import">import</span>&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;</span><br />
        <span className="code__with-order"><span className="syntax--import">import</span>&nbsp;ReactDOM&nbsp;from&nbsp;&#39;react-dom&#39;;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">type&nbsp;Props&nbsp;=&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;value:&nbsp;<span className="syntax--string">string</span>;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order"><span className="syntax--const">const</span>&nbsp;Component:&nbsp;React.FC&lt;Props&gt;&nbsp;=&nbsp;(props)&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;p&gt;<span className="syntax--braces">&#123;</span>props.value<span className="syntax--braces">&#125;</span>&lt;/p&gt;;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">ReactDOM.render(&lt;Component&nbsp;value=&quot;hoge&quot;&nbsp;/&gt;&nbsp;<span className="syntax--document">document</span>.getElementById(&#39;#app&#39;));</span><br />
        </code></p>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/pull/7/commits/b635bb97bd4ccbad0c56bd9766dc907d2d18775f">→成果</a>
        <br />
        <h2>過程</h2>
        
        typescript&nbsp;で書く前まで（babelで）は&nbsp;stateless&nbsp;function&nbsp;での&nbsp;props&nbsp;の受け渡しは以下のようにやっていた
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--function">function</span>&nbsp;App&nbsp;()&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;Component&nbsp;value=&#39;hoge&#39;&nbsp;/&gt;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">type&nbsp;Props&nbsp;=&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;value:&nbsp;<span className="syntax--string">string</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order"><span className="syntax--function">function</span>&nbsp;Component(props:&nbsp;Props)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--const">const</span>&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;value&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;=&nbsp;props</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;p&gt;<span className="syntax--braces">&#123;</span>&nbsp;value&nbsp;<span className="syntax--braces">&#125;</span>&lt;/p&gt;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        ところがどっこい同じように&nbsp;typescript&nbsp;で書くとエラーで怒られた
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--const">const</span>&nbsp;App:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;Component&nbsp;value=&#39;hoge&#39;&nbsp;/&gt;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">type&nbsp;Props&nbsp;=&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;value:&nbsp;<span className="syntax--string">string</span>;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order"><span className="syntax--const">const</span>&nbsp;Component:&nbsp;React.FC&nbsp;=&nbsp;(props:&nbsp;Props)&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--const">const</span>&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;value&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;=&nbsp;props;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;p&gt;<span className="syntax--braces">&#123;</span>&nbsp;value&nbsp;<span className="syntax--braces">&#125;</span>&lt;/p&gt;;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        理由は&nbsp;React.FC&nbsp;の方に引数の指定をしてあげる必要があるから。
        <br />
        babel&nbsp;でうまくいってたのは&nbsp;function&nbsp;Component&nbsp;の戻り値を明示してなかったからというわけか
        <br />
        宣言の仕方は以下の通り
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">type&nbsp;Props&nbsp;=&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;value:&nbsp;<span className="syntax--string">string</span>;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order"><span className="syntax--const">const</span>&nbsp;Component:&nbsp;React.FC&lt;Props&gt;&nbsp;=&nbsp;(props)&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--const">const</span>&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;value&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;=&nbsp;props;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;p&gt;<span className="syntax--braces">&#123;</span>&nbsp;value&nbsp;<span className="syntax--braces">&#125;</span>&lt;/p&gt;;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        もちろん超絶短く書きたい人は短く書いてもらって結構
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--const">const</span>&nbsp;Component:&nbsp;React.FC&lt;<span className="syntax--braces">&#123;</span>&nbsp;value:&nbsp;<span className="syntax--string">string</span>&nbsp;<span className="syntax--braces">&#125;</span>&gt;&nbsp;=&nbsp;(props)&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;&lt;p&gt;<span className="syntax--braces">&#123;</span>&nbsp;props.value&nbsp;<span className="syntax--braces">&#125;</span>&lt;/p&gt;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190701
