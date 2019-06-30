//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190701: React.FC = () => {
  return (
    <div className='diary'>
<h1>React&nbsp;+&nbsp;Typescript&nbsp;の&nbsp;Stateless&nbsp;Function&nbsp;で&nbsp;props&nbsp;を利用する</h1>

<h2>対象者</h2>

<ul><li>Stateless&nbsp;Function&nbsp;を使っていて&nbsp;props&nbsp;の渡し方がわからない方</li>
<li><span className="inline-code">Type&nbsp;&#39;&#123;&nbsp;渡した変数:&nbsp;渡した変数の型;&nbsp;&#125;&#39;&nbsp;is&nbsp;not&nbsp;assignable&nbsp;to&nbsp;type&nbsp;&#39;IntrinsicAttributes&nbsp;&amp;&nbsp;&#123;&nbsp;children?:&nbsp;ReactNode;&nbsp;&#125;&#39;.</span>&nbsp;が出て困ってる方</li>
</ul>
<h2>背景</h2>

カレンダー拡張にあたり、props&nbsp;を扱いたくなったが、<span className="inline-code">Type&nbsp;&#39;&#123;&nbsp;渡した変数:&nbsp;渡した変数の型;&nbsp;&#125;&#39;&nbsp;is&nbsp;not&nbsp;assignable&nbsp;to&nbsp;type&nbsp;&#39;IntrinsicAttributes&nbsp;&amp;&nbsp;&#123;&nbsp;children?:&nbsp;ReactNode;&nbsp;&#125;&#39;.</span>&nbsp;というエラーに阻まれた<br />

ちなみに、そもそもなぜ&nbsp;stateless&nbsp;function&nbsp;を採用しているかは&nbsp;<a href={"https://www.webprofessional.jp/optimizing-react-performance-stateless-components/"}>ステートレスなコンポーネントによるReactのパフォーマンス最適化</a>&nbsp;あたりを参照。<br />


<h2>結果</h2>

React.FC&nbsp;にうまいこと型宣言してあげる<br />

<p className="code"><code>
<span className='code__with-order'>import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;</span><br />
<span className='code__with-order'>import&nbsp;ReactDOM&nbsp;from&nbsp;&#39;react-dom&#39;;</span><br />

<span className='code__with-order'>type&nbsp;Props&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;value:&nbsp;string;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>const&nbsp;Component:&nbsp;React.FC&lt;Props&gt;&nbsp;=&nbsp;(props)&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;props.value&#125;&lt;/p&gt;;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>ReactDOM.render(&lt;Component&nbsp;value=&quot;hoge&quot;&nbsp;/&gt;,&nbsp;document.getElementById(&#39;#app&#39;));</span><br />
</code></p>

<h2>過程</h2>

typescript&nbsp;で書く前まで（babelで）は&nbsp;stateless&nbsp;function&nbsp;での&nbsp;props&nbsp;の受け渡しは以下のようにやっていた<br />

<p className="code"><code>
<span className='code__with-order'>function&nbsp;App&nbsp;()&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;Component&nbsp;value=&#39;hoge&#39;&nbsp;/&gt;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>type&nbsp;Props&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;value:&nbsp;string</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>function&nbsp;Component(props:&nbsp;Props)&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;const&nbsp;&#123;&nbsp;value&nbsp;&#125;&nbsp;=&nbsp;props</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;&nbsp;value&nbsp;&#125;&lt;/p&gt;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

ところがどっこい同じように&nbsp;typescript&nbsp;で書くとエラーで怒られた<br />

<p className="code"><code>
<span className='code__with-order'>const&nbsp;App:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;Component&nbsp;value=&#39;hoge&#39;&nbsp;/&gt;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>type&nbsp;Props&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;value:&nbsp;string;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>const&nbsp;Component:&nbsp;React.FC&nbsp;=&nbsp;(props:&nbsp;Props)&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;const&nbsp;&#123;&nbsp;value&nbsp;&#125;&nbsp;=&nbsp;props;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;&nbsp;value&nbsp;&#125;&lt;/p&gt;;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

理由は&nbsp;React.FC&nbsp;の方に引数の指定をしてあげる必要があるから。<br />

babel&nbsp;でうまくいってたのは&nbsp;function&nbsp;Component&nbsp;の戻り値を明示してなかったからというわけか<br />

宣言の仕方は以下の通り<br />

<p className="code"><code>
<span className='code__with-order'>type&nbsp;Props&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;value:&nbsp;string;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>const&nbsp;Component:&nbsp;React.FC&lt;Props&gt;&nbsp;=&nbsp;(props)&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;const&nbsp;&#123;&nbsp;value&nbsp;&#125;&nbsp;=&nbsp;props;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;&nbsp;value&nbsp;&#125;&lt;/p&gt;;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

もちろん超絶短く書きたい人は短く書いてもらって結構<br />

<p className="code"><code>
<span className='code__with-order'>const&nbsp;Component:&nbsp;React.FC&lt;&#123;&nbsp;value:&nbsp;string&nbsp;&#125;&gt;&nbsp;=&nbsp;(props)&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;&nbsp;props.value&nbsp;&#125;&lt;/p&gt;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190701
