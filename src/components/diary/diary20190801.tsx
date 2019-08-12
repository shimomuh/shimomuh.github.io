//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190801: React.FC = () => {
  return (
    <div className='diary'>
        <h1>モデルに自動のウェイトペイントを付与した際の挙動を確かめる</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>
        <br />
        <h2>対象者</h2>
        
        いい感じに動くモデルを作りたい人
        <br />
        <h2>背景</h2>
        
        <a href="https://dskjal.com/blender/the-tips-of-joint.html">関節のボーンとポリゴンフローに関するTIPS</a>&nbsp;という良サイトに出会ったので、なるべくいい感じでオートウェイトを付与していい感じに動くものを作りたい
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/model-base/commit/fbcb8de87a14c2e4489236bee49199485adeb0b4">→成果</a>
        <br />
        今回は時間がないので仕組みのベースとなる考え方だけ
        <br />
        上記の記事には書いてあるけど、実際に試してみないとと思ってやった
        <br />
        <h2>過程</h2>
        
        以下のようなボーンをモデルに組み込んで以下のようにカットした場合&nbsp;[Ctrl&nbsp;+&nbsp;P]&nbsp;で自動でウェイトペイントを割り当てると以下のような意図した結果が得られた
        <br />
        &nbsp;
        <br />
        <table><tr><th>ボーン</th><th>モデルのカット具合</th><th>ペイントウェイト</th></tr>
        
        <tr><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/bone.png" alt="" /></td><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/cut.png" alt="" /></td><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/auto-weight-paint.png" alt="" /></td></tr>
        </table>
        &nbsp;
        <br />
        これにより以下のような動作が実現できた
        <br />
        &nbsp;
        <br />
        <img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/move.gif" alt="" />
        <br />
        記事の通りになった（納得
        <br />
        明日こそ手に着手できるといいなぁ
        <br />
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190801
