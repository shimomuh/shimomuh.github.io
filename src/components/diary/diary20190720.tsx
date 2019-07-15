//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190720: React.FC = () => {
  return (
    <div className='diary'>
      <h1>create-react-app&nbsp;で作った&nbsp;JS&nbsp;ファイルで静的ファイルを参照したい</h1>タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link><br /><h2>対象者</h2>create-react-app&nbsp;を進めてきた人のうち&nbsp;src&nbsp;以外のディレクトリに配置したファイルを&nbsp;public&nbsp;以下に配置して参照できるようにしたい<br /><h2>結果</h2>ディスク容量効率はよくないが、シンボリックリンクだとダメだったのでやむなくファイルをコピーして&nbsp;public&nbsp;以下に配置するスクリプトを書くことにした<br /><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/10cc701fd3a6850f7673db780ef62a2202709387"}>→成果</a><br />ruby&nbsp;のスクリプトだが簡素なので転機しておく<br /><p className="code"><code><span className="code__with-order">require&nbsp;&#39;fileutils&#39;&nbsp;#&nbsp;ファイル操作をするのに必要なやーつ</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">#&nbsp;正規表現で対応するファイルを決める</span><br /><span className="code__with-order">#&nbsp;sort&nbsp;しているのは&nbsp;Dir.glob&nbsp;が順序を保証しないため</span><br /><span className="code__with-order">image_file_paths&nbsp;=&nbsp;Dir.glob(&#39;diary/**/*\.&#123;pngjpgjpeggifsvg&#125;&#39;).sort</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">dirs&nbsp;=&nbsp;[]</span><br /><span className="code__with-order">files&nbsp;=&nbsp;[]</span><br /><span className="code__with-order">Dir.glob(&#39;diary/**/*\.&#123;pngjpgjpeggifsvg&#125;&#39;)&nbsp;do&nbsp;|f|&nbsp;#&nbsp;はじめにファイルを読み込み</span><br /><span className="code__with-order">&nbsp;&nbsp;files.push&nbsp;f</span><br /><span className="code__with-order">&nbsp;&nbsp;dirs.push&nbsp;File.dirname(f)</span><br /><span className="code__with-order">end</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">dirs.uniq.sort.each&nbsp;do&nbsp;|dir|</span><br /><span className="code__with-order">&nbsp;&nbsp;puts&nbsp;dir</span><br /><span className="code__with-order">&nbsp;&nbsp;FileUtils.mkdir_p(&quot;public/static/#&#123;dir&#125;&quot;)&nbsp;#&nbsp;存在しないディレクトリにコピーしないように&nbsp;mkdir&nbsp;-p&nbsp;して</span><br /><span className="code__with-order">end</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">files.each&nbsp;do&nbsp;|file|</span><br /><span className="code__with-order">&nbsp;&nbsp;FileUtils.cp&nbsp;file&nbsp;&quot;public/static/#&#123;file&#125;&quot;&nbsp;#&nbsp;ファイルをコピーする</span><br /><span className="code__with-order">end</span><br /></code></p>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190720
