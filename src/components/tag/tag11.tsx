//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag11: React.FC = () => {
  return (
    <div className='tag'>
      <h1>デザイン</h1>
      <ul>
        <li><span className='date'>2019-06-30</span><span className='title'><Link to='/diary/2019-06-30'>コードブロックを counter プロパティを使ってオシャレにしてみた</Link></span></li>
        <li><span className='date'>2019-07-08</span><span className='title'><Link to='/diary/2019-07-08'>ハイブリットレスポンシブ（レスポンシブ + メディアクエリ）デザイン</Link></span></li>
      </ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag11
