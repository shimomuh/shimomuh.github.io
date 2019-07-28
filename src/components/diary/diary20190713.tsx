//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190713: React.FC = () => {
  return (
    <div className='diary'>
        <h1>Ruby&nbsp;で&nbsp;to_json&nbsp;時にインデントや改行したいとき</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        json&nbsp;ファイルを出力時に&nbsp;<span className="inline-code">to_json</span>&nbsp;メソッドを使うとインデントや改行がされなくて困ってる人
        <br />
        <h2>背景</h2>
        
        <p className="code ruby"><code>
        <span className="code__with-order">require&nbsp;&#39;json&#39;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">File.open(&#39;file.json&#39;&nbsp;&#39;w&#39;)&nbsp;<span className="syntax--do">do</span>&nbsp;|f|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;f.write&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;hoge:&nbsp;1&nbsp;huga:&nbsp;2&nbsp;<span className="syntax--braces">&#125;</span>.to_json</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        </code></p>
        
        とすると
        <br />
        <p className="code "><code>
        <span className="code__with-order"><span className="syntax--braces">&#123;</span>&quot;hoge&quot;:1&quot;huga&quot;:2<span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        と改行やインデントなしに生成される
        <br />
        これはこれで読み込みサイズを削減したりするのには役に立つ
        <br />
        しかし、今回は&nbsp;build.js&nbsp;で&nbsp;minify&nbsp;されるので可読性を優先したかった
        <br />
        <h2>結論</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/96b448f496f040fa89ea9db5e4956829c06ed3b1">→成果</a>
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">require&nbsp;&#39;json&#39;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">File.open(&#39;file.json&#39;&nbsp;&#39;w&#39;)&nbsp;<span className="syntax--do">do</span>&nbsp;|f|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;f.write&nbsp;JSON.pretty_generate(<span className="syntax--braces">&#123;</span>&nbsp;hoge:&nbsp;1&nbsp;huga:&nbsp;2&nbsp;<span className="syntax--braces">&#125;</span>)</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        </code></p>
        
        とすると
        <br />
        <p className="code json"><code>
        <span className="code__with-order"><span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;hoge&quot;:&nbsp;1</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;huga&quot;:&nbsp;2</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        と改行やインデントに加え、適切にスペースも含めてくれて可読性が上がって&nbsp;good&nbsp;&#x1f44d;
        <br />
        <h2>参考</h2>
        
        <ul><li><a href="http://hai3.net/blog/2013/02/14/json-pretty-generate/">to_jsonの時にppっぽくしたい場合</a></li></ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190713
