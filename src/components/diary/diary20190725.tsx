//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

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
        <span className="code__with-order">def&nbsp;parse_along_flow</span><br />
        <span className="code__with-order">&nbsp;&nbsp;escape_about_html&nbsp;#&nbsp;HTML&nbsp;特殊文字のエスケープ</span><br />
        <span className="code__with-order">&nbsp;&nbsp;br_tag_if_blank&nbsp;#&nbsp;空行の場合は&nbsp;&lt;br&nbsp;/&gt;&nbsp;タグ挿入</span><br />
        <span className="code__with-order">&nbsp;&nbsp;return&nbsp;if&nbsp;option[:code_block]&nbsp;#&nbsp;コードブロック中はここで&nbsp;return</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;escape_about_emoji&nbsp;#&nbsp;絵文字を置換</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_beginning_tag&nbsp;#&nbsp;h&nbsp;や&nbsp;q&nbsp;など一度しか置換されない文頭処理</span><br />
        <span className="code__with-order">&nbsp;&nbsp;mask_ignore_inner_tag&nbsp;#&nbsp;内部を書き換えられたくない&nbsp;a&nbsp;タグなどをマスキング</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_simple_tag&nbsp;#&nbsp;i&nbsp;タグなどは全体的に雑に置換</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_mask_tag&nbsp;#&nbsp;最後にマスキングしたものをあるべきタグに置換し直す</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">def&nbsp;mask_ignore_inner_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...(略)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;mask_a_tag</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">def&nbsp;mask_a_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;return&nbsp;if&nbsp;@a_tag.size&nbsp;&gt;&nbsp;AVOID_STACK_LEVEL_TOO_DEEP&nbsp;#&nbsp;stack&nbsp;level&nbsp;too&nbsp;depp&nbsp;で怒られるので。</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;matcher&nbsp;=&nbsp;/\[([^\]][^\(]*)\]\(([^\)]*)\)/.match(value)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;return&nbsp;unless&nbsp;matcher&nbsp;#&nbsp;一致するものがなければ&nbsp;return</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;@a_tag.push(href:&nbsp;matcher[2]&nbsp;text:&nbsp;matcher[1])</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@value.gsub!(matcher[0]&nbsp;&quot;&#123;A#&#123;@a_tag.size&nbsp;-&nbsp;1&#125;&#125;&quot;)&nbsp;#&nbsp;&#123;A0&#125;&nbsp;のようにマスキング</span><br />
        <span className="code__with-order">&nbsp;&nbsp;mask_include_text_a_tag&nbsp;#&nbsp;match&nbsp;メソッドでは前方一致しかできないため再帰的に処理</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">def&nbsp;replace_simple_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...(略)...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_i_tag&nbsp;#&nbsp;マスキング後の処理のため&nbsp;a&nbsp;タグの内部は影響を受けない</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">def&nbsp;replace_i_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@value.gsub!(/__([^_][^_]+)__/&nbsp;&#39;&lt;i&gt;\1&lt;/i&gt;&#39;)</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@value.gsub!(/_([^_]+)_/&nbsp;&#39;&lt;i&gt;\1&lt;/i&gt;&#39;)</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">def&nbsp;replace_mask_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...(略)...</span><br />
        <span className="code__with-order">end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">def&nbsp;replace_a_tag</span><br />
        <span className="code__with-order">&nbsp;&nbsp;@a_tag.each_with_index&nbsp;do&nbsp;|a&nbsp;index|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;@value.gsub!(/&#123;A#&#123;index&#125;&#125;/&nbsp;&quot;&lt;a&nbsp;href=\&quot;#&#123;a[:href]&#125;\&quot;&gt;#&#123;a[:text]&#125;&lt;/a&gt;&quot;)&nbsp;#&nbsp;置換して戻してあげる</span><br />
        <span className="code__with-order">&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">end</span><br />
        </code></p>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190725
