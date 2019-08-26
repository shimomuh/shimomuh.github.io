//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190827: React.FC = () => {
  return (
    <div className='diary'>
        <h1>適切なポリゴン数を定義してモデリングし直す</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>
        <br />
        <h2>対象者</h2>
        
        適切なポリゴン数を知りたい人
        <br />
        <h2>背景</h2>
        
        ふと今のポリゴン数で&nbsp;Web&nbsp;に公開できるようなサイズなのか？と疑問を持った
        <br />
        &nbsp;
        <br />
        そこで参考サイトとして&nbsp;FBX&nbsp;ファイルを&nbsp;WebGL&nbsp;で表示している&nbsp;threejs&nbsp;のサンプルと比較することにした
        <br />
        その結果自分にとって最適そうなポリゴン数が見えてきたのでそれにしたがってモデルを修正することにした
        <br />
        <h2>結論</h2>
        
        今日は顔だけ
        <br />
        <img src="/static/diary/2019-08-27/face.gif" alt="" />
        <br />
        <h2>過程</h2>
        
        <h3>想定される場所を考える</h3>
        
        まずはこのモデルをどこで使うか
        <br />
        様々なところで使いまわしたかったので、現状想定しているものがアプリと&nbsp;Web&nbsp;だったので表示に時間がかかりそうな&nbsp;Web&nbsp;でストレスなくモデルを表示できる時間を基準とした
        <br />
        <h3>ストレスなくモデルを表示する（ロードにかかる）時間とは何か</h3>
        
        ところで、&nbsp;Web&nbsp;で&nbsp;fbx&nbsp;ファイルを表示するにはロードが必要である
        <br />
        昨今デバイスの性能向上は著しいが、それでも瞬時に表示するには至っていない（ファイルI/Oもあるし限界はある）
        <br />
        昔から&nbsp;Web&nbsp;では人間が待てそうな時間は&nbsp;2&nbsp;秒程度（参考：<a href="https://boxil.jp/beyond/a5835/">ページ読み込みは「2秒以内」に&nbsp;-&nbsp;3秒待てないモバイルユーザー、画像圧縮で表示速度改善を</a>）と言われているので、今回はその時間を基準に考えた
        <br />
        <h3>表示の参考になりそうなものを探す</h3>
        
        自分でモデルを読み込むサンプルを作って確認してもよいが、今回はちょうどよいサンプルがあった
        <br />
        <a href="https://threejs.org/examples/#webgl_loader_fbx">three.js&nbsp;examples</a>
        <br />
        このサンプルサイトで表示されているモデルが初回に表示されるまでの体感時間は理想のおよそ&nbsp;2&nbsp;秒
        <br />
        データ量が大きくなりそうなテクスチャこそ含まれていないが、three.js&nbsp;でボーンを入れてアニメーションさせる想定だったので、これを一つの基準とする
        <br />
        ちなみに、このモデルは&nbsp;three.js&nbsp;公式から落としてくることができるので計測したところ&nbsp;<span className="inline-code">55320</span>&nbsp;ポリゴンだった
        <br />
        &nbsp;
        <br />
        他にも仕事の伝手を利用して&nbsp;Web&nbsp;に&nbsp;three.js&nbsp;を使って&nbsp;fbx&nbsp;を表示しているサイトと表示しているモデルのポリゴン数が調査できた（嗚呼、なんて運がいいんだ、神に感謝）
        <br />
        詳細はお伝えできないが、ロード時間は&nbsp;2&nbsp;秒弱でテクスチャとアニメーションつき、ポリゴン数は&nbsp;<span className="inline-code">1099</span>&nbsp;ポリゴンだった
        <br />
        お察しの通り少しモデルが粗い
        <br />
        <h3>自分がこの程度のきめ細かさは実現したいと思うモデルを探す</h3>
        
        テクスチャのロードがどの程度か計り知れないが、どうやら&nbsp;<span className="inline-code">55320</span>&nbsp;&gt;&nbsp;x&nbsp;&gt;&nbsp;<span className="inline-code">1099</span>&nbsp;の定義域の範囲でモデルを実現してやれば、最終的にテクスチャなどの読み込み時間を含んでも&nbsp;f(x)&nbsp;≒&nbsp;2.0&nbsp;sec&nbsp;に抑えられそうである
        <br />
        &nbsp;
        <br />
        それを承知の上で、自分は先ほど&nbsp;<span className="inline-code">1099</span>&nbsp;ポリゴンのモデルを&nbsp;&quot;粗い&quot;&nbsp;と表現した
        <br />
        その通り。納得していない
        <br />
        では、許容できるモデルはどんなものだろうか
        <br />
        &nbsp;
        <br />
        自身が納得できそうなポリゴンを見つけてきた
        <br />
        <a href="http://unity-chan.com/download/releaseNote.php?id=SDUnityChan">SDユニティちゃん&nbsp;3Dモデルデータ&nbsp;ダウンロード</a>
        <br />
        この&nbsp;humaroid&nbsp;を&nbsp;Blender&nbsp;で表示したところ&nbsp;<span className="inline-code">8161</span>&nbsp;ポリゴンだった
        <br />
        ちょうどいい塩梅かなと感じたため、今回はこれを目指してテクスチャを貼ってアニメーションつけてロードしたら約2秒！を目指す
        <br />
        このモデルを徹底的に研究してこだわっているところと妥協したところを確認しながら自分のモデルに適応したのが今回の結果である
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190827
