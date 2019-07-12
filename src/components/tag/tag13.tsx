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
      <h1>Redux</h1>
      <ul>
        <li><span className='date'>2019-07-06</span><span className='title'><Link to='/diary/2019-07-06'>Redux を使って URL が変わらない VirtualDOM 特有の遷移 (厳密には再描画) を実現する</Link></span></li>
      </ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag13
