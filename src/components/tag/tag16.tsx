//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag16: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[16]}`} alt="" />
        <h1>「リギング」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-30'>
            <span className='tag__article--date'>2019-07-30</span>
            <span className='tag__article--title'>アイコンを作ろう</span>
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

export default Tag16
