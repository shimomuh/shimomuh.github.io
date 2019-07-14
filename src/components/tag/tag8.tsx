//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag8: React.FC = () => {
  return (
    <div className='tag'>
      <h1>「Shell」がついている日記一覧</h1>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-06-29'>
            <span className='tag__article--date'>2019-06-29</span>
            <span className='tag__article--title'>【暫定版】ruby で React に載せるための Markdown コンバーターを実装する</span>
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

export default Tag8
