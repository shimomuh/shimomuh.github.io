//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190716: React.FC = () => {
  return (
    <div className='diary'>
        <h1>Google&nbsp;Calendar&nbsp;っぽくシンプルなデザインを適応する</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/9'><span className='inline-code'>CSS</span></Link>&nbsp;<Link to='/tag/6'><span className='inline-code'>Scss</span></Link>&nbsp;<Link to='/tag/11'><span className='inline-code'>デザイン</span></Link>&nbsp;<Link to='/tag/10'><span className='inline-code'>UI/UX</span></Link>&nbsp;<Link to='/tag/12'><span className='inline-code'>設計</span></Link>
        <br />
        <h2>対象者</h2>
        
        このサイトの生い立ちを読んでいていて&nbsp;Web&nbsp;サイトのデザインに興味がある人
        <br />
        <h2>結論</h2>
        
        <img src="/static/diary/2019-07-16/like-google-calendar-design.gif" alt="" />
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/f94c2cf48dd65d67bf8f4314b628856f200191f8">→成果</a>
        <br />
        <h2>過程</h2>
        
        デザイン思想について話す
        <br />
        まず「シンプルであること」が仕事で&nbsp;Web&nbsp;デザインを経験する中で自分の中に培われた自身の好みのデザインだったので「シンプルであること」にこだわった
        <br />
        ここでいう「シンプルであること」の思想の定義は以下の通りである
        <br />
        <ul><li>制作物に対するお手本があり、それに忠実であること</li>
        <li>理由のないデザインは追加しないこと</li>
        <li>裏を返せば全てのデザインに意味を持つこと</li>
        </ul>
        これらを踏襲した結果今回のようなデザインになった
        <br />
        &nbsp;
        <br />
        ある人が見れば手抜きにみえるかもしれないが、余計な要素がなくページごとに表現したいことを最大限に表示しているので読み手が苦しむことがないことには配慮している
        <br />
        例えば、成果となった&nbsp;Web&nbsp;サイトデザインは色味に欠ける
        <br />
        しかし、&nbsp;hover&nbsp;すれば最低限の色を付与し、どこが選択されているのかがわかるようになっている
        <br />
        &nbsp;
        <br />
        また、寂しいを理由に背景色をつけるのは「理由のないデザインは追加しないこと」に反するので今回は全く着色していない
        <br />
        これが以下のように理由さえあれば着色やパターンを入れることができる
        <br />
        たとえば
        <br />
        <ul><li>ドット背景であることが私のアイデンティティを表現しているのであればドットを利用することができる</li>
        <li>緑色を背景にすることが私のカラーを表現しているのであれば緑色を採用することができる</li>
        </ul>
        今回緑色は私の中でメインカラーになるが、それを採用しなかった
        <br />
        理由は「制作物に対するお手本があり、それに忠実であること」の定義に準じて、カレンダーは文字がわかりやすいように色地に記載されるのが一般的であることを優先したためである
        <br />
        &nbsp;
        <br />
        思想の定義に該当するものであれば、優先順位などは示していないため、柔軟に変更することができる
        <br />
        そのため、今後も「私のメインカラーを全面に押し出すことをカレンダーをより忠実に再現することよりも優先したい」などの心境の変化や環境の変化が起こった場合はそのように変更することができる
        <br />
        &nbsp;
        <br />
        偉そうに書いたが要はデザインするときはルールを決めてそれに準じていた方がいいよ！という話である
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190716
