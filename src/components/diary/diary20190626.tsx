//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190626: React.FC = () => {
  return (
    <div className='diary'>
<h1>Javascript&nbsp;でカレンダーを作ろう</h1>

<h2>対象者</h2>

<ul><li>車輪の再発明大好き！</li>
<li>Typescript&nbsp;で何か作りたい！</li>
</ul>
人向け。<br />

プログラミング言語触りたて、Javascript&nbsp;はじめたての人向けではない。<br />

<h2>背景</h2>

アドベントカレンダー作るからにはカレンダー作らないとね<br />

せっかくなら汎用的に作りたいよね<br />

<h2>結果</h2>

<a href={"https://qiita.com/kan_dai/items/b1850750b883f83b9bee"}>JavaScriptでカレンダーを自作したら勉強になった</a><br />

以上<br />

だとあまりにもそっけないので過程を説明する<br />

成果物以上の効果として、勘を取り戻しつつ課題がみつかるので進捗感が得られた<br />

<h2>過程</h2>

&quot;どんなコードを書いたか&quot;&nbsp;は&nbsp;commit&nbsp;をみてもらえばわかるのでここでは考え方を共有する<br />

<h3>責務の所在をはっきりする</h3>

僕はスーパーマンじゃないのでなんでもは知らない、知ってることだけ<br />

今ある&nbsp;<span className="inline-code">src/components/</span>&nbsp;配下に新しく&nbsp;calendar&nbsp;的なコンポーネントを作りたかったけど、これから作ろうとしているカレンダーのロジックはロジックなので&nbsp;view&nbsp;を表現するコンポーネントとは別の場所に配置したかった<br />

そこで、&nbsp;<span className="inline-code">models/calendar.tsx</span>&nbsp;が爆誕した<br />

<h3>パスを絶対参照で書く</h3>

配置したはいいが、ロジックを読み込むのに相対パスだと場所が変わったら崩壊してしまう<br />

密なコンポーネントなら相対参照でよいがロジックはさすがに&nbsp;<span className="inline-code">src</span>&nbsp;を起点に絶対パスで描きたかった<br />

そこで&nbsp;<span className="inline-code">tsconfig.json</span>&nbsp;をいじって、絶対パスっぽく参照できるように以下のようにした<br />

もしかしたらこれが一番時間かかったかもしれない<br />

<p className="code"><code>
<span className='code__with-order'>&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&quot;compilerOptions&quot;:&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&quot;baseUrl&quot;:&nbsp;&quot;src&quot;,</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&quot;paths&quot;:&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;components/*&quot;:&nbsp;[&quot;components/*&quot;],</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;models/*&quot;:&nbsp;[&quot;models/*&quot;]</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

はじめ&nbsp;<span className="inline-code">&quot;~*&quot;:&nbsp;[&quot;*&quot;]</span>&nbsp;みたいな形で&nbsp;<span className="inline-code">src</span>&nbsp;を&nbsp;root&nbsp;に参照しようと思ったがうまくいかなかった<br />

もしかしたら&nbsp;hot&nbsp;loader&nbsp;との相性が悪いのかもしれないがそれはまた別の機会に。<br />

参考にしたのはこのあたり<br />

<a href={"https://qiita.com/nju33/items/cf924f7b6bb513bef8a2"}>TypeScriptでaliasなパスでmoduleをimportできるように</a><br />

<h3>ロジックを書く</h3>

まずは&nbsp;function&nbsp;でカレンダーロジックを作った<br />

イメージ的には以下を返すような関数<br />

<p className="code"><code>
<span className='code__with-order'>const&nbsp;getCalendar&nbsp;=&nbsp;(year:&nbsp;number,&nbsp;month:&nbsp;number):&nbsp;any&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;return&nbsp;[</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;1],</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;2,&nbsp;&nbsp;3,&nbsp;&nbsp;4,&nbsp;&nbsp;5,&nbsp;&nbsp;6,&nbsp;&nbsp;7,&nbsp;&nbsp;8],</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;9,&nbsp;10,&nbsp;11,&nbsp;12,&nbsp;13,&nbsp;14,&nbsp;15],</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;16,&nbsp;17,&nbsp;18,&nbsp;19,&nbsp;20,&nbsp;21,&nbsp;22],</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;23,&nbsp;24,&nbsp;25,&nbsp;26,&nbsp;27,&nbsp;28,&nbsp;29],</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;30,&nbsp;31,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;]</span><br />
<span className='code__with-order'>&nbsp;&nbsp;]</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

あとはロジックを考えて中身を埋めるだけ<br />

これができると&nbsp;view&nbsp;はなんでもよくなるので、他のサイト作りたい時にも流用できて責務わけ様様！<br />

しかし、空の部分に先月とか来月の日数が入っているのはよくみるし、日付は連続的なものであって断続的なものではない（見方にもよるけど）<br />

そこで空を埋めようとした時、o&nbsp;o&nbsp;O（今月とそれ以外は色分けとかしたいよな）と思った。<br />

しかし、単なる二次元配列だと状態が管理できない！<br />

そこでクラス構造にすることにした<br />

<h3>function&nbsp;を&nbsp;class&nbsp;に置き換える</h3>

一番意識したのは命名とコンテキストマッピング<br />

普通に&nbsp;class&nbsp;にするとすれば大枠が&nbsp;Calendar&nbsp;で日付が&nbsp;Date&nbsp;にしたかった<br />

でもさすがに&nbsp;Date&nbsp;は標準クラスだし、&nbsp;Calendar&nbsp;はコンポーネントの&nbsp;Calendar&nbsp;とも被ってしまう問題に直面した<br />

そこで、前者はどうしようもないので&nbsp;DateCell&nbsp;という名前にして&nbsp;Calendar&nbsp;はコンテキストマッピングとして処理することでクラス実装時は&nbsp;Calendar&nbsp;として実装すればよいので助かった<br />

<p className="code"><code>
<span className='code__with-order'>class&nbsp;Calendar&nbsp;&#123;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>export&nbsp;&#123;&nbsp;Calendar&nbsp;as&nbsp;CalendarModel&nbsp;&#125;;</span><br />
</code></p>

これで衝突を避けられる。本音を言うと<br />

<p className="code"><code>
<span className='code__with-order'>//&nbsp;src/models/calendar.tsx</span><br />
<span className='code__with-order'>export&nbsp;class&nbsp;Calendar&nbsp;&#123;&#125;</span><br />

<span className='code__with-order'>//&nbsp;src/components/adventCalendar/calendar.tsx</span><br />
<span className='code__with-order'>import&nbsp;&#123;&nbsp;Calendar&nbsp;as&nbsp;Model&nbsp;&#125;&nbsp;from&nbsp;&#39;models/calendar&#39;;</span><br />

<span className='code__with-order'>export&nbsp;const&nbsp;Calendar:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;var&nbsp;model&nbsp;=&nbsp;new&nbsp;Model();</span><br />
<span className='code__with-order'>&nbsp;&nbsp;//&nbsp;...(略)...</span><br />
<span className='code__with-order'>&#125;</span><br />

</code></p>

みたいな感じにしたかったが、うまい方法が見つからず今は前者を選んでいる<br />

こんな風にして設計・実装した<br />

<h2>おまけ</h2>

実装していて、&nbsp;scss&nbsp;で書きたかったので次回はそれをやっていきたい<br />

ついでに、コンパイラーで警告されてたから対応したのだけれども&nbsp;react&nbsp;はループで回した&nbsp;dom&nbsp;に対しては&nbsp;key&nbsp;をつけるように指定してくるので忘れた時に思い出しておくとよさそう<br />
（以下の&nbsp;key&nbsp;の部分）<br />

<p className="code"><code>
<span className='code__with-order'>&lt;ul&gt;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&#123;[1,&nbsp;2,&nbsp;3].map((num:&nbsp;number,&nbsp;key:&nbsp;number)&nbsp;=&gt;&nbsp;&lt;li&nbsp;key=&#123;key&#125;&gt;&#123;num&#125;&lt;/li&gt;)&#125;</span><br />
<span className='code__with-order'>&lt;/ul&gt;</span><br />
</code></p>
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190626
