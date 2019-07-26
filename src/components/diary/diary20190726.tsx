//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190726: React.FC = () => {
  return (
    <div className='diary'>
        <h1>エスケープ文字に対応してみる</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        このサイトの生い立ちをみてきた方
        <br />
        <h2>背景</h2>
        
        前回テストを書いたが一部対応ができていなかったのでそれを補足した
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/30d432b7f06c1bd9654671130ebcf166e2bd538b">→成果</a>
        <br />
        前回のほぼ応用だが、一度文字を適当な文字に置換して、その後元に戻すという方法で対応した
        <br />
        多少の工夫点があるとすれば
        <br />
        <ul><li>エスケープは&nbsp;HTML&nbsp;特殊文字のエスケープ処理の前後でも動作するために、HTML&nbsp;特殊文字のエスケープ対象外の文字を選択した</li>
        <li>エスケープは&nbsp;<span className="inline-code">%MASK&#123;NUMBER&#125;%</span>&nbsp;のような文字列に置き換えをするので、置き換え前の値を格納しておくためにクラスメソッドで単発で使うのではなくインスタンスメソッドとしてインスタンスが置き換え前の値を保持するようにした</li>
        </ul>
        このやり方は完全ではない
        <br />
        なぜなら&nbsp;<span className="inline-code">%MASK&#123;NUMBER&#125;%</span>&nbsp;に該当する文字列が含まれると誤検知してしまうからだ
        <br />
        一応後者について簡易的なコードも添付しておく
        <br />
        &nbsp;
        <br />
        <b>before</b>
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order"><span className="syntax--class">class&nbsp;</span>Parser</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>initialize(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@value&nbsp;=&nbsp;value</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@masks&nbsp;=&nbsp;<span className="syntax--brackets">[</span><span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span><span className="syntax--self">self</span>.parse(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;instance&nbsp;=&nbsp;new(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;instance.escape</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;instance.parse_something</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;instance.unescape</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;private</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>escape</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;matcher&nbsp;=&nbsp;/PATTERN/.match(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;unless&nbsp;matcher</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@masks.push&nbsp;matcher<span className="syntax--brackets">[</span>0<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@value.gsub!(matcher<span className="syntax--brackets">[</span>0<span className="syntax--brackets">]</span>&nbsp;&quot;%MASK#<span className="syntax--braces">&#123;</span>@masks.size&nbsp;-&nbsp;1<span className="syntax--braces">&#125;</span>%&quot;)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>unescape</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@masks.each_with_index<span className="syntax--do">&nbsp;do</span>&nbsp;|esc&nbsp;index|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@value.gsub!(&quot;%MASK#<span className="syntax--braces">&#123;</span>index<span className="syntax--braces">&#125;</span>%&quot;&nbsp;esc)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">Parser.parse(value)</span><br />
        </code></p>
        
        <b>after</b>
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order"><span className="syntax--class">class&nbsp;</span>Parser</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>initialize(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;...(上記と一緒)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span><span className="syntax--self">self</span>.parse(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;instance&nbsp;=&nbsp;new(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;instance.parse_something&nbsp;#&nbsp;従来のやり方は残す</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;value&nbsp;#&nbsp;クラスメソッドとして単発利用するときはインスタンスは返さず値だけ返す</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>parse&nbsp;#&nbsp;インスタンスメソッドとしてもパースを利用できるようにする</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;parse_something</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>escape</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;...(上記と一緒)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def&nbsp;</span>unescape</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;...(上記と一緒)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">instance&nbsp;=&nbsp;Parser.new</span><br />
        <span className="code__with-order">instance.escape</span><br />
        <span className="code__with-order">instance.parse</span><br />
        <span className="code__with-order">instance.unescape</span><br />
        </code></p>
        
        メリット
        <br />
        <ul><li>escape&nbsp;と&nbsp;parse&nbsp;/&nbsp;parse&nbsp;と&nbsp;unescape&nbsp;の間に処理を噛ませることができる</li>
        <li>メソッドの粒度が高くなりテストが容易に、かつ責任範囲が明確になる</li>
        <li>従来の方法も残すことで、&nbsp;escape&nbsp;したくない場合の単発利用もできる</li>
        </ul>
        今回はこのメリットのおかげで、&nbsp;<span className="inline-code">li</span>&nbsp;やテーブルレイアウトのような複数行にまたがる処理でも各メソッドにエスケープ処理を書くことなく処理の最初と最後で&nbsp;escape&nbsp;/&nbsp;unescape&nbsp;するだけで実現できた
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190726
