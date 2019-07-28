//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190720: React.FC = () => {
  return (
    <div className='diary'>
        <h1>create-react-app&nbsp;で作った&nbsp;JS&nbsp;ファイルで静的ファイルを参照したい</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>
        <br />
        <h2>対象者</h2>
        
        create-react-app&nbsp;を進めてきた人のうち&nbsp;src&nbsp;以外のディレクトリに配置したファイルを&nbsp;public&nbsp;以下に配置して参照できるようにしたい
        <br />
        <h2>結果</h2>
        
        ディスク容量効率はよくないが、シンボリックリンクだとダメだったのでやむなくファイルをコピーして&nbsp;public&nbsp;以下に配置するスクリプトを書くことにした
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/10cc701fd3a6850f7673db780ef62a2202709387">→成果</a>
        <br />
        ruby&nbsp;のスクリプトだが簡素なので転機しておく
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">require&nbsp;&#39;fileutils&#39;&nbsp;#&nbsp;ファイル操作をするのに必要なやーつ</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">#&nbsp;正規表現で対応するファイルを決める</span><br />
        <span className="code__with-order">#&nbsp;sort&nbsp;しているのは&nbsp;Dir.glob&nbsp;が順序を保証しないため</span><br />
        <span className="code__with-order">image_file_paths&nbsp;=&nbsp;Dir.glob(&#39;diary/**/*\.<span className="syntax--braces">&#123;</span>pngjpgjpeggifsvg<span className="syntax--braces">&#125;</span>&#39;).sort</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">dirs&nbsp;=&nbsp;<span className="syntax--brackets">[</span><span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">files&nbsp;=&nbsp;<span className="syntax--brackets">[</span><span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">Dir.glob(&#39;diary/**/*\.<span className="syntax--braces">&#123;</span>pngjpgjpeggifsvg<span className="syntax--braces">&#125;</span>&#39;)&nbsp;<span className="syntax--do">do</span>&nbsp;|f|&nbsp;#&nbsp;はじめにファイルを読み込み</span><br />
        <span className="code__with-order">&nbsp;&nbsp;files.push&nbsp;f</span><br />
        <span className="code__with-order">&nbsp;&nbsp;dirs.push&nbsp;File.dirname(f)</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">dirs.uniq.sort.each&nbsp;<span className="syntax--do">do</span>&nbsp;|dir|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;puts&nbsp;dir</span><br />
        <span className="code__with-order">&nbsp;&nbsp;FileUtils.mkdir_p(&quot;<span className="syntax--public">public</span>/static/#<span className="syntax--braces">&#123;</span>dir<span className="syntax--braces">&#125;</span>&quot;)&nbsp;#&nbsp;存在しないディレクトリにコピーしないように&nbsp;mkdir&nbsp;-p&nbsp;して</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">files.each&nbsp;<span className="syntax--do">do</span>&nbsp;|file|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;FileUtils.cp&nbsp;file&nbsp;&quot;<span className="syntax--public">public</span>/static/#<span className="syntax--braces">&#123;</span>file<span className="syntax--braces">&#125;</span>&quot;&nbsp;#&nbsp;ファイルをコピーする</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        </code></p>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190720
