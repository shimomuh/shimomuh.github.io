//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190723: React.FC = () => {
  return (
    <div className='diary'>
        <h1>tslint&nbsp;を使って&nbsp;TypeScript&nbsp;にも秩序を！</h1>
        
        タグ&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>
        <br />
        <h2>対象者</h2>
        
        運用途中から&nbsp;tslint&nbsp;を入れる人
        <br />
        <h2>背景</h2>
        
        昨日の&nbsp;rubocop&nbsp;同様&nbsp;TypeScript&nbsp;にも&nbsp;lint&nbsp;くらい入れようという話
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/4aaf58453bc79eea53ca971eb4a07b5e240fd468">→成果</a>
        <br />
        <p className="code json"><code>
        <span className="code__with-order">&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;extends&quot;:&nbsp;[&quot;tslint:latest&quot;&nbsp;&quot;tslint-react&quot;]</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;rules&quot;:&nbsp;&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;jsx-wrap-multiline&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-quotemark&quot;:&nbsp;&quot;quote&nbsp;は&nbsp;single&nbsp;だろうが&nbsp;double&nbsp;だろうが許容する&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;quotemark&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-ordered-imports&quot;:&nbsp;&quot;import&nbsp;はアルファベット順&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;ordered-imports&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-no-submodule-imports&quot;:&nbsp;&quot;import&nbsp;されるファイルは&nbsp;submodule&nbsp;(/&nbsp;を使うもの</span><br />
        <span className="code__with-order">)&nbsp;も許容する&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;no-submodule-imports&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-no-implicit-dependencies&quot;:&nbsp;&quot;tsconfig&nbsp;の&nbsp;path&nbsp;alias&nbsp;を無視したいので許容</span><br />
        <span className="code__with-order">する&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;no-implicit-dependencies&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-trailing-comma&quot;:&nbsp;&quot;文末のコンマは無視しよう&nbsp;fyi:&nbsp;https://selmertsx.hatenablog.com/entry/2018/02/06/201945&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;trailing-comma&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-max-classes-per-file&quot;:&nbsp;&quot;1つのファイルに&nbsp;private&nbsp;な小さなクラスの宣言を&gt;許容する&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;max-classes-per-file&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;_comment-jsx-no-multiline-js&quot;:&nbsp;&quot;関数埋め込みを許容する&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;jsx-no-multiline-js&quot;:&nbsp;false</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&#125;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;linterOptions&quot;:&nbsp;&#123;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;exclude&quot;:&nbsp;[</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;src/components/tag/*.ts&#123;x&#125;&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;src/components/diary/*.ts&#123;x&#125;&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;src/react-app-env.d.ts&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;src/serviceWorker.ts&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;src/components/router.tsx&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;]</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&#125;</span><br />
        <span className="code__with-order">&#125;</span><br />
        </code></p>
        
        警告されたものについてはコメント付きでどういうものかを説明しつつ、無理ゲーなら許容したり、重要ではなさそうなものについてはスルーするようにした
        <br />
        あと、テンプレートから作成されるようなものについてはあまり気にしたくはないので&nbsp;exclude&nbsp;に入れて無視するようにした
        <br />
        <i><s>lint&nbsp;時に&nbsp;Could&nbsp;not&nbsp;find&nbsp;implementations&nbsp;for&nbsp;the&nbsp;following&nbsp;rules&nbsp;specified&nbsp;in&nbsp;the&nbsp;configuration&nbsp;って怒られるけどね！</s></i>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190723
