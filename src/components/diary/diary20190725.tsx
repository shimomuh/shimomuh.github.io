//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190725: React.FC = () => {
  return (
    <div className='diary'>
        <h1>マークダウンコンバーターロジックを見直す</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        このサイトの生い立ちを追っている方々
        <br />
        マークダウンコンバーターを作ろうとしている方
        <br />
        <h2>背景</h2>
        
        過去のロジックの場合
        <br />
        <span className="inline-code">&lt;a&nbsp;href=&quot;link&quot;&gt;text&lt;/a&gt;</span>&nbsp;のうち&nbsp;<span className="inline-code">link</span>&nbsp;にタグに置換されうる文字が含まれていた場合置換されてしまい問題だった
        <br />
        もともとかなり密結合な作りになっていたのが実装に不安をもたらしていたので見直すことにした
        <br />
        <h2>結果</h2>
        
        タグの中に変換しうる文字が含まれていた場合でも置換されなくなり、&nbsp;URL&nbsp;がセーフティな作りになった
        <br />
        加えて、メソッドをやや疎にできた
        <br />
        &nbsp;
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/cbebd19ab72b469a7c0ce5ec8ff7c727bcfd6397">→成果</a>
        <br />
        &nbsp;
        <br />
        <h2>過程</h2>
        
        <h3>課題</h3>
        
        <span className="inline-code">gsub!</span>&nbsp;による一括置換の場合、&nbsp;<span className="inline-code">&lt;a&gt;</span>&nbsp;タグ処理のあと&nbsp;<span className="inline-code">&lt;i&gt;</span>&nbsp;タグ処理によって&nbsp;URL&nbsp;に&nbsp;<span className="inline-code">_</span>&nbsp;が2個以上含まれる場合に置換されてしまう
        <br />
        <h3>検討</h3>
        
        <span className="inline-code">&lt;a&gt;</span>&nbsp;タグや&nbsp;<span className="inline-code">&lt;img&gt;</span>&nbsp;タグのように他のマークダウン記法による影響を受けない実装が必要
        <br />
        そもそも&nbsp;<span className="inline-code">&lt;a&gt;</span>&nbsp;タグの&nbsp;<span className="inline-code">href</span>&nbsp;内の&nbsp;URL&nbsp;が他のマークダウンの記法の影響を受けるのがよろしくない
        <br />
        <h3>解決策</h3>
        
        タグを分類し、それらに対してそれぞれ置換する
        <br />
        さらに、他置換の影響を受けたくない部分に関しては置き換えをすることでそれに対処する
        <br />
        &nbsp;
        <br />
        <b>今回の成果の抜粋と解説のため一部改変</b>
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>parse_along_flow</span><br />
        <span className="code__with-order">&nbsp;&nbsp;escape_about_html&nbsp;#&nbsp;HTML&nbsp;特殊文字のエスケープ</span><br />
        <span className="code__with-order">&nbsp;&nbsp;br_tag_if_blank&nbsp;#&nbsp;空行の場合は&nbsp;&lt;br&nbsp;/&gt;&nbsp;タグ挿入</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;<span className="syntax--if">if&nbsp;</span>option<span className="syntax--brackets">[</span>:code_block<span className="syntax--brackets">]</span>&nbsp;#&nbsp;コードブロック中はここで&nbsp;<span className="syntax--return">return</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;escape_about_emoji&nbsp;#&nbsp;絵文字を置換</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_beginning_tag&nbsp;#&nbsp;h&nbsp;や&nbsp;q&nbsp;など一度しか置換されない文頭処理</span><br />
        <span className="code__with-order">&nbsp;&nbsp;mask_ignore_inner_tag&nbsp;#&nbsp;内部を書き換えられたくない&nbsp;a&nbsp;タグなどをマスキング</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_simple_tag&nbsp;#&nbsp;i&nbsp;タグなどは全体的に雑に置換</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_mask_tag&nbsp;#&nbsp;最後にマスキングしたものをあるべきタグに置換し直す</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>mask_ignore_inner_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...(略)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;mask_a_tag</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>mask_a_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;<span className="syntax--if">if&nbsp;</span>@a_tag.size&nbsp;&gt;&nbsp;AVOID_STACK_LEVEL_TOO_DEEP&nbsp;#&nbsp;stack&nbsp;level&nbsp;too&nbsp;depp&nbsp;で怒られるので。</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;matcher&nbsp;=&nbsp;/\<span className="syntax--brackets">[</span>(<span className="syntax--brackets">[</span>^\<span className="syntax--brackets">]</span><span className="syntax--brackets">]</span><span className="syntax--brackets">[</span>^\(<span className="syntax--brackets">]</span>*)\<span className="syntax--brackets">]</span>\((<span className="syntax--brackets">[</span>^\)<span className="syntax--brackets">]</span>*)\)/.match(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;unless&nbsp;matcher&nbsp;#&nbsp;一致するものがなければ&nbsp;<span className="syntax--return">return</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;@a_tag.push(href:&nbsp;matcher<span className="syntax--brackets">[</span>2<span className="syntax--brackets">]</span>&nbsp;text:&nbsp;matcher<span className="syntax--brackets">[</span>1<span className="syntax--brackets">]</span>)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@value.gsub!(matcher<span className="syntax--brackets">[</span>0<span className="syntax--brackets">]</span>&nbsp;&quot;<span className="syntax--braces">&#123;</span>A#<span className="syntax--braces">&#123;</span>@a_tag.size&nbsp;-&nbsp;1<span className="syntax--braces">&#125;</span><span className="syntax--braces">&#125;</span>&quot;)&nbsp;#&nbsp;<span className="syntax--braces">&#123;</span>A0<span className="syntax--braces">&#125;</span>&nbsp;のようにマスキング</span><br />
        <span className="code__with-order">&nbsp;&nbsp;mask_include_text_a_tag&nbsp;#&nbsp;match&nbsp;メソッドでは前方一致しかできないため再帰的に処理</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>replace_simple_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...(略)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_i_tag&nbsp;#&nbsp;マスキング後の処理のため&nbsp;a&nbsp;タグの内部は影響を受けない</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>replace_i_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@value.gsub!(/__(<span className="syntax--brackets">[</span>^_<span className="syntax--brackets">]</span><span className="syntax--brackets">[</span>^_<span className="syntax--brackets">]</span>+)__/&nbsp;&#39;&lt;i&gt;\1&lt;/i&gt;&#39;)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@value.gsub!(/_(<span className="syntax--brackets">[</span>^_<span className="syntax--brackets">]</span>+)_/&nbsp;&#39;&lt;i&gt;\1&lt;/i&gt;&#39;)</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>replace_mask_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...(略)...</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--def">def&nbsp;</span>replace_a_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@a_tag.each_with_index<span className="syntax--do">&nbsp;do</span>&nbsp;|a&nbsp;index|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@value.gsub!(/<span className="syntax--braces">&#123;</span>A#<span className="syntax--braces">&#123;</span>index<span className="syntax--braces">&#125;</span><span className="syntax--braces">&#125;</span>/&nbsp;&quot;&lt;a&nbsp;href=\&quot;#<span className="syntax--braces">&#123;</span>a<span className="syntax--brackets">[</span>:href<span className="syntax--brackets">]</span><span className="syntax--braces">&#125;</span>\&quot;&gt;#<span className="syntax--braces">&#123;</span>a<span className="syntax--brackets">[</span>:text<span className="syntax--brackets">]</span><span className="syntax--braces">&#125;</span>&lt;/a&gt;&quot;)&nbsp;#&nbsp;置換して戻してあげる</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--end">end</span></span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        </code></p>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190725
