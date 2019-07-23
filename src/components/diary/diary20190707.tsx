//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190707: React.FC = () => {
  return (
    <div className='diary'>
        <h1>Json&nbsp;ファイルを&nbsp;React&nbsp;で読み取る</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>&nbsp;<Link to='/tag/12'><span className='inline-code'>設計</span></Link>
        <br />
        <h2>対象者</h2>
        
        <ul><li>React&nbsp;で&nbsp;Json&nbsp;を読み込みたいけどやり方を知らない</li>
        <li>実装イメージはつくけどいざやってみるとコンパイラでエラーが出た</li>
        </ul>
        そんな人
        <br />
        <h2>背景</h2>
        
        Markdown&nbsp;形式で書いた記事のタイトルをカレンダーに表示したいと思ったがカレンダー部分は&nbsp;tsx&nbsp;ゴリゴリで今後も柔軟な変更が求められそうだったので以下のように対策することにした
        <br />
        &nbsp;
        <br />
        1.&nbsp;article.md&nbsp;の1行目を読み取って&nbsp;ruby&nbsp;スクリプトで&nbsp;json&nbsp;に吐き出す
        <br />
        2.&nbsp;吐き出した&nbsp;json&nbsp;を&nbsp;Typescript&nbsp;風に読み込んで&nbsp;ReactDOM&nbsp;で表示する
        <br />
        &nbsp;
        <br />
        <h2>結果</h2>
        
        背景に書いた通りのプロセスで実現した
        <br />
        &nbsp;
        <br />
        <a href={"https://github.com/shimomuh/shimomuh.github.io/commit/23fec03e5f7656ccf9dab360d7d4fe7fd1ec460a"}>→成果</a>
        <br />
        &nbsp;
        <br />
        今回はその中でも躓いた部分について解説する
        <br />
        <h2>過程</h2>
        
        <h3>Typescript&nbsp;で&nbsp;json&nbsp;ってどう読むの？</h3>
        
        非同期の方法は色々あるし知っているけど、そうじゃなくて簡素に&nbsp;json&nbsp;を読みたいんだ！
        <br />
        ファイルサイズが増えてきたら&nbsp;<span className="inline-code">saga.js</span>&nbsp;とか使って対策するからまずシンプルな方法を教えてくれ！
        <br />
        &nbsp;
        <br />
        めっちゃ簡単でした
        <br />
        <a href={"https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript"}>Importing&nbsp;json&nbsp;file&nbsp;in&nbsp;TypeScript&nbsp;-&nbsp;stack&nbsp;overflow</a>
        <br />
        &nbsp;
        <br />
        <b>json</b>
        <br />
        <p className="code json"><code>
        <span className="code__with-order">&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;key&quot;:&nbsp;&quot;value&quot;</span><br />
        <span className="code__with-order">&#125;</span><br />
        </code></p>
        
        &nbsp;
        <br />
        <b>Typescript</b>
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;</span><br />
        <span className="code__with-order">import&nbsp;json&nbsp;from&nbsp;&#39;data.json&#39;;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">const&nbsp;Component:&nbsp;React.RC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;json.key&#125;&lt;/p&gt;&nbsp;//&nbsp;=&gt;&nbsp;&quot;&lt;p&gt;value&lt;/p&gt;&quot;</span><br />
        <span className="code__with-order">&#125;</span><br />
        </code></p>
        
        なんてシンプルなんだﾊｯΣ&nbsp;(ﾟДﾟ!!!
        <br />
        &nbsp;
        <br />
        ...
        <br />
        &nbsp;
        <br />
        なんて簡単に問屋はおろさない
        <br />
        案の定、型を定義してないから定義してくれよ！って怒られる
        <br />
        &nbsp;
        <br />
        <span className="inline-code">Index&nbsp;signature&nbsp;of&nbsp;object&nbsp;type&nbsp;implicitly&nbsp;has&nbsp;an&nbsp;&#39;any&#39;&nbsp;type.</span>
        <br />
        &nbsp;
        <br />
        そこで&nbsp;<a href={"https://qiita.com/gonta/items/fb7b9e6d0f12060c27d6"}>Typescriptで、Objectkeyとすると出るIndex&nbsp;signature&nbsp;of&nbsp;object&nbsp;type&nbsp;implicitly&nbsp;has&nbsp;an&nbsp;&#39;any&#39;&nbsp;type.を正しく回避する</a>&nbsp;に書いてあったことを参考に冗長に対応した
        <br />
        <i>多分もっとうまい方法はある</i>
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;</span><br />
        <span className="code__with-order">import&nbsp;json&nbsp;from&nbsp;&#39;data.json&#39;;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">type&nbsp;Props&nbsp;=&nbsp;&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;\[key:&nbsp;string]:&nbsp;string;</span><br />
        <span className="code__with-order">&#125;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">const&nbsp;Component:&nbsp;React.RC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;const&nbsp;config:&nbsp;Props&nbsp;=&nbsp;json</span><br />
        <span className="code__with-order">&nbsp;&nbsp;return&nbsp;&lt;p&gt;&#123;config.key&#125;&lt;/p&gt;&nbsp;//&nbsp;=&gt;&nbsp;&quot;&lt;p&gt;value&lt;/p&gt;&quot;</span><br />
        <span className="code__with-order">&#125;</span><br />
        </code></p>
        
        <h2>おまけ</h2>
        
        今回&nbsp;ruby&nbsp;スクリプトで&nbsp;json&nbsp;ファイルに書き出したときの方法は以下の通り
        <br />
        成果だけだと見辛そうだったので完結に書いてみた
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">hash&nbsp;=&nbsp;&#123;&#125;</span><br />
        <span className="code__with-order">files.each&nbsp;do&nbsp;|file|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;date&nbsp;=&nbsp;extract_date(file.path)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;File.open(input_file&nbsp;&#39;r&#39;)&nbsp;do&nbsp;|f|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;f.each_line.with_inedx&nbsp;do&nbsp;|line&nbsp;index|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hash[date]&nbsp;=&nbsp;line[index]&nbsp;if&nbsp;index.zero?</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order">File.open(output_file&nbsp;hash.to_json)</span><br />
        </code></p>
        
        いい加減リファクタしたい欲がすごいけど、多分明日はタグをリンクにする作業をやる
        <br />
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190707
