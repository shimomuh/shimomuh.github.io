//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190627: React.FC = () => {
  return (
    <div className='diary'>
        <h1>create-react-app&nbsp;でも&nbsp;scss&nbsp;が使いたい！</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>&nbsp;<Link to='/tag/6'><span className='inline-code'>Scss</span></Link>
        <br />
        <h2>対象者</h2>
        
        create-react-app&nbsp;の導入に倣って入れたはいいけど、&nbsp;css&nbsp;しか使えないの！？って人向け
        <br />
        <h2>背景</h2>
        
        まさか今時&nbsp;hot-loader&nbsp;でも&nbsp;scss&nbsp;が使えないなんて言わないよね？って発想から
        <br />
        <h2>結論</h2>
        
        <p className="code bash"><code>
        <span className="code__with-order">npm&nbsp;i&nbsp;--save-dev&nbsp;node-sass</span><br />
        </code></p>
        
        以上！
        <br />
        あとは、&nbsp;import&nbsp;しているファイルの拡張子なんかを変えてあげれば&nbsp;OK
        <br />
        &nbsp;
        <br />
        <b>階層</b>
        <br />
        <p className="code "><code>
        <span className="code__with-order">src</span><br />
        <span className="code__with-order">├──&nbsp;components</span><br />
        <span className="code__with-order">│  &nbsp;├──&nbsp;adventCalendar</span><br />
        <span className="code__with-order">│  &nbsp;│  &nbsp;├──&nbsp;calendar.css&nbsp;-&gt;&nbsp;calendar.scss</span><br />
        <span className="code__with-order">│  &nbsp;│  &nbsp;├──&nbsp;calendar.tsx</span><br />
        <span className="code__with-order">│  &nbsp;│  &nbsp;└──&nbsp;root.tsx</span><br />
        <span className="code__with-order">│  &nbsp;└──&nbsp;index.tsx</span><br />
        <span className="code__with-order">├──&nbsp;index.css&nbsp;-&gt;&nbsp;index.scss</span><br />
        <span className="code__with-order">├──&nbsp;index.tsx</span><br />
        <span className="code__with-order">├──&nbsp;models</span><br />
        <span className="code__with-order">│  &nbsp;└──&nbsp;calendar.tsx</span><br />
        <span className="code__with-order">├──&nbsp;react-app-env.d.ts</span><br />
        <span className="code__with-order">└──&nbsp;serviceWorker.ts</span><br />
        </code></p>
        
        <b>ファイル内置換</b>
        <br />
        例えば、&nbsp;index.tsx&nbsp;で以下を置換してあげるだけ
        <br />
        <p className="code diff"><code>
        <span className="code__with-order">-&nbsp;<span className="syntax--import">import</span>&nbsp;&#39;./index.css&#39;</span><br />
        <span className="code__with-order">+&nbsp;<span className="syntax--import">import</span>&nbsp;&#39;./index.scss&#39;</span><br />
        </code></p>
        
        あとはいつも通りの&nbsp;scss&nbsp;ライフが送れます&nbsp;&#x1f389;
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/pull/3/commits/0c66d7360925c15c9cdea7d51a33cf0d01695cae">→成果</a>
        <br />
        <h2>参考</h2>
        
        <ul><li><a href="https://qiita.com/yikeda6616/items/0e31a920d533d70c0bd9">create-react-appでSassやCSS-moduleを使う方法</a></li></ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190627
