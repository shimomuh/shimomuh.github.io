//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190829: React.FC = () => {
  return (
    <div className='diary'>
        <h1>頭をモデリングし直す</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>
        <br />
        <h2>対象者</h2>
        
        <ul><li>モデリングで悩んでる方</li>
        <li>一歩踏み出せない方</li>
        </ul>
        向け
        <br />
        <h2>結論</h2>
        
        今回は髪
        <br />
        <img src="/static/diary/2019-08-29/hair.gif" alt="" />
        <br />
        &nbsp;
        <br />
        ボーンのことは一旦考えずに作ったが、ゆらす想定は前髪とせいぜい左の髪のみ
        <br />
        今回一番時間がかかったのは、どう構築したらよいかわからなかったこと
        <br />
        &nbsp;
        <br />
        イテレーションを早く回して結果としてうまくいかなかったとしてもやり直せる時間を確保する意味でも早く形を作ろうと思った
        <br />
        毛を付け根から生やす方法も検討したが、それだと首筋周りの髪の毛の表現がうまくいかなさそうだったのとポリゴン数が増えすぎそうなので一旦こうした
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190829
