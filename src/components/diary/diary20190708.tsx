//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190708: React.FC = () => {
  return (
    <div className='diary'>
        <h1>ハイブリットレスポンシブ（レスポンシブ&nbsp;+&nbsp;メディアクエリ）デザイン</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/9'><span className='inline-code'>CSS</span></Link>&nbsp;<Link to='/tag/6'><span className='inline-code'>Scss</span></Link>&nbsp;<Link to='/tag/10'><span className='inline-code'>UI/UX</span></Link>&nbsp;<Link to='/tag/11'><span className='inline-code'>デザイン</span></Link>
        <br />
        <h2>対象者</h2>
        
        <ul><li>メディアクエリって聞いたことはある</li>
        <li>今更だけど&nbsp;flex&nbsp;を導入しようと思っている</li>
        <li>端末によって表示切り替えてる</li>
        <li>レスポンシブ意識してる</li>
        </ul>
        って人向け
        <br />
        <h2>背景</h2>
        
        レスポンシブデザインで生きたい人生だった（端末サイズなどに依存せず実装できるのは素晴らしい！）
        <br />
        が、カレンダーは縮小すると流石に可読性が落ちる
        <br />
        &nbsp;
        <br />
        そこで、レスポンシブを取り入れつつ、メディアクエリで可読性が下がると感じた画面サイズからデザインを変更する方法をとる
        <br />
        このデザイン設計のメリットは以下の通り
        <br />
        <ul><li>可読性が落ちない</li>
        <li>スマホかどうかを&nbsp;UA&nbsp;なんかで判断すると、特定端末がうまく拾えなくて死ぬ、みたいなケースを回避できる</li>
        </ul>
        特に後者は悩みもので、昔&nbsp;Ruby&nbsp;on&nbsp;Rails&nbsp;の&nbsp;<a href="https://github.com/jpmobile/jpmobile">jpmobile</a>&nbsp;という&nbsp;Gem&nbsp;を使って端末をサーバサイドで判断して出力先テンプレートを変えるということをしていたが、これだと後者の問題にひっかかる
        <br />
        &nbsp;
        <br />
        とはいえ、無理にメディアクエリを濫用すると、&nbsp;DOM&nbsp;構造が崩れたり&nbsp;<span className="inline-code">display:&nbsp;none;</span>&nbsp;でも&nbsp;html&nbsp;として出力してはいけないような機微情報やセキュリティ情報はサーバ側で&nbsp;render&nbsp;すら制約した方が無難なので使えない場面もある
        <br />
        <h2>結論</h2>
        
        今回は&nbsp;PC&nbsp;サイズをテーブルレイアウト、&nbsp;SP&nbsp;サイズをリストレイアウトに見せることで実現した
        <br />
        &nbsp;
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/842e8a628fc405d61bd6f2a6f7ee97098e8c95a7">→成果</a>
        <br />
        <img src="/static/diary/2019-07-08/responsive-plus-media-query.gif" alt="" />
        <br />
        <h2>過程</h2>
        
        まずはテーブルレイアウトをリストレイアウトに見せるために&nbsp;DOM&nbsp;構造をいじってやる必要があった
        <br />
        今回は&nbsp;flex&nbsp;を上手いこと使って実現した
        <br />
        &nbsp;
        <br />
        <b>DOM</b>
        <br />
        <p className="code html"><code>
        <span className="code__with-order">&lt;ul&nbsp;<span className="syntax--class">class</span>=&quot;table-header&quot;&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;日&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;月&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;火&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;水&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;木&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;金&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;土&lt;/li&gt;</span><br />
        <span className="code__with-order">&lt;/ul&gt;</span><br />
        <span className="code__with-order">&lt;ul&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;1&lt;span&gt;(日)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;2&lt;span&gt;(月)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;3&lt;span&gt;(火)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;4&lt;span&gt;(水)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;5&lt;span&gt;(木)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;6&lt;span&gt;(金)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;7&lt;span&gt;(土)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;8&lt;span&gt;(日)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;9&lt;span&gt;(月)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;10&lt;span&gt;(火)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;11&lt;span&gt;(水)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;12&lt;span&gt;(木)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;13&lt;span&gt;(金)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&lt;li&gt;14&lt;span&gt;(土)&lt;/span&gt;&lt;/li&gt;</span><br />
        <span className="code__with-order">&lt;/ul&gt;</span><br />
        </code></p>
        
        <b>CSS</b>
        <br />
        <p className="code css"><code>
        <span className="code__with-order">/*&nbsp;スマホサイズはそのまま&nbsp;*/</span><br />
        <span className="code__with-order"><span className="syntax--media">@media</span>&nbsp;screen&nbsp;and&nbsp;(max-width:&nbsp;1024px)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;.table-header&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;display:&nbsp;none;&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;/*&nbsp;テーブルレイアウト時のヘッダーにあたる曜日は隠す&nbsp;*/</span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"></span><br />
        <span className="code__with-order">/*&nbsp;PC&nbsp;サイズは少し工夫&nbsp;*/</span><br />
        <span className="code__with-order"><span className="syntax--media">@media</span>&nbsp;screen&nbsp;and&nbsp;(min-width:&nbsp;1024px)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;li&nbsp;span&nbsp;<span className="syntax--braces">&#123;</span>&nbsp;display:&nbsp;none;&nbsp;<span className="syntax--braces">&#125;</span>&nbsp;/*&nbsp;曜日は隠す&nbsp;*/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;ul&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;flex;&nbsp;/*&nbsp;flex&nbsp;style&nbsp;を使う&nbsp;*/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;flex-wrap:&nbsp;wrap;&nbsp;/*&nbsp;いい塩梅で折り返す&nbsp;*/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;li&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;14%;&nbsp;/*&nbsp;(<span className="syntax--int">int</span>)(100&nbsp;/&nbsp;7)&nbsp;=&nbsp;14&nbsp;*/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;:nth-child(7n&nbsp;+&nbsp;1)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;red;&nbsp;/*&nbsp;日曜&nbsp;*/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;:nth-child(7n)&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;blue;&nbsp;/*&nbsp;土曜&nbsp;*/</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        <ul><li>メディアクエリは&nbsp;<a href="https://dev.classmethod.jp/smartphone/device-media-queries/">デバイスに合わせてCSSを振り分ける「Media&nbsp;Queries」</a></li>
        </ul>
        <ul><li>flex&nbsp;レイアウトは<a href="https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet">日本語対応！CSS&nbsp;Flexboxのチートシートを作ったので配布します&nbsp;|&nbsp;Web&nbsp;クリエイターボックス</a></li>
        </ul>
        あたりを参照するのがいいかな&nbsp;<s>（一部書き方忘れてた）</s>
        <br />
        ポイントは
        <br />
        <p className="code css"><code>
        <span className="code__with-order">.parent&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;flex-wrap:&nbsp;wrap;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;.children&nbsp;<span className="syntax--braces">&#123;</span></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;14%;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;<span className="syntax--braces">&#125;</span></span><br />
        <span className="code__with-order"><span className="syntax--braces">&#125;</span></span><br />
        </code></p>
        
        の部分
        <br />
        これで&nbsp;100%&nbsp;を超える&nbsp;8&nbsp;要素目からいい感じに折り返してくれる
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190708
