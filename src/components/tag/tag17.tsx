//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag17: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[17]}`} alt="" />
        <h1>「理想のモデルを作りたい」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-08-15'>
            <span className='tag__article--date'>2019-08-15</span>
            <span className='tag__article--title'>指の動きを確認してみる</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-08-13'>
            <span className='tag__article--date'>2019-08-13</span>
            <span className='tag__article--title'>関節部のポリゴン数を減らした時にどうなるか実験する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-08-01'>
            <span className='tag__article--date'>2019-08-01</span>
            <span className='tag__article--title'>モデルに自動のウェイトペイントを付与した際の挙動を確かめる</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-31'>
            <span className='tag__article--date'>2019-07-31</span>
            <span className='tag__article--title'>ベースのモデルについて</span>
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

export default Tag17
