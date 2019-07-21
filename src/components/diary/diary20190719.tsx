//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190719: React.FC = () => {
  return (
    <div className='diary'>
        <h1>アイコンをつけて視認性を向上する</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/5'><span className='inline-code'>TypeScript</span></Link>
        <br />
        <h2>対象者</h2>
        
        ここまでサイトの生い立ちを見てきてくださった方々
        <br />
        <h2>結果</h2>
        
        <a href={"https://github.com/shimomuh/shimomuh.github.io/commit/05c7e8ae1e11488359d72d692f8c4ac4cb8a8121"}>→成果</a>
        <br />
        サイトTOPの記事のタイトルだけではわからないのでタグを表現する方法としてアイコンを採用した
        <br />
        <h2>工夫点</h2>
        
        配慮した点は以下の通り
        <br />
        <ul><li>カレンダーTOP&nbsp;では文字だとタイトルが見づらくなったり一目でどのタグと紐づいているのかがわからないためアイコンを採用した</li>
        <li>記事詳細ではあえて文字だけにすることで、視点がタグに移らないようにして記事本来の価値を最大限に引き出すためにあえてアイコンを表示しない</li>
        <li>タグ一覧ではタグ名とアイコンの紐付きを認知してもらうためにアイコンとタグ名を並べた</li></ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190719
