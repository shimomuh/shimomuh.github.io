//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190815: React.FC = () => {
  return (
    <div className='diary'>
        <h1>指の動きを確認してみる</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>
        <br />
        <h2>対象者</h2>
        
        指の動きを確認したい人
        <br />
        <h2>結論</h2>
        
        <a href="https://github.com/shimomuh/model-base/commit/ab9f9e1cb0d827be1506317fc15c9819e57ae4cd">→成果</a>
        <br />
        指の第三関節がどのように動くか確認してみた
        <br />
        &nbsp;
        <br />
        <img src="https://raw.githubusercontent.com/shimomuh/model-base/master/finger/finger.gif" alt="" />
        <br />
        &nbsp;
        <br />
        単純に関節部分を前回を踏まえて最小の構成にして動作させてみたところ、実際の指の動きに近くなった（周囲のポリゴンが引っ張られる様子もほぼ現実と同様だった）
        <br />
        このことから、なるべくシンプルに作れそうだったのでこのモデルを参考に作る
        <br />
        &nbsp;
        <br />
        次回は親指の動きについて書く予定
        <br />
        水かきはなくてもよさそうなので、最小のポリゴンで構成した時に違和感が出るようなら付け足す方向で考えようと思う
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190815
