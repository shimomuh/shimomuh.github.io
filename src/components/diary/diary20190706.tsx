//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190706: React.FC = () => {
  return (
    <div className='diary'>
<h1>Redux&nbsp;を使って&nbsp;URL&nbsp;が変わらない&nbsp;VirtualDOM&nbsp;特有の遷移&nbsp;(厳密には再描画)&nbsp;を実現する</h1>

タグ&nbsp;<span className="inline-code">React</span>&nbsp;<span className="inline-code">Redux</span>&nbsp;<span className="inline-code">UI/UX</span><br />

<h2>対象者</h2>

<ul><li>Redux&nbsp;に聞き覚えがある</li>
<li>Typescript&nbsp;で&nbsp;Redux&nbsp;コードは書いたことがない</li>
</ul>
という人<br />

<h2>背景</h2>

カレンダーなので先月/来月には遷移したいよなと思ったのだが、&nbsp;state&nbsp;を使う実装は&nbsp;Stateless&nbsp;Function&nbsp;に反するし、なにより普段から&nbsp;React&nbsp;x&nbsp;Redux&nbsp;には慣れていたので、せっかくなら&nbsp;Typescript&nbsp;でも試したいと思った<br />

<h2>結果</h2>

redux&nbsp;を使って&nbsp;VirtualDOM&nbsp;特有の再描画で&nbsp;URL&nbsp;が変わらない遷移を実現した<br />

&nbsp;<br />

<a href={"https://github.com/shimomuh/shimomuh.github.io/commit/018c6f2b9a3227fd279213e627d8f90f0ffcac97"}>→成果</a><br />

&nbsp;<br />

この遷移を使うデメリットは&nbsp;<span className="inline-code">withRouter(connect(state)(Container))</span>&nbsp;みたいなことをしていないので&nbsp;URL&nbsp;が変わらないことである<br />

が、今回はUXの観点からそのデメリットを活用した<br />

&nbsp;<br />

ことカレンダーにおいて<br />

<ul><li>今どこのページをみているかというのはインターネット上のアドレス（URL）として残すほどの意味がない</li>
<li>物体としてのカレンダーにおける困った事象の一つに6ヶ月前の予定を調べた後に今月に戻ってくるのが面倒だと思う</li>
</ul>
これらの観点から&nbsp;URL&nbsp;に残さないことで、リロードで今月に戻ることができる点から&nbsp;Redux&nbsp;の採用に至った<br />

<s>まぁ、今のままだとぶっちゃけ&nbsp;React&nbsp;の恩恵をあまり受けれてないしね</s><br />

<h2>過程</h2>

ほぼ以下に従っただけ<br />

<a href={"https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510"}>関東最速でReact+Redux+TypeScriptなアプリを作る</a><br />

一応はまった点だけ補足しておく<br />

<h3>Redux&nbsp;の&nbsp;store&nbsp;は更新されてるのに再描画が走らない問題</h3>

久々にはまった点が&nbsp;Reduxは浅い比較&nbsp;(&nbsp;shallow&nbsp;equality&nbsp;checking&nbsp;)&nbsp;だということである<br />

<a href={"https://qiita.com/yasuhiro-yamada/items/aebda0dff79a70eb71d7"}>ReduxのStateが変更されたのに再レンダリングされない問題</a>&nbsp;をみて思い出した<br />

例えば以下のようなコンポーネントがあったとしよう<br />

store&nbsp;プロパティの中身は&nbsp;action&nbsp;で更新されうる&nbsp;store&nbsp;の値が入っていて今回は仮想のモデル&nbsp;CalendarModel&nbsp;が入っているとする<br />

Component&nbsp;は&nbsp;Container&nbsp;に接続され&nbsp;store&nbsp;の更新を&nbsp;dispatch&nbsp;している前提とする<br />

<p className="code"><code>
<span className='code__with-order'>import&nbsp;React&nbsp;from&nbsp;&#39;react&#39;;</span><br />

<span className='code__with-order'>type&nbsp;Props&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;store:&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;calendar:&nbsp;CalendarModel;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&#125;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>Component:&nbsp;React.RC&lt;Props&gt;&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;console.log(props.store.calendar.year)&nbsp;//&nbsp;(1)</span><br />
<span className='code__with-order'>&nbsp;&nbsp;reutnr&nbsp;&lt;p&gt;&#123;props.store.calendar.year&#125;&lt;/p&gt;&nbsp;//&nbsp;(2)</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>class&nbsp;CalendarModel&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;public&nbsp;year:&nbsp;number;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

あるアクションによって&nbsp;CalendarModel&nbsp;が更新された時、たしかに&nbsp;console.log&nbsp;で確認した時&nbsp;(1)&nbsp;の値は変わっているのに&nbsp;(2)&nbsp;の描画は古いままになってしまう<br />

これは&nbsp;CalendarModel&nbsp;の要素が変わっても&nbsp;<b>CalendarModel&nbsp;の参照（メモリ上の番地）が変わっていないからである</b><br />

参照渡しではなく値渡しでないと、&nbsp;React&nbsp;は最適化の観点から描画を実行しない<br />

なので、僕の場合はアクションで更新する時に値が変わるものを&nbsp;store&nbsp;に追加してカバーした<br />

<p className="code"><code>
<span className='code__with-order'>//&nbsp;reducer</span><br />
<span className='code__with-order'>import&nbsp;&#123;&nbsp;reducerWithInitialState&nbsp;&#125;&nbsp;from&nbsp;&#39;typescript-fsa-reducers&#39;;</span><br />
<span className='code__with-order'>import&nbsp;actionCreatorFactory&nbsp;from&nbsp;&#39;typescript-fsa&#39;;</span><br />

<span className='code__with-order'>interface&nbsp;CalendarState&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;calendar:&nbsp;CalendarModel,</span><br />
<span className='code__with-order'>&nbsp;&nbsp;year:&nbsp;number;</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>const&nbsp;state:&nbsp;CalendarState&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;calendar:&nbsp;new&nbsp;Calender(),</span><br />
<span className='code__with-order'>&nbsp;&nbsp;year:&nbsp;new&nbsp;Calender().year</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>const&nbsp;actionCreator&nbsp;=&nbsp;actionCreatorFactory();</span><br />

<span className='code__with-order'>const&nbsp;calendarActions&nbsp;=&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;nextYear:&nbsp;actionCreator&lt;CalendarModel&gt;(&#39;NEXT_YEAR&#39;)</span><br />
<span className='code__with-order'>&#125;</span><br />

<span className='code__with-order'>export&nbsp;const&nbsp;calendarReducer&nbsp;=&nbsp;reducerWithInitialState(state)</span><br />
<span className='code__with-order'>&nbsp;&nbsp;.case(calendarActions.nextYear,&nbsp;(state,&nbsp;model)&nbsp;=&gt;&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;Object.assign(&#123;&#125;,&nbsp;state,&nbsp;&#123;&nbsp;calendar:&nbsp;model,&nbsp;year:&nbsp;model.year&nbsp;&#125;)</span><br />
<span className='code__with-order'>&nbsp;&nbsp;&#125;);</span><br />

<span className='code__with-order'>class&nbsp;CalendarModel&nbsp;&#123;</span><br />
<span className='code__with-order'>&nbsp;&nbsp;public&nbsp;year:&nbsp;number;</span><br />
<span className='code__with-order'>&#125;</span><br />
</code></p>

こうしておくことで&nbsp;<span className="inline-code">calendarActions.nextYear</span>&nbsp;というアクションが実行されたときに&nbsp;store&nbsp;の中の値渡しである&nbsp;<span className="inline-code">year</span>&nbsp;が変更され、&nbsp;Component&nbsp;の再描画が走るという寸法である<br />
      <br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190706
