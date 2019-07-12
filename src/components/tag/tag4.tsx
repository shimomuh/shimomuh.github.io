//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag4: React.FC = () => {
  return (
    <div className='tag'>
      <h1>React</h1>
      <ul>
        <li><span className='date'>2019-06-25</span><span className='title'><Link to='/diary/2019-06-25'>祝 Github Pages 設立</Link></span></li>
        <li><span className='date'>2019-06-26</span><span className='title'><Link to='/diary/2019-06-26'>Javascript でカレンダーを作ろう</Link></span></li>
        <li><span className='date'>2019-06-27</span><span className='title'><Link to='/diary/2019-06-27'>create-react-app でも scss が使いたい！</Link></span></li>
        <li><span className='date'>2019-06-28</span><span className='title'><Link to='/diary/2019-06-28'>react-router-dom でルーティングする</Link></span></li>
        <li><span className='date'>2019-07-01</span><span className='title'><Link to='/diary/2019-07-01'>React + Typescript の Stateless Function で props を利用する</Link></span></li>
        <li><span className='date'>2019-07-05</span><span className='title'><Link to='/diary/2019-07-05'>React on Github Pages でも 404 を返さずに遷移したい！</Link></span></li>
        <li><span className='date'>2019-07-06</span><span className='title'><Link to='/diary/2019-07-06'>Redux を使って URL が変わらない VirtualDOM 特有の遷移 (厳密には再描画) を実現する</Link></span></li>
        <li><span className='date'>2019-07-07</span><span className='title'><Link to='/diary/2019-07-07'>Json ファイルを React で読み取る</Link></span></li>
      </ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag4
