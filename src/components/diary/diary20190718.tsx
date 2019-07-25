//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190718: React.FC = () => {
  return (
    <div className='diary'>
        <h1>マークダウンの&nbsp;Table&nbsp;に対応する</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        マークダウンの&nbsp;Table&nbsp;を自前で実装しようと検討している人（そんな車輪の再開発大好きな人いない気がするけど）
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/1c1fedc9afffdffed79f303545053cc809af7e57">→成果</a>
        <br />
        以下のように表示される
        <br />
        <table><tr><th>カラム1</th><th>カラム2</th></tr>
        
        <tr><td>あいう</td><td>えおか</td></tr>
        </table>
        <h2>過程</h2>
        
        今までの繰り返しだが、基本的にやったことは
        <br />
        <ul><li>はじめに文構造を見てフラグを立てる</li>
        <li>様々な処理の終わり（他のタグやエスケープ処理のあと）でフラグをみて&nbsp;<span className="inline-code">|</span>&nbsp;(パイプ)&nbsp;を書き換える</li>
        </ul>
        の2つ
        <br />
        加えて、この処理方法の欠点としてページの終わりが表を表すタグだった場合閉じタグ処理が実行されないので、文末だったらフラグをみて未処理の文法があればその終了処理をした
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">texts.each<span className="syntax--do">&nbsp;do</span>&nbsp;|text|</span><br />
        <span className="code__with-order">&nbsp;&nbsp;flag_table_tag(text)&nbsp;#&nbsp;テキストをみてフラグを立てる</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;...他のタグ処理やエスケープ処理...</span><br />
        <span className="code__with-order">&nbsp;&nbsp;replace_table_tag(text)&nbsp;#&nbsp;フラグをみて&nbsp;`|`&nbsp;を置換する</span><br />
        <span className="code__with-order"><span className="syntax--end">end</span></span><br />
        <span className="code__with-order">add_last_tag&nbsp;#&nbsp;万一文末で閉じタグ処理を行なっていなければフラグをみてここで行う</span><br />
        </code></p>
        
        これがベストだとは思っていないが、現状私が考えるのはこんな感じ
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190718
