//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag13: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[13]}`} alt="" />
        <h1>「Redux」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-06'>
            <span className='tag__article--date'>2019-07-06</span>
            <span className='tag__article--title'>Redux を使って URL が変わらない VirtualDOM 特有の遷移 (厳密には再描画) を実現する</span>
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

export default Tag13
