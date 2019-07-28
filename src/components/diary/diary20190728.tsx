//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190728: React.FC = () => {
  return (
    <div className='diary'>
        <h1>正規のシンタックスハイライトを実現する</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        このサイトの生い立ちを追ってきた方々
        <br />
        <h2>背景</h2>
        
        昨日雑多なシンタックスハイライトを作ったが、やっぱよりよい方法に直したかった
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/75a350a72ee0f28cfa47fa8c643245e648684241">→成果</a>
        <br />
        &nbsp;
        <br />
        json&nbsp;から受け取った&nbsp;string&nbsp;文字列を使って&nbsp;regexp&nbsp;にうまく変換できなかったのでやむなく&nbsp;json&nbsp;はやめて&nbsp;Config&nbsp;ファイルを定義することにした
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order"><span className="syntax--class">class</span>&nbsp;SyntaxHighlight</span><br />
        <span className="code__with-order">&nbsp;&nbsp;CONFIG&nbsp;=&nbsp;<span className="syntax--brackets">[</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in:&nbsp;/(\b)(<span className="syntax--return">return</span>)(\b)/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out:&nbsp;&#39;\1&lt;span&nbsp;className=&quot;syntax--\2&quot;&gt;\2&lt;/span&gt;\3&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--brackets">]</span>.freeze</span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def</span>&nbsp;<span className="syntax--self">self</span>.insert_tag(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;syntaxs.each&nbsp;<span className="syntax--do">do</span>&nbsp;|syntax|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value.gsub!(syntax<span className="syntax--brackets">[</span>:in<span className="syntax--brackets">]</span>&nbsp;syntax<span className="syntax--brackets">[</span>:out<span className="syntax--brackets">]</span>)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--private">private</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def</span>&nbsp;<span className="syntax--self">self</span>.syntaxs</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;Config</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">SyntaxHighlight.insert_tag(&#39;<span className="syntax--return">return</span>&nbsp;returnValue;&#39;)</span><br />
        </code></p>
        
        <s><span className="inline-code">\b</span>&nbsp;を知らなかった情弱</s>
        <br />
        でもこのおかげで、&nbsp;<span className="inline-code">return</span>&nbsp;のような文字と&nbsp;<span className="inline-code">returnValue</span>&nbsp;のような文字列に対応できた
        <br />
        &nbsp;
        <br />
        あと、テストを書くときにあまりに同じのを書くのが面倒だったので今回のようにパターン化できるものは&nbsp;shared_examples&nbsp;で簡潔に書くとよい
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">#&nbsp;trigger&nbsp;と&nbsp;klass&nbsp;は内部で使う</span><br />
        <span className="code__with-order">shared_examples&nbsp;&#39;(\b)(trigger)(\b)&#39;&nbsp;<span className="syntax--do">do</span>&nbsp;|trigger&nbsp;klass|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;context&nbsp;&#39;ぴったり一致する場合&#39;&nbsp;<span className="syntax--do">do</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;意図した通りに&nbsp;span&nbsp;タグが挿入される&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;context&nbsp;&#39;2回出てくる場合&#39;&nbsp;<span className="syntax--do">do</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;意図した通りに&nbsp;span&nbsp;タグが挿入される&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;context&nbsp;&#39;後ろに許容できる文字がきた場合&#39;&nbsp;<span className="syntax--do">do</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;意図した通りに&nbsp;span&nbsp;タグが挿入される&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;context&nbsp;&#39;前に許容できない文字がきた場合&#39;&nbsp;<span className="syntax--do">do</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;変換されない&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;context&nbsp;&#39;後ろに許容できない文字がきた場合&#39;&nbsp;<span className="syntax--do">do</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;変換されない&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">describe&nbsp;&#39;<span className="syntax--return">return</span>&#39;&nbsp;<span className="syntax--do">do</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;it_behaves_like&nbsp;&#39;(\b)(trigger)(\b)&#39;&nbsp;&#39;<span className="syntax--return">return</span>&#39;&nbsp;&#39;<span className="syntax--return">return</span>&#39;</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        </code></p>
        
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190728
