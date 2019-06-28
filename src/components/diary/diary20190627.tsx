import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190627: React.FC = () => {
  return (
    <div>
<h1>create-react-app&nbsp;でも&nbsp;scss&nbsp;が使いたい！<br /></h1>

<h2>対象者<br /></h2>

create-react-app&nbsp;の導入に倣って入れたはいいけど、&nbsp;css&nbsp;しか使えないの！？って人向け<br />

<h2>背景<br /></h2>

まさか今時&nbsp;hot-loader&nbsp;でも&nbsp;scss&nbsp;が使えないなんて言わないよね？って発想から<br />

<h2>結果<br /></h2>

<p className="code"><code>
npm&nbsp;i&nbsp;--save-dev&nbsp;node-sass<br />
</code></p>

以上！<br />

あとは、&nbsp;import&nbsp;しているファイルの拡張子なんかを変えてあげれば&nbsp;OK<br />

<b>階層</b><br />

<p className="code"><code>
src<br />
├──&nbsp;components<br />
│  &nbsp;├──&nbsp;adventCalendar<br />
│  &nbsp;│  &nbsp;├──&nbsp;calendar.css&nbsp;-&gt;&nbsp;calendar.scss<br />
│  &nbsp;│  &nbsp;├──&nbsp;calendar.tsx<br />
│  &nbsp;│  &nbsp;└──&nbsp;root.tsx<br />
│  &nbsp;└──&nbsp;index.tsx<br />
├──&nbsp;index.css&nbsp;-&gt;&nbsp;index.scss<br />
├──&nbsp;index.tsx<br />
├──&nbsp;models<br />
│  &nbsp;└──&nbsp;calendar.tsx<br />
├──&nbsp;react-app-env.d.ts<br />
└──&nbsp;serviceWorker.ts<br />
</code></p>

<b>ファイル内置換</b><br />

例えば、&nbsp;index.tsx&nbsp;で以下を置換してあげるだけ<br />

<p className="code"><code>
-&nbsp;import&nbsp;&#39;./index.css&#39;<br />
+&nbsp;import&nbsp;&#39;./index.scss&#39;<br />
</code></p>

あとはいつも通りの&nbsp;scss&nbsp;ライフが送れます&nbsp;&#x1f389;<br />

<h2>参考<br /></h2>

<ul><li><a href={"https://qiita.com/yikeda6616/items/0e31a920d533d70c0bd9"} target="_blank">create-react-appでSassやCSS-moduleを使う方法</a></li>
</ul>
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190627
