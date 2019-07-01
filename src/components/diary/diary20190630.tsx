//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190630: React.FC = () => {
  return (
    <div className='diary'>
<h1>コードブロックを&nbsp;counter&nbsp;プロパティを使ってオシャレにしてみた</h1>

タグ&nbsp;<span className="inline-code">CSS</span>&nbsp;<span className="inline-code">Scss</span>&nbsp;<span className="inline-code">UI/UX</span>&nbsp;<span className="inline-code">デザイン</span><br />

<h2>対象者</h2>

CSS&nbsp;を扱っていてそれなりに知見がある<br />

<h2>背景</h2>

コードブロックの工夫が&nbsp;backround-color&nbsp;と&nbsp;border-color&nbsp;だけなのは技術ブログ的な位置付けなのにどうなのよと思ったので変えてみた<br />

<h2>結論</h2>

このサイトをみてもらったらわかる通り。<br />

工夫どころは3つ<br />

<ul><li>行数が表示されて目が迷わない</li>
<li>コピペしたい人が範囲選択したときに行数は選択されない</li>
<li>レスポンシブに対応していて横幅の短いスマホなどの端末でみたり、内容が折り返しても適切に行数が表示される</li>
</ul>
試しにブラウザの幅を変更してもらえるとわかるはずだ<br />

<a href={"https://github.com/shimomuh/shimomuh.github.io/pull/6/commits/97b9cb15da919f4ee9cff2dcc49cc4c1a6f4dac1"}>→成果</a><br />

<h2>過程</h2>

<h3>いろんなサイトをみてデザインを検討</h3>

結果として、行数が表示されている方が、同じような単語が並んでいて行数が多い時に目が迷わないことが体感としてわかったので行数の表示を採用に至った<br />

<h3>実装パターンの検討</h3>

僕がはじめに思いついたのは現在の実装に至っている&nbsp;counter&nbsp;プロパティの利用だが、他のサイトをのぞいてみると&nbsp;table&nbsp;レイアウトを使っているケースもあった<br />

table&nbsp;レイアウトを採用しなかったのは以下の2つが理由<br />

<ul><li>選択時に行数を選択しうるため、コピペしたい人（おそらく初心者さん）に優しくない</li>
<li>選択時複数セル&nbsp;(tr)&nbsp;にまたがった時に選択が美しくない（些細な問題）</li>
</ul>
そもそも&nbsp;counter&nbsp;使うつもりだったので、そのまま&nbsp;counter&nbsp;を使った<br />

table&nbsp;レイアウトの参考は&nbsp;<a href={"http://carrinova.com/markdown<i>code</i>blocks/"}>コードブロックを表すMarkdownをコードブロックの中に表示する方法</a><br />

<h3>counter&nbsp;を使った実装</h3>

懐かしくて忘れてたので&nbsp;<a href={"https://www.granfairs.com/blog/staff/css-ol-styling-with-counter"}>&lt;ol&gt;の番号だけ装飾するには？CSSカウンタを使ってみた</a>&nbsp;にお世話になりつつ記憶を掘り起こした<br />

今回は&nbsp;relative&nbsp;や&nbsp;counter&nbsp;margin&nbsp;をうまく採用した方法で以下の通り<br />

<b>HTML</b><br />

セマンティックとcss都合から以下の3つの要素で構成されている<br />

<ul><li>コードの段落であることを意味する&nbsp;<span className="inline-code">display:&nbsp;block;</span>&nbsp;である要素&nbsp;<span className="inline-code">&lt;p&gt;</span>&nbsp;タグ</li>
<li>コードであることを意味する&nbsp;<span className="inline-code">&lt;code&gt;</span>&nbsp;タグ</li>
<li>css&nbsp;都合で各行に対してナンバリングするための&nbsp;<span className="inline-code">&lt;span&gt;</span>&nbsp;タグ</li>
</ul>
<p className="code"><code>
<span className='code__with-order'>&lt;p&nbsp;class=&quot;code&quot;&gt;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&lt;code&nbsp;class=&quot;code__block&quot;&gt;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&nbsp;class=&quot;code__block--element&quot;&gt;function&nbsp;plus&nbsp;(a,&nbsp;b)&nbsp;&#123;&lt;/span&gt;&lt;br&gt;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&nbsp;class=&quot;code__block--element&quot;&gt;&amp;nbsp;&amp;nbsp;return&nbsp;a&nbsp;+&nbsp;b;&lt;/span&gt;&lt;br&gt;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&nbsp;class=&quot;code__block--element&quot;&gt;&#125;&lt;/span&gt;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&lt;/code&nbsp;class=&quot;code_block&quot;&gt;</span><br />
<span className='code__with-order'>&lt;/p&gt;</span><br />
</code></p>

<b>SCSS</b><br />

以下のように分けて考えてもらうとよい<br />

<img src="/diary/2019-06-30/description.png" alt="" /><br />

<p className="code"><code>
<span className='code__with-order'>/*&nbsp;ナンバリングの部分は含まない右側&nbsp;*/</span><br />
<span className='code__with-order'>.code&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;color:&nbsp;white;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;background-color:&nbsp;black;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;border-radius:&nbsp;0&nbsp;4px&nbsp;4px&nbsp;0;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;margin-left:&nbsp;30px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;counter-reset:&nbsp;num;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&amp;__block&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&amp;:before&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;30px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius:&nbsp;4px&nbsp;0&nbsp;0&nbsp;4px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;black;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:&nbsp;&#39;&#39;;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;absolute;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;100%;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin-left:&nbsp;-30px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding-top:&nbsp;2px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&amp;--element&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;:befor&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter-increment:&nbsp;num;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:&nbsp;counter(num);</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;absolute;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align:&nbsp;right;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;inline-block;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;20px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin-left:&nbsp;-30px;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>
      <br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190630
