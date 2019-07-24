//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190722: React.FC = () => {
  return (
    <div className='diary'>
        <h1>rubocop&nbsp;を使って&nbsp;ruby&nbsp;コードに秩序を！</h1>
        
        タグ&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        運用途中から&nbsp;rubocop&nbsp;を入れる人
        <br />
        <h2>背景</h2>
        
        今更だけど&nbsp;<span className="inline-code">.ruby-version</span>&nbsp;すら縛ってないことに気づいた
        <br />
        あと、スピード重視で&nbsp;rubocop&nbsp;をやめてたけどそろそろ入れたい感が出てきた
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/b0bfa1f4c30137969d1bdc0d22f59b424946258b">→成果</a>
        <br />
        ぶっちゃけ初めから入れとこうに尽きる
        <br />
        <span className="inline-code">.rubocop.yml</span>&nbsp;みてもらえばわかるが、めちゃくちゃ妥協してる&nbsp;orz
        <br />
        <p className="code yml"><code>
        <span className="code__with-order">#&nbsp;日本語のコメントを許可する</span><br />
        <span className="code__with-order">Style/AsciiComments:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Enabled:&nbsp;false</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;Ruby&nbsp;2.3&nbsp;から&nbsp;`#&nbsp;frozen_string_literal:&nbsp;true`&nbsp;とファイル先頭に書くと文字リテラルが&gt;デフォルトで&nbsp;freeze&nbsp;されるようになる</span><br />
        <span className="code__with-order">#&nbsp;これは&nbsp;Ruby&nbsp;3.0&nbsp;で文字リテラルがデフォルトで&nbsp;freeze&nbsp;になる予定なので互換性の問題も&gt;あって移行シミュレーションが可能なように導入されている</span><br />
        <span className="code__with-order">#&nbsp;今回はあえて気にして&nbsp;true&nbsp;にしてみる</span><br />
        <span className="code__with-order">#&nbsp;fyi:&nbsp;https://www.task-notes.com/entry/20160831/1472572735</span><br />
        <span className="code__with-order">Style/FrozenStringLiteralComment:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Enabled:&nbsp;true</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;本当はもっと小分けしたいがリファクタの時間はもったいないので諦める</span><br />
        <span className="code__with-order">Metrics/ClassLength:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Max:&nbsp;200</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;なんかめっちゃ長いのもあるので諦める</span><br />
        <span className="code__with-order">Metrics/LineLength:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Max:&nbsp;200</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;割と危険度が高いと判断されたものも許容する</span><br />
        <span className="code__with-order">Metrics/AbcSize:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Max:&nbsp;50</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;メソッドの危険度（多分破壊的処理とかめっちゃやってるから怒られる）</span><br />
        <span className="code__with-order">Metrics/PerceivedComplexity:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Max:&nbsp;10</span><br />
        <span className="code__with-order">Metrics/CyclomaticComplexity:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Max:&nbsp;10</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;メソッドの長さはある程度許容する</span><br />
        <span className="code__with-order">Metrics/MethodLength:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Max:&nbsp;30</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;JSON.load&nbsp;の代わりに&nbsp;JSON.parse&nbsp;使えってことだったけどそうするとエラーなケースがあ&gt;ったのでひとまず回避</span><br />
        <span className="code__with-order">Security/JSONLoad:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Enabled:&nbsp;false</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">#&nbsp;ハッシュの&nbsp;key&nbsp;=&gt;&nbsp;value&nbsp;の値を列挙した時に&nbsp;value&nbsp;の位置が揃うように空白を入れたとき</span><br />
        <span className="code__with-order">に警告するもの</span><br />
        <span className="code__with-order">#&nbsp;可読性的には全然ありなので、&nbsp;false&nbsp;にする</span><br />
        <span className="code__with-order">Layout/AlignHash:</span><br />
        <span className="code__with-order">&nbsp;&nbsp;Enabled:&nbsp;false</span><br />
        </code></p>
        
        本来これらの規制はカスタムせずに守られるべきなので、隙を見て徐々に改善していこうかなという次第
        <br />
        ただ途中からだとコード量にも限界があるので、なるべく許容することも視野に入れて徐々に直しておくがよいと思う
        <br />
        あと、コードになるべく規制はつけない派なので、許容できるならルールにしてしまって、コード中に&nbsp;<span className="inline-code">#&nbsp;rubocop:disable&nbsp;all</span>&nbsp;みたいなのはやらない方が吉
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190722
