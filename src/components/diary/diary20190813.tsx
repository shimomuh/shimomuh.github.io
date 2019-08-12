//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190813: React.FC = () => {
  return (
    <div className='diary'>
        <h1>関節部のポリゴン数を減らした時にどうなるか実験する</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>&nbsp;<Link to='/tag/19'><span className='inline-code'>実験</span></Link>
        <br />
        <h2>対象者</h2>
        
        モデルの基礎を理解したい人
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/model-base/commit/47fab2c9a50a566441e37d14577b1aa4d5e51eec">→成果</a>
        <br />
        ポリゴン数が少なくなるとどういう見え方をするのかを実験してみた
        <br />
        &nbsp;
        <br />
        なお、変化がわかりやすくするため&nbsp;UV&nbsp;画像をそのままテクスチャとして貼ってみた
        <br />
        UV&nbsp;画像とかテクスチャとして貼って表現することについては、&nbsp;<a href="http://krlab.info.kochi-tech.ac.jp/kurihara/lecture/cg/BlenderWeb_Hayashi/html/materialAndTexture.html">かんたんBlender講座</a>&nbsp;の&nbsp;UV&nbsp;展開あたりを参考にしてほしい
        <br />
        <h3>メッシュを少なくしてみた場合</h3>
        
        <table><tr><th>先日のメッシュ</th><th>関節部のメッシュを少なくしてみた</th></tr>
        
        <tr><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard01.gif" alt="" /></td><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard02.gif" alt="" /></td></tr>
        </table>
        &nbsp;
        <br />
        これをみてわかったことは以下の通りである
        <br />
        関節部分のポリゴンの面積が広い方が
        <br />
        <ul><li>テクスチャは大きく変化してしまうのでつぶれやすく</li>
        <li>ポリゴンは変化領域が広いので自動ウェイトで周囲(関節に近いポリゴン)が影響を受けにくい</li>
        </ul>
        ということである
        <br />
        また、このあと最大まで減らしたケースまで検証してみた
        <br />
        <h3>関節部のポリゴン数を最大限まで少なくした場合</h3>
        
        <table><tr><th>関節部のポリゴン数を最大限まで少なくした場合</th><th>そのときのウェイト</th></tr>
        
        <tr><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard05.gif" alt="" /></td><td><img src="https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard05-weight.png" alt="" /></td></tr>
        </table>
        &nbsp;
        <br />
        あまり支障なさそうにみえた
        <br />
        むしろウェイトは絶妙な配分で割り当てられているまであるなと感じた
        <br />
        &nbsp;
        <br />
        この検証によって&nbsp;90&nbsp;度曲げたい場合は関節部分が&nbsp;yz&nbsp;軸平面において&nbsp;<span className="inline-code">縦&nbsp;&gt;=&nbsp;横</span>&nbsp;でなければポリコンがめり込んでしまうことがわかった
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190813
