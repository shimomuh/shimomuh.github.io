//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag2: React.FC = () => {
  return (
    <div className='tag'>
      <h1>Javascript</h1>
      <ul>
        <li><span className='tag__date'>2019-06-25</span><span className='tag__title'><Link to='/diary/2019-06-25'>祝 Github Pages 設立</Link></span></li>
        <li><span className='tag__date'>2019-06-26</span><span className='tag__title'><Link to='/diary/2019-06-26'>Javascript でカレンダーを作ろう</Link></span></li>
        <li><span className='tag__date'>2019-07-05</span><span className='tag__title'><Link to='/diary/2019-07-05'>React on Github Pages でも 404 を返さずに遷移したい！</Link></span></li>
      </ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag2
