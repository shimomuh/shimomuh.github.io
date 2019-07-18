//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag5: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[5]}`} alt="" />
        <h1>「TypeScript」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-19'>
            <span className='tag__article--date'>2019-07-19</span>
            <span className='tag__article--title'>アイコンをつけて視認性を向上する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-07'>
            <span className='tag__article--date'>2019-07-07</span>
            <span className='tag__article--title'>Json ファイルを React で読み取る</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-01'>
            <span className='tag__article--date'>2019-07-01</span>
            <span className='tag__article--title'>React + Typescript の Stateless Function で props を利用する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-28'>
            <span className='tag__article--date'>2019-06-28</span>
            <span className='tag__article--title'>react-router-dom でルーティングする</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-27'>
            <span className='tag__article--date'>2019-06-27</span>
            <span className='tag__article--title'>create-react-app でも scss が使いたい！</span>
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

export default Tag5
