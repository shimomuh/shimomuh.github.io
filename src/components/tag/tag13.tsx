//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag13: React.FC = () => {
  return (
    <div className='tag'>
      <h1>「Redux」がついている日記一覧</h1>
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
