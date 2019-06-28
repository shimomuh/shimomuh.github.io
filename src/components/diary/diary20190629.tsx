//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190629: React.FC = () => {
  return (
    <div className='diary'>
<h1>【暫定版】ruby&nbsp;で&nbsp;React&nbsp;に載せるための&nbsp;Markdown&nbsp;コンバーターを実装する</h1>

<h2>対象者</h2>

markdown&nbsp;(.md)&nbsp;ファイルを&nbsp;react&nbsp;で表示させたいなぁと考えていて自分で&nbsp;ruby&nbsp;かけるよ！って方<br />

結構絞ってしまったかもしれない...<br />

<h2>背景</h2>

markdown&nbsp;で日記書いてるんだから、&nbsp;xxx.github.io&nbsp;の上で自分のサイトっぽくみせたいよね！という発想から<br />

せっかく&nbsp;<span className="inline-code">Link</span>&nbsp;使っているのに&nbsp;github&nbsp;の&nbsp;markdown&nbsp;reviewer&nbsp;使うのが癪だったというのもある<br />

<h2>結果</h2>

<span className="inline-code">bin/make-tsx</span>&nbsp;という、めちゃくちゃ汚いコンバーターができた<br />

たぶんまだバグあるかもしれないけど、まだ気づいてない<br />

でも基盤を作ってしまえばあとは&nbsp;bugfix&nbsp;なりリファクタして汎用的に作ったりするだけなので後悔はしていない<br />

<h2>過程</h2>

はじめ&nbsp;shell&nbsp;で書いてたけど、&nbsp;ruby&nbsp;で&nbsp;import&nbsp;する方が圧倒的に楽そうだったので&nbsp;ruby&nbsp;に切り替えた<br />

そもそもなぜ&nbsp;shell&nbsp;をやめたのかだが、一番の原因は&nbsp;erb&nbsp;の存在である<br />

<h3>テンプレートで文字を埋め込むという発想</h3>

shell&nbsp;で頑張ろうとすると、文字を埋め込みたい場合にすごくいびつな書き方になった<br />

たとえば、出力後が以下のファイルを作りたいとする<br />

<p className="code"><code>
import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;<br />
import&nbsp;Index1&nbsp;from&nbsp;&#39;./index1&#39;;<br />
import&nbsp;Index2&nbsp;from&nbsp;&#39;./index2&#39;;<br />

const&nbsp;Root:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;<br />
&nbsp;&nbsp;return&nbsp;(<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Index1&nbsp;/&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Index2&nbsp;/&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;);<br />
&#125;<br />

export&nbsp;default&nbsp;Root;<br />
</code></p>

僕が頑張った時はこう<br />

<p className="code"><code>
cat&nbsp;-&nbsp;&lt;&lt;&nbsp;EOS&nbsp;&gt;&nbsp;src/root.tsx<br />
import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;<br />
EOS<br />

for&nbsp;i&nbsp;in&nbsp;(1&nbsp;2)<br />
do<br />
&nbsp;&nbsp;echo&nbsp;&quot;import&nbsp;Index$&#123;i&#125;&nbsp;from&nbsp;&#39;./index$&#123;i&#125;&#39;;&quot;&nbsp;&gt;&gt;&nbsp;src/root.tsx<br />
done<br />

cat&nbsp;-&nbsp;&lt;&lt;&nbsp;EOS&nbsp;&gt;&gt;&nbsp;src/root.tsx<br />
const&nbsp;Root:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;<br />
&nbsp;&nbsp;return&nbsp;(<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
EOS<br />

#&nbsp;...<br />
</code></p>

<i>これはひどい</i><br />

<a href={"https://qiita.com/take4s5i/items/e207cee4fb04385a9952"}>bashのヒアドキュメントを活用する</a>&nbsp;とかみるとまだマシにかけるかもしれない（が、諦めた）<br />

その結果&nbsp;erb&nbsp;を使うことにした<br />

今回は&nbsp;ruby&nbsp;ファイル内にヒアドキュメントで書いてるが、普通に&nbsp;<span className="inline-code">.erb</span>&nbsp;ファイルとして書くのが正常だと思う<br />

rails&nbsp;だと置換したい後のファイル拡張子をつけたりするの&nbsp;(<span className="inline-code">root.tsx.erb</span>&nbsp;etc)&nbsp;をよくみるヨネ！<br />

ファイル読み込みにしてるかどうかの差だけなので今は気にしないで（そのうち直す）<br />

<p className="code"><code>
template&nbsp;=&nbsp;&lt;&lt;EOS<br />
import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;<br />
&lt;%-&nbsp;[1,&nbsp;2].each&nbsp;do&nbsp;|i|&nbsp;-%&gt;<br />
import&nbsp;Index&lt;%=&nbsp;i&nbsp;%&gt;&nbsp;from&nbsp;&#39;./index&lt;%=&nbsp;i&nbsp;%&gt;&#39;;<br />
&lt;%-&nbsp;end&nbsp;-%&gt;<br />

const&nbsp;Root:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;<br />
&nbsp;&nbsp;return&nbsp;(<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;%-&nbsp;[1,&nbsp;2].each&nbsp;do&nbsp;|i|&nbsp;-%&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Index&lt;%=&nbsp;i&nbsp;%&gt;&nbsp;/&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;%-&nbsp;end&nbsp;-%&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;);<br />
&#125;<br />

export&nbsp;default&nbsp;Root;<br />
EOS<br />

erb&nbsp;=&nbsp;ERB.new(template,&nbsp;nil,&nbsp;&#39;-&#39;)<br />
File.open(&#39;src/root.tsx&#39;,&nbsp;&#39;w&#39;)&nbsp;do&nbsp;|f|<br />
&nbsp;&nbsp;f.write&nbsp;erb.result(binding)<br />
end<br />
</code></p>

これで元のテンプレートがどんなのだったかもわからなくなるくらい壊滅的な書き方にならなくてハッピー！<br />

<a href={"http://mukaer.com/archives/2013/06/05/rubyerb/"}>Rubyでテキストにコードを埋め込む。|ERBでテンプレート利用</a>&nbsp;を参考に。<br />

<h3>ファイルの読み込み/書き込み、ファイル取得</h3>

<h4>bash&nbsp;でやってた&nbsp;ls&nbsp;の代用</h4>
<a href={"https://docs.ruby-lang.org/ja/latest/method/Dir/s/=5b=5d.html"}>Dir.glob&nbsp;-&nbsp;doc.ruby-lang.org</a><br />

<h4>bash&nbsp;でやってた&nbsp;cat&nbsp;や&nbsp;&gt;&gt;&nbsp;の代用</h4>

<ul><li><a href={"https://uxmilk.jp/22615"}>Rubyでファイルの書き込み・読み込みを行う方法</a></li>
<li><a href={"https://www.buildinsider.net/language/rubytips/0021"}>ファイルから1行／段落ごと読み込む（入力する）には？</a></li>
</ul>
<h3>文字エスケープ</h3>

実装したらエスケープ忘れによく気づくよね！<br />

というわけで、文字のエスケープについてだが、&nbsp;<span className="inline-code">cgi/escape</span>&nbsp;なんてものもあるけど、後述の絵文字対応のときに備えて自前で実装した<br />

ほぼ&nbsp;<a href={"https://qiita.com/scivola/items/b2d749a5a720f9eb02b1"}>素の&nbsp;Ruby&nbsp;で&nbsp;HTML&nbsp;エスケープするなら&nbsp;cgi/escapeが最強</a>&nbsp;を丸パクリ<br />

<s>最強と言う人を裏切る勇気</s><br />

文字コード忘れた人は&nbsp;「HTML&nbsp;特殊文字コード表」とかで検索すると色々あるよ<br />

<h3>マークダウン特有の文字を置換する</h3>

<span className="inline-code">*</span>&nbsp;がリストだったり&nbsp;<span className="inline-code">#</span>&nbsp;がヘッダーだったりそういうやつを&nbsp;html&nbsp;文字に変更しなきゃならんのだが、&nbsp;shell&nbsp;だと&nbsp;sed&nbsp;でできたのをどうするかという話<br />

sub/sub!&nbsp;や&nbsp;gsub/gsub!&nbsp;を使えば&nbsp;OK!&nbsp;(gsub!&nbsp;は破壊的なので注意)<br />

<p className="code"><code>
-&nbsp;echo&nbsp;&quot;*&nbsp;hoge&quot;&nbsp;|&nbsp;sed&nbsp;s/^\*\&nbsp;/\&lt;li\&gt;/g<br />
+&nbsp;&quot;*&nbsp;hoge&quot;.gsub(/^\*\&nbsp;/,&nbsp;&#39;&lt;li&gt;&#39;)<br />
</code></p>

<i>まぁこの書き方だと他にも競合するのだがそれはご自身で考察ください</i><br />

ちなみに一番時間を食ったのがこの正規表現かもしれない<br />

[[正規表現]&nbsp;.*?は最短マッチではない](https://qiita.com/anqooqie/items/191ad215e93237c77811)<br />

こういうのまじ助かりました&nbsp;&#x1f647;<br />

ちなみに一番書き方で悩んだのは<br />

<p className="code"><code>
&quot;**強調！**&quot;.gsub!(/\*\*([^\*]+)\*\*/,&nbsp;&#39;&lt;b&gt;\1&lt;/b&gt;&#39;)<br />
</code></p>

こういうやつ<br />

<h3>絵文字</h3>

&#x1f389;&nbsp;とか&nbsp;github&nbsp;だと認識してくれるけど、コンバーターだと自分でかかなきゃいけない<br />

そこで先程自前で書いたのが活きてくる<br />

<p className="code"><code>
EMOJI_TABLE&nbsp;=&nbsp;&#123;<br />
&nbsp;&nbsp;&#39;:tada:&#39;&nbsp;=&gt;&nbsp;&#39;&amp;#x1f389;&#39;<br />
&#125;<br />

&quot;おめでとう&nbsp;:tada:&quot;.gsub(/:tada:/,&nbsp;EMOJI_TABLE)<br />
</code></p>

絵文字のコードは&nbsp;<a href={"http://guppy.eng.kagawa-u.ac.jp/~kagawa/OpenCampus/unicode.html"}>主な特殊文字の文字コード&nbsp;-&nbsp;Guppy</a>&nbsp;を参考に。<br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190629