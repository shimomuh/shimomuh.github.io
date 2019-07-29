//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190730: React.FC = () => {
  return (
    <div className='diary'>
        <h1>アイコンを作ろう</h1>
        
        タグ&nbsp;<Link to='/tag/11'><span className='inline-code'>デザイン</span></Link>&nbsp;<Link to='/tag/12'><span className='inline-code'>設計</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>&nbsp;<Link to='/tag/16'><span className='inline-code'>リギング</span></Link>
        <br />
        <h2>背景</h2>
        
        モデリングやリギングをこれからしようと思ったのでタグを作らないといけないがそれっぽい正式なアイコンはどこにもなかったので作ることにした
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/9b3a2e1179df4bc54f6e02a020f17946e32ac4c4">→成果</a>
        <br />
        一応&nbsp;checkout&nbsp;するかもしれない人のために成果は記載したが、意味不明なので画像も載せる
        <br />
        <h3>設計アイコン</h3>
        
        <img src="/static/diary/2019-07-30/blueprint.png" alt="" />
        <br />
        <h4>アイコンの制作手順</h4>
        
        <ul><li>設計のイメージが欲しかったので設計図をイメージした</li>
        <li>カラーイメージもほしいので設計図から青図をイメージした</li>
        <li>青図に描くものとしてはじめ部屋を書いた</li>
        <li>アイコンサイズだとよくわからなかったので船にした</li>
        <li>アイコンにするのに視認性がある程度高そうな太さを&nbsp;5px&nbsp;以上だと試行錯誤した</li>
        </ul>
        <h3>モデリングアイコン</h3>
        
        <img src="/static/diary/2019-07-30/modeling.png" alt="" />
        <br />
        <h4>アイコンの制作手順</h4>
        
        <ul><li>先ほどのアイコンサイズを参考にする</li>
        <li>自分のモデリングをトレスした</li>
        <li>基本左右対象になるように中央と左のパーツに分けて、左を複製して水平対象にして完成</li>
        </ul>
        <h3>リギングアイコン</h3>
        
        <img src="/static/diary/2019-07-30/modeling-to-rigging.png" alt="" />
        <br />
        <img src="/static/diary/2019-07-30/rigging.png" alt="" />
        <br />
        <h4>アイコンの制作手順</h4>
        
        <ul><li>先ほどのモデリングを下地にリギングしたものをそのままアイコンにする</li>
        <li>作業手順はモデリングと一緒</li>
        <li>本来のボーンの埋め込み方だとアイコンが細々しすぎるので、目立つ腕と脚は2つに分割、それ以外は一つにすることで抽象化を実現した</li></ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190730
