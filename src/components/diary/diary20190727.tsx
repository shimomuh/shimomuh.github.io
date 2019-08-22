//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190727: React.FC = () => {
  return (
    <div className='diary'>
        <h1>雑なシンタックスハイライトをつける</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        このサイトの生い立ちをみてきた人
        <br />
        <h2>結論</h2>
        
        コードがなんとなく他の優秀なサイトと比べてみづらくてよくよく考えるとシンタックスハイライトがなかったので追加してみた
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/71e67bd1bee954511437a43256a7f1b394675192">→成果</a>
        <br />
        <b>ruby</b>
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order"><span className="syntax--class">class</span>&nbsp;A</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def</span>&nbsp;initialize(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@value&nbsp;=&nbsp;value</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--def">def</span>&nbsp;call</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@value</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        </code></p>
        
        <b>js</b>
        <br />
        <p className="code js"><code>
        <span className="code__with-order"><span className="syntax--function">function</span>&nbsp;plus(a&nbsp;b)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;a&nbsp;+&nbsp;b;</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        ただし、この正規表現には穴も多い現状だと&nbsp;ruby&nbsp;コードで&nbsp;pending&nbsp;の&nbsp;end&nbsp;にハイライトが入ってしまうので&nbsp;<span className="inline-code">/[^a-z]+end/</span>&nbsp;みたいな感じにした方がいいかもしれないし、もっといい方法もあるかもしれない
        <br />
        言い出すとキリがないのと、どのエディタに色を寄せるかは好みのレベルなので、一旦色々と諦めて現状に
        <br />
        <h2>課題</h2>
        
        <span className="inline-code">&quot;</span>&nbsp;や&nbsp;<span className="inline-code">&#39;</span>&nbsp;を置換しようとするとコンパイルが重すぎて&nbsp;node&nbsp;サーバが立ち上がらなくなったので考えないといけない
        <br />
        これは追々...
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190727
