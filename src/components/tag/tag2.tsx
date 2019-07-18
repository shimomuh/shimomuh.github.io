//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag2: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[2]}`} alt="" />
        <h1>「Javascript」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-05'>
            <span className='tag__article--date'>2019-07-05</span>
            <span className='tag__article--title'>React on Github Pages でも 404 を返さずに遷移したい！</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-26'>
            <span className='tag__article--date'>2019-06-26</span>
            <span className='tag__article--title'>Javascript でカレンダーを作ろう</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-25'>
            <span className='tag__article--date'>2019-06-25</span>
            <span className='tag__article--title'>祝 Github Pages 設立</span>
          </Link>
        </li>
      </ul>
      <br /><br />
      <div>
        <Link className='tag__back' to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag2
