//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190705: React.FC = () => {
  return (
    <div className='diary'>
        <h1>React&nbsp;on&nbsp;Github&nbsp;Pages&nbsp;でも&nbsp;404&nbsp;を返さずに遷移したい！</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/3'><span className='inline-code'>Github</span></Link>&nbsp;<Link to='/tag/4'><span className='inline-code'>React</span></Link>&nbsp;<Link to='/tag/2'><span className='inline-code'>Javascript</span></Link>
        <br />
        <h2>対象者</h2>
        
        React&nbsp;on&nbsp;Github&nbsp;Pages&nbsp;を使っている/興味がある人
        <br />
        <h2>背景</h2>
        
        <span className="inline-code">npm&nbsp;run&nbsp;start</span>&nbsp;でローカルで&nbsp;worker&nbsp;を立ち上げているときは&nbsp;<span className="inline-code">https://xxx.github.io/2019-07-05</span>&nbsp;なんかに飛んでも問題なかったのだが、&nbsp;Github&nbsp;Pages&nbsp;にあげた途端に&nbsp;404&nbsp;が返るようになった&nbsp;&#x1f631;
        <br />
        そこで、対処したかったが、できれば&nbsp;BrowerHistory&nbsp;の代わりに&nbsp;HashHistory&nbsp;は使いたくなかった
        <br />
        そこで、slack&nbsp;overflow&nbsp;の&nbsp;<a href="https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages">getting&nbsp;404&nbsp;for&nbsp;links&nbsp;with&nbsp;create-react-app&nbsp;deployed&nbsp;to&nbsp;github&nbsp;pages</a>&nbsp;を参考にさせてもらった&nbsp;&#x1f64f;
        <br />
        <h2>結果</h2>
        
        Github&nbsp;Pages&nbsp;の特性を使って問題を解決した。
        <br />
        <a href="(https://github.com/shimomuh/shimomuh.github.io/commit/61fa7ddc9a16f187d94260293f962238350a098b">→成果</a>
        <br />
        結論だけ言うと&nbsp;stack&nbsp;overflow&nbsp;のリンクにあった&nbsp;<a href="https://github.com/rafrex/spa-github-pages">spa-github-pages&nbsp;-&nbsp;Github</a>&nbsp;をコピペしただけなのだが、それだけだとあまりにも味気ないので、スクリプトの解説とそもそもなぜこれでいけるのかについて説明する。
        <br />
        <h2>過程</h2>
        
        <h3>そもそもなぜ&nbsp;404.html&nbsp;にリダイレクト処理を書いたスクリプトだけでルーティングできるのか</h3>
        
        そもそもこの現象、&nbsp;slack&nbsp;overflow&nbsp;の質問者が書いていたように&nbsp;<span className="inline-code">createHistory</span>&nbsp;や&nbsp;<span className="inline-code">routerMiddleware</span>&nbsp;を使っても解決することができない
        <br />
        なぜなら、より上段の処理によって今回の問題が発生しているからである
        <br />
        <h4>Web&nbsp;サーバの存在</h4>
        
        例えば、このサイトのように特定の&nbsp;index.html&nbsp;を&nbsp;<span className="inline-code">xxx.github.io</span>&nbsp;という名前で表示したかったとする
        <br />
        index.html&nbsp;には&nbsp;minify&nbsp;/&nbsp;uglify&nbsp;された元は&nbsp;typescript&nbsp;で書かれた&nbsp;js&nbsp;ファイルを読み込むように指定があり、同様に&nbsp;css&nbsp;も配置されている
        <br />
        さらにはドメインの登録が終わっており、&nbsp;<span className="inline-code">xxx.github.io</span>&nbsp;と紐づけた&nbsp;<span className="inline-code">172.123.456.78</span>&nbsp;というグローバルIP&nbsp;を持つサーバに配置した&nbsp;index.html&nbsp;はインターネット上に公開されない
        <br />
        &nbsp;
        <br />
        ───&nbsp;そう、表示するのに必要なものは全て揃っているのである
        <br />
        &nbsp;
        <br />
        にもかかわらず表示されないのは&nbsp;<span className="inline-code">172.123.456.78</span>&nbsp;のグローバルIPアドレスを持つサーバに「<span className="inline-code">xxx.github.io</span>&nbsp;の&nbsp;root&nbsp;path&nbsp;に接続されたときは、このディレクトリにある&nbsp;index.html&nbsp;を表示するんだよ」と設定してあげる必要があるからである。
        <br />
        この割り当ての役割を担うのが&nbsp;Web&nbsp;サーバである。
        <br />
        nginx&nbsp;や&nbsp;Apache&nbsp;などは聞き覚えがあるだろう。
        <br />
        <s><i>nginx&nbsp;や&nbsp;Apache&nbsp;に関するよもやま話もしたいがそれは別の機会に</i></s>
        <br />
        <h4>Github&nbsp;Pages&nbsp;では</h4>
        
        この&nbsp;Web&nbsp;サーバのような設定が&nbsp;Github&nbsp;Pages&nbsp;にもある
        <br />
        少なくとも&nbsp;Github&nbsp;のリポジトリの直下に配置した&nbsp;index.html&nbsp;は&nbsp;root&nbsp;path&nbsp;に接続された場合の表示ファイルになるし、&nbsp;直下に配置した&nbsp;<span className="inline-code">404.html</span>&nbsp;はアクセス先の&nbsp;html&nbsp;ファイルが存在しなかったときの表示ファイルとなる
        <br />
        &nbsp;
        <br />
        ここで話を戻すと、&nbsp;react&nbsp;的には&nbsp;<span className="inline-code">/hoge</span>&nbsp;のパスが来た時に&nbsp;hoge.js&nbsp;を参照してページを表示したいのだが、あいにく&nbsp;Github&nbsp;Pages&nbsp;の&nbsp;Web&nbsp;サーバ設定では&nbsp;hoge.html&nbsp;を探そうとしてしまう
        <br />
        そして、&nbsp;hoge.html&nbsp;がないので&nbsp;<span className="inline-code">404.html</span>&nbsp;が返ってしまう
        <br />
        これが、ローカル（<span className="inline-code">npm&nbsp;run&nbsp;start</span>&nbsp;で実行した&nbsp;worker&nbsp;の設定）では表示されていたはずのパスで参照されていた&nbsp;js&nbsp;ファイルが&nbsp;Github&nbsp;Pages&nbsp;上では&nbsp;<span className="inline-code">404.html</span>&nbsp;が表示されてしまうワケである
        <br />
        &nbsp;
        <br />
        逆を返せば、&nbsp;Github&nbsp;Pages&nbsp;には&nbsp;<span className="inline-code">/hoge</span>&nbsp;=&nbsp;hoge.js&nbsp;の発想がないので、&nbsp;<span className="inline-code">404.html</span>&nbsp;にその役割を担うスクリプトを書いて、無理やり&nbsp;<span className="inline-code">/hoge</span>&nbsp;のパスでアクセスしてきた場合
        <br />
        <span className="inline-code">/hoge</span>&nbsp;=&gt;&nbsp;<span className="inline-code">404.html</span>&nbsp;が表示される&nbsp;=&gt;&nbsp;スクリプトによって&nbsp;hoge.js&nbsp;を参照するようになる
        <br />
        という具合に意図したファイルを擬似的に参照させてあげることも可能である
        <br />
        <s>必ず&nbsp;302&nbsp;の&nbsp;Http&nbsp;ステータスを返すリクエストを経由してからユーザにお届けすることになるので非効率的ではあるのだが、そこは&nbsp;HashHistory&nbsp;を使って&nbsp;URL&nbsp;を&nbsp;a&nbsp;bit&nbsp;messy&nbsp;であることを許容するかどちらを取るかの問題だよね</s>
        <br />
        &nbsp;
        <br />
        さて、&nbsp;<span className="inline-code">404.html</span>&nbsp;にリダイレクト処理を書いたスクリプトで世界を救う説明が終わったので次はスクリプトの中身を見ていく（実はめちゃくちゃシンプル）
        <br />
        <h3><span className="inline-code">404.html</span>&nbsp;の中身</h3>
        
        ほぼ全容は以下の通りである
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order"><span className="syntax--var">var</span>&nbsp;segmentCount&nbsp;=&nbsp;0;</span><br />
        <span className="code__with-order"><span className="syntax--var">var</span>&nbsp;l&nbsp;=&nbsp;window.location;</span><br />
        <span className="code__with-order">l.replace(</span><br />
        <span className="code__with-order">&nbsp;&nbsp;l.protocol&nbsp;+&nbsp;&#39;//&#39;&nbsp;+&nbsp;l.hostname&nbsp;+&nbsp;(l.port&nbsp;?&nbsp;&#39;:&#39;&nbsp;+&nbsp;l.port&nbsp;:&nbsp;&#39;&#39;)&nbsp;+</span><br />
        <span className="code__with-order">&nbsp;&nbsp;l.pathname.split(&#39;/&#39;).slice(0&nbsp;1&nbsp;+&nbsp;segmentCount).join(&#39;/&#39;)&nbsp;+&nbsp;&#39;/?p=/&#39;&nbsp;+</span><br />
        <span className="code__with-order">&nbsp;&nbsp;l.pathname.slice(1).split(&#39;/&#39;).slice(segmentCount).join(&#39;/&#39;).replace(/&amp;/g&nbsp;&#39;~and~&#39;)&nbsp;+</span><br />
        <span className="code__with-order">&nbsp;&nbsp;(l.search&nbsp;?&nbsp;&#39;&amp;q=&#39;&nbsp;+&nbsp;l.search.slice(1).replace(/&amp;/g&nbsp;&#39;~and~&#39;)&nbsp;:&nbsp;&#39;&#39;)&nbsp;+</span><br />
        <span className="code__with-order">&nbsp;&nbsp;l.hash</span><br />
        <span className="code__with-order">);</span><br />
        </code></p>
        
        L3&nbsp;で&nbsp;URL&nbsp;の置換を行なっている
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">l.replace(/*&nbsp;...(略)...&nbsp;*/)</span><br />
        </code></p>
        
        replace&nbsp;メソッドは文字通り&quot;置換&quot;なので、&nbsp;<span className="inline-code">window.history</span>&nbsp;に&nbsp;<span className="inline-code">pushState</span>&nbsp;しないので、ブラウザ履歴として残らない
        <br />
        次に、&nbsp;L5&nbsp;に説明するために&nbsp;<span className="inline-code">xxx.github.io/hoge</span>&nbsp;にアクセスした場合を想定する
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">l.pathname.split(&#39;/&#39;)&nbsp;//&nbsp;=&gt;&nbsp;<span className="syntax--brackets">[</span>&quot;&quot;&nbsp;&quot;hoge&quot;<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.slice(0&nbsp;1&nbsp;+&nbsp;segmentCount)&nbsp;//&nbsp;=&gt;&nbsp;&quot;&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.join(&#39;/&#39;)&nbsp;//&nbsp;=&gt;&nbsp;&quot;&quot;</span><br />
        </code></p>
        
        次に&nbsp;L6
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">l.pathname.slice(1)&nbsp;//&nbsp;=&gt;&nbsp;&quot;hoge&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.split(&#39;/&#39;)&nbsp;//&nbsp;=&gt;&nbsp;<span className="syntax--brackets">[</span>&quot;hoge&quot;<span className="syntax--brackets">]</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.slice(segmentCount)&nbsp;//&nbsp;=&gt;&nbsp;&quot;hoge&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.join(&#39;/&#39;)&nbsp;//&nbsp;=&gt;&nbsp;&quot;hoge&quot;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(/&amp;/g&nbsp;&#39;~and~&#39;)&nbsp;//&nbsp;=&gt;&nbsp;&quot;hoge&quot;&nbsp;(クエリ判定)</span><br />
        </code></p>
        
        L7&nbsp;の&nbsp;search&nbsp;メソッドは&nbsp;<span className="inline-code">/hoge?p=1</span>&nbsp;の&nbsp;<span className="inline-code">?</span>&nbsp;以降を取り出すメソッド（今回は関係なし）
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">(l.search&nbsp;?&nbsp;&#39;&amp;q=&#39;&nbsp;+&nbsp;l.search.slice(1).replace(/&amp;/g&nbsp;&#39;~and~&#39;)&nbsp;:&nbsp;&#39;&#39;)</span><br />
        </code></p>
        
        要は&nbsp;<span className="inline-code">https://xxx.github.io/?p=/hoge</span>&nbsp;のように変換する
        <br />
        これによって、パス的には&nbsp;<span className="inline-code">xxx.github.io</span>&nbsp;にクエリ付きパラメータでアクセスしたのと一緒になるのでルートに飛ばされるという寸法である
        <br />
        <s>これと&nbsp;<span className="inline-code">HashHistory</span>&nbsp;どっちが好みかは意見が割れそうだが</s>
        <br />
        &nbsp;
        <br />
        受け取り側(<span className="inline-code">index.html</span>)の内容は以下の通り
        <br />
        <p className="code javascript"><code>
        <span className="code__with-order">(<span className="syntax--function">function</span>(l)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--if">if</span>&nbsp;(l.search)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--var">var</span>&nbsp;q&nbsp;=&nbsp;<span className="syntax--braces">&#123;</span><span className="syntax--braces">&#125;</span>;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;l.search.slice(1).split(&#39;&amp;&#39;).forEach(<span className="syntax--function">function</span>(v)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--var">var</span>&nbsp;a&nbsp;=&nbsp;v.split(&#39;=&#39;);</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;q<span className="syntax--brackets">[</span>a<span className="syntax--brackets">[</span>0<span className="syntax--brackets">]</span><span className="syntax--brackets">]</span>&nbsp;=&nbsp;a.slice(1).join(&#39;=&#39;).replace(/~and~/g&nbsp;&#39;&amp;&#39;);</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span>);</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--if">if</span>&nbsp;(q.p&nbsp;!==&nbsp;<span className="syntax--undefined">undefined</span>)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.history.replaceState(null&nbsp;null</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;l.pathname.slice(0&nbsp;-1)&nbsp;+&nbsp;(q.p&nbsp;||&nbsp;&#39;&#39;)&nbsp;+</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(q.q&nbsp;?&nbsp;(&#39;?&#39;&nbsp;+&nbsp;q.q)&nbsp;:&nbsp;&#39;&#39;)&nbsp;+</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;l.hash</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span>(window.location))</span><br />
        </code></p>
        
        わざわざ解説しないが、先ほどの逆の手順で再度解析して適切な送信先に&nbsp;replaceState&nbsp;で飛ばしている
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190705
