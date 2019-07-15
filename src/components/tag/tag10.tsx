//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag10: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[10]}`} alt="" />
        <h1>「UI/UX」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-16'>
            <span className='tag__article--date'>2019-07-16</span>
            <span className='tag__article--title'>Google Calendar っぽくシンプルなデザインを適応する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-08'>
            <span className='tag__article--date'>2019-07-08</span>
            <span className='tag__article--title'>ハイブリットレスポンシブ（レスポンシブ + メディアクエリ）デザイン</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-06'>
            <span className='tag__article--date'>2019-07-06</span>
            <span className='tag__article--title'>Redux を使って URL が変わらない VirtualDOM 特有の遷移 (厳密には再描画) を実現する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-03'>
            <span className='tag__article--date'>2019-07-03</span>
            <span className='tag__article--title'>タグを楽に仕込む方法を今のうちに考える</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-30'>
            <span className='tag__article--date'>2019-06-30</span>
            <span className='tag__article--title'>コードブロックを counter プロパティを使ってオシャレにしてみた</span>
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

export default Tag10
