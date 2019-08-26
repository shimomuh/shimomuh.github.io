//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190731: React.FC = () => {
  return (
    <div className='diary'>
        <h1>ベースのモデルについて</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>
        <br />
        <h2>背景</h2>
        
        まずベースとなるモデルを考えて最終的なモデルを作る
        <br />
        作ろうとしているのは&nbsp;<a href="https://kencom.jp/tags/360">千円健康スポット探検隊</a>&nbsp;のキャラ
        <br />
        &nbsp;
        <br />
        理想は以下のモデルに適応すること
        <br />
        <table><tr><th>マテリアルだけ適応したもの</th><th>ボーンをひとまず入れたもの</th></tr>
        
        <tr><td><img src="/static/diary/2019-07-31/skin.png" alt="" /></td><td><img src="/static/diary/2019-07-31/bone.png" alt="" /></td></tr>
        </table>
        &nbsp;
        <br />
        しかし課題がある
        <br />
        <ul><li>随分前に作ったのでどれが最新かわからない...</li>
        <li>記憶が正しければウェイトペイントがうまく適応されなかったのでうまく適応されるモデルを作るためメッシュを詳細化していたはず</li>
        <li>今うまくいってないのは手だけど、それ以外にも不安が残る</li>
        </ul>
        そこで、うまくボーンが割り当てられたモデルをベースに自分のモデルに展開していく
        <br />
        まずは構造から理解したいので明日から単純なモデルをベースに上記を作り直していく
        <br />
        <h2>結論</h2>
        
        色々試行錯誤したが、基礎から学ばないとうまくいかなさそうだったので、ボーンを意識したモデリングを以下リポジトリではじめていく
        <br />
        <a href="https://github.com/shimomuh/model-base">→https://github.com/shimomuh/model-base</a>
        <br />
        &nbsp;
        <br />
        まずはリポジトリを作っただけ
        <br />
        中身は明日から埋めていく...
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190731
