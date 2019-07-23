//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190710: React.FC = () => {
  return (
    <div className='diary'>
        <h1>テンプレートから&nbsp;TypeScript&nbsp;ファイルを生成するクラス</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/12'><span className='inline-code'>設計</span></Link>
        <br />
        <h2>対象者</h2>
        
        <ul><li>erb&nbsp;を&nbsp;rails&nbsp;の&nbsp;view&nbsp;以外の手段として利用してみたい</li>
        <li>CMS&nbsp;っぽい感じのサイトの仕組みづくりをやりたい</li>
        </ul>
        そんな人
        <br />
        <h2>背景</h2>
        
        前日の続き
        <br />
        せっかくなので、テンプレート部分もファイルとして書き出してファイルとして読み込む部分も汎用ドメインとして定義して利用する形にしたかった
        <br />
        <h2>結果</h2>
        
        <a href={"https://github.com/shimomuh/shimomuh.github.io/commit/c143c49e64f943cd244107dbea252d05a400615d"}>→成果</a>
        <br />
        以下抜粋
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">require&nbsp;&#39;erb&#39;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">#&nbsp;サブドメイン：コアドメインをサポートするドメインのうち</span><br />
        <span className="code__with-order">#</span><br />
        <span className="code__with-order">module&nbsp;SubDomain</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;汎用ドメイン：中身が別のサービスや機能に差し変わっても問題ないドメインで</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#</span><br />
        <span className="code__with-order">&nbsp;&nbsp;module&nbsp;GeneralDomain</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;テンプレートを扱うツール</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;class&nbsp;Template</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attr_reader&nbsp;:value&nbsp;:output_path&nbsp;:input_path</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;initialize(value&nbsp;output_path&nbsp;input_path&nbsp;=&nbsp;nil)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@value&nbsp;=&nbsp;value</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@output_path&nbsp;=&nbsp;output_path</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@input_path&nbsp;=&nbsp;input_path&nbsp;?&nbsp;input_path&nbsp;:&nbsp;&quot;templates/#&#123;output_path&#125;.erb&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;render</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content&nbsp;=&nbsp;File.read(File.expand_path(input_path))</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;erb&nbsp;=&nbsp;ERB.new(content&nbsp;&nbsp;nil&nbsp;&#39;-&#39;)</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;File.open(output_path&nbsp;&#39;w&#39;)&nbsp;do&nbsp;|f|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.write&nbsp;erb.result(binding)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">::SubDomain::GeneralDomain::Template.new(value&nbsp;&#39;src/components/router.tsx&#39;).render</span><br />
        <span className="code__with-order">dates_no_hyphen.each&nbsp;do&nbsp;|date_no_hyphen|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;::SubDomain::GeneralDomain::Template.new(value&nbsp;&quot;src/components/diary/diary#&#123;date_no_hyphen&#125;.tsx&quot;&nbsp;&#39;templates/src/components/diary/template.tsx.erb&#39;).render</span><br />
        <span className="code__with-order">end</span><br />
        </code></p>
        
        基本は&nbsp;<span className="inline-code">templates/src/**/*.tsx.erb</span>&nbsp;=&gt;&nbsp;<span className="inline-code">src/**/*.tsx</span>&nbsp;のように&nbsp;1:1&nbsp;で出力する
        <br />
        1:多&nbsp;で出力したい場合は第3引数に入力となるテンプレートファイルを渡して、出力先をループすることで実現できる
        <br />
        テンプレート内で使いたい値は&nbsp;value&nbsp;として第一引数に指定することで埋め込むことができる
        <br />
        &nbsp;
        <br />
        <b>router.tsx.erb</b>
        <br />
        <p className="code erb"><code>
        <span className="code__with-order">import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;</span><br />
        <span className="code__with-order">import&nbsp;&#123;&nbsp;BrowserRouter&nbsp;Route&nbsp;Switch&nbsp;&#125;&nbsp;from&nbsp;&#39;react-router-dom&#39;;</span><br />
        <span className="code__with-order">import&nbsp;Index&nbsp;from&nbsp;&#39;components/index&#39;;</span><br />
        <span className="code__with-order">import&nbsp;NotFound&nbsp;from&nbsp;&#39;components/notFound&#39;</span><br />
        <span className="code__with-order">import&nbsp;&#39;components/root.scss&#39;;</span><br />
        <span className="code__with-order">&lt;%-&nbsp;@value[:dates_no_hyphen].each&nbsp;do&nbsp;|date|&nbsp;-%&gt;</span><br />
        <span className="code__with-order">import&nbsp;Diary&lt;%=&nbsp;date&nbsp;%&gt;&nbsp;from&nbsp;&#39;components/diary/diary&lt;%=&nbsp;date&nbsp;%&gt;&#39;</span><br />
        <span className="code__with-order">&lt;%-&nbsp;end&nbsp;-%&gt;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">const&nbsp;Router:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;return&nbsp;(</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;BrowserRouter&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;className=&#39;root&#39;&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Switch&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route&nbsp;exact&nbsp;path&nbsp;=&#39;/&#39;&nbsp;component=&#123;Index&#125;&nbsp;/&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;%-&nbsp;@value[:dates_with_hyphen].each_with_index&nbsp;do&nbsp;|date&nbsp;index|&nbsp;-%&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route&nbsp;path=&#39;/&lt;%=&nbsp;date&nbsp;%&gt;&#39;&nbsp;component=&#123;Diary&lt;%=&nbsp;@value[:dates_no_hyphen][index]&nbsp;%&gt;&#125;&nbsp;/&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;%-&nbsp;end&nbsp;-%&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route&nbsp;component=&#123;NotFound&#125;&nbsp;/&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Switch&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/BrowserRouter&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;)</span><br />
        <span className="code__with-order">&#125;</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">export&nbsp;default&nbsp;Router</span><br />
        </code></p>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190710
