//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190823: React.FC = () => {
  return (
    <div className='diary'>
        <h1>手をモデリングする</h1>
        
        タグ&nbsp;<Link to='/tag/17'><span className='inline-code'>理想のモデルを作りたい</span></Link>&nbsp;<Link to='/tag/18'><span className='inline-code'>Blender</span></Link>&nbsp;<Link to='/tag/15'><span className='inline-code'>モデリング</span></Link>
        <br />
        <h2>対象者</h2>
        
        手をゼロから作りたい人向け
        <br />
        <h2>背景</h2>
        
        手のモデリング・リギングをするにあたり構造から理解して一から作ってみたかったので車輪の再開発をしてみたかった
        <br />
        <h2>結論</h2>
        
        <a href="https://github.com/shimomuh/model-base/commit/6574b99a232ce1d19e73b0796ddab1840c91793c">→成果</a>
        <br />
        &nbsp;
        <br />
        <table><tr><th>上から</th><th>カメラから</th></tr>
        
        <tr><td><img src="/static/diary/2019-08-23/result-top-angle.png" alt="" /></td><td><img src="/static/diary/2019-08-23/result-camera-angle.png" alt="" /></td></tr>
        </table>
        &nbsp;
        <br />
        <h2>過程</h2>
        
        今回はおおまかに分けて6工程くらい
        <br />
        &nbsp;
        <br />
        <table><tr><th>工程</th><th>画像</th></tr>
        
        <tr><td>1.あたりをつける下絵を用意する</td><td><img src="/static/diary/2019-08-23/1st.png" alt="" /></td></tr>
        <tr><td>2.下絵を元にモデルをつける</td><td><img src="/static/diary/2019-08-23/2nd.png" alt="" /></td></tr>
        <tr><td>3.水かきをつけつつ指の付け根の関節部分を観察しながら作る</td><td><img src="/static/diary/2019-08-23/3rd.png" alt="" /></td></tr>
        <tr><td>4.親指を実物を観察しながらツイストする</td><td><img src="/static/diary/2019-08-23/4th.png" alt="" /></td></tr>
        <tr><td>5.親指の関節を詳細化しつつ丸みもつける</td><td><img src="/static/diary/2019-08-23/5th.png" alt="" /></td></tr>
        <tr><td>6.他の指も親指と同様にする</td><td><img src="/static/diary/2019-08-23/6th.png" alt="" /></td></tr>
        </table>
        &nbsp;
        <br />
        関節の詳細化については以前の記事を参考にしてほしい
        <br />
        最小限で最大限の効果が得られるようにポリゴンを分けたつもりである
        <br />
        &nbsp;
        <br />
        今後も細部を修正する余地は十分あるが、それはリギングと共に修正していくこととする
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190823
