//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190626: React.FC = () => {
  return (
    <div className='diary'>
        <h1>Javascript&nbsp;でカレンダーを作ろう</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/2'><span className='inline-code'>Javascript</span></Link>&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>
        <br />
        <h2>対象者</h2>
        
        <ul><li>車輪の再発明大好き！</li>
        <li>Javascript&nbsp;で何か作りたい！</li>
        </ul>
        人向け。
        <br />
        プログラミング言語触りたて、Javascript&nbsp;はじめたての人向けではない。
        <br />
        <h2>背景</h2>
        
        アドベントカレンダー作るからにはカレンダー作らないとね
        <br />
        せっかくなら汎用的に作りたいよね
        <br />
        <h2>結果</h2>
        
        <a href="https://qiita.com/kan_dai/items/b1850750b883f83b9bee">JavaScriptでカレンダーを自作したら勉強になった</a>
        <br />
        <br />
        以上
        <br />
        <br />
        だとあまりにもそっけないので過程を説明する
        <br />
        成果物以上の効果として、勘を取り戻しつつ課題がみつかるので進捗感が得られた
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/pull/2/commits/3e483e1c8ace75af061ee36fb071d0507b01f08a">→成果</a>
        <br />
        <h2>過程</h2>
        
        &quot;どんなコードを書いたか&quot;&nbsp;は&nbsp;commit&nbsp;をみてもらえばわかるのでここでは考え方を共有する
        <br />
        <h3>責務の所在をはっきりする</h3>
        
        僕はスーパーマンじゃないのでなんでもは知らない、知ってることだけ
        <br />
        今ある&nbsp;<span className="inline-code">src/components/</span>&nbsp;配下に新しく&nbsp;calendar&nbsp;的なコンポーネントを作りたかったけど、これから作ろうとしているカレンダーのロジックはロジックなので&nbsp;view&nbsp;を表現するコンポーネントとは別の場所に配置したかった
        <br />
        そこで、&nbsp;<span className="inline-code">models/calendar.tsx</span>&nbsp;が爆誕した
        <br />
        <h3>パスを絶対参照で書く</h3>
        
        配置したはいいが、ロジックを読み込むのに相対パスだと場所が変わったら崩壊してしまう
        <br />
        密なコンポーネントなら相対参照でよいがロジックはさすがに&nbsp;<span className="inline-code">src</span>&nbsp;を起点に絶対パスで描きたかった
        <br />
        そこで&nbsp;<span className="inline-code">tsconfig.json</span>&nbsp;をいじって、絶対パスっぽく参照できるように以下のようにした
        <br />
        もしかしたらこれが一番時間かかったかもしれない
        <br />
        <p className="code json"><code>
        <span className="code__with-order"><span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&quot;compilerOptions&quot;:&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;baseUrl&quot;:&nbsp;&quot;src&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&quot;paths&quot;:&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;components/*&quot;:&nbsp;<span className="syntax--brackets">[</span>&quot;components/*&quot;<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;models/*&quot;:&nbsp;<span className="syntax--brackets">[</span>&quot;models/*&quot;<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        はじめ&nbsp;<span className="inline-code">&quot;~*&quot;:&nbsp;[&quot;*&quot;]</span>&nbsp;みたいな形で&nbsp;<span className="inline-code">src</span>&nbsp;を&nbsp;root&nbsp;に参照しようと思ったがうまくいかなかった
        <br />
        もしかしたら&nbsp;hot&nbsp;loader&nbsp;との相性が悪いのかもしれないがそれはまた別の機会に。
        <br />
        参考にしたのはこのあたり
        <br />
        <a href="https://qiita.com/nju33/items/cf924f7b6bb513bef8a2">TypeScriptでaliasなパスでmoduleをimportできるように</a>
        <br />
        <h3>ロジックを書く</h3>
        
        まずは&nbsp;function&nbsp;でカレンダーロジックを作った
        <br />
        イメージ的には以下を返すような関数
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--const">const&nbsp;</span>getCal<span className="syntax--end">end</span>ar&nbsp;=&nbsp;(year:&nbsp;number&nbsp;month:&nbsp;number):&nbsp;any&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--return">return</span>&nbsp;<span className="syntax--brackets">[</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">[</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">[</span>&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;4&nbsp;&nbsp;5&nbsp;&nbsp;6&nbsp;&nbsp;7&nbsp;&nbsp;8<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">[</span>&nbsp;&nbsp;9&nbsp;10&nbsp;11&nbsp;12&nbsp;13&nbsp;14&nbsp;15<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">[</span>&nbsp;16&nbsp;17&nbsp;18&nbsp;19&nbsp;20&nbsp;21&nbsp;22<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">[</span>&nbsp;23&nbsp;24&nbsp;25&nbsp;26&nbsp;27&nbsp;28&nbsp;29<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">[</span>&nbsp;30&nbsp;31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        あとはロジックを考えて中身を埋めるだけ
        <br />
        これができると&nbsp;view&nbsp;はなんでもよくなるので、他のサイト作りたい時にも流用できて責務わけ様様！
        <br />
        しかし、空の部分に先月とか来月の日数が入っているのはよくみるし、日付は連続的なものであって断続的なものではない（見方にもよるけど）
        <br />
        そこで空を埋めようとした時、o&nbsp;o&nbsp;O（今月とそれ以外は色分けとかしたいよな）と思った。
        <br />
        しかし、単なる二次元配列だと状態が管理できない！
        <br />
        そこでクラス構造にすることにした
        <br />
        <h3>function&nbsp;を&nbsp;class&nbsp;に置き換える</h3>
        
        一番意識したのは命名とコンテキストマッピング
        <br />
        普通に&nbsp;class&nbsp;にするとすれば大枠が&nbsp;Calendar&nbsp;で日付が&nbsp;Date&nbsp;にしたかった
        <br />
        でもさすがに&nbsp;Date&nbsp;は標準クラスだし、&nbsp;Calendar&nbsp;はコンポーネントの&nbsp;Calendar&nbsp;とも被ってしまう問題に直面した
        <br />
        そこで、前者はどうしようもないので&nbsp;DateCell&nbsp;という名前にして&nbsp;Calendar&nbsp;はコンテキストマッピングとして処理することでクラス実装時は&nbsp;Calendar&nbsp;として実装すればよいので助かった
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--class">class&nbsp;</span>Cal<span className="syntax--end">end</span>ar&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--export">export</span>&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;Cal<span className="syntax--end">end</span>ar&nbsp;as&nbsp;Cal<span className="syntax--end">end</span>arModel&nbsp;<span className="syntax--braces">&#125;</span>;</span><br />
        </code></p>
        
        これで衝突を避けられる。本音を言うと
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">//&nbsp;src/models/cal<span className="syntax--end">end</span>ar.tsx</span><br />
        <span className="code__with-order"><span className="syntax--export">export</span>&nbsp;<span className="syntax--class">class&nbsp;</span>Cal<span className="syntax--end">end</span>ar&nbsp;<span className="syntax--braces">&#123;</span><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">//&nbsp;src/components/adventCal<span className="syntax--end">end</span>ar/cal<span className="syntax--end">end</span>ar.tsx</span><br />
        <span className="code__with-order"><span className="syntax--import">import&nbsp;</span><span className="syntax--braces">&#123;</span>&nbsp;Cal<span className="syntax--end">end</span>ar&nbsp;as&nbsp;Model&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;from&nbsp;&#39;models/cal<span className="syntax--end">end</span>ar&#39;;</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order"><span className="syntax--export">export</span>&nbsp;<span className="syntax--const">const&nbsp;</span>Cal<span className="syntax--end">end</span>ar:&nbsp;React.FC&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--var">var&nbsp;</span>model&nbsp;=&nbsp;new&nbsp;Model();</span><br />
        <span className="code__with-order">&nbsp;&nbsp;//&nbsp;...(略)...</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><br /></span><br />
        </code></p>
        
        みたいな感じにしたかったが、うまい方法が見つからず今は前者を選んでいる
        <br />
        こんな風にして設計・実装した
        <br />
        <h2>おまけ</h2>
        
        実装していて、&nbsp;scss&nbsp;で書きたかったので次回はそれをやっていきたい
        <br />
        ついでに、コンパイラーで警告されてたから対応したのだけれども&nbsp;react&nbsp;はループで回した&nbsp;dom&nbsp;に対しては&nbsp;key&nbsp;をつけるように指定してくるので忘れた時に思い出しておくとよさそう
        （以下の&nbsp;key&nbsp;の部分）
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">&lt;ul&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--braces">&#123;</span><span className="syntax--brackets">[</span>1&nbsp;2&nbsp;3<span className="syntax--brackets">]</span>.map((num:&nbsp;number&nbsp;key:&nbsp;number)&nbsp;=&gt;&nbsp;&lt;li&nbsp;key=<span className="syntax--braces">&#123;</span>key<span className="syntax--braces">&#125;</span>&gt;<span className="syntax--braces">&#123;</span>num<span className="syntax--braces">&#125;</span>&lt;/li&gt;)<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&lt;/ul&gt;</span><br />
        </code></p>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190626
