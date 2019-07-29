//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag12: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[12]}`} alt="" />
        <h1>「設計」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-30'>
            <span className='tag__article--date'>2019-07-30</span>
            <span className='tag__article--title'>アイコンを作ろう</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-24'>
            <span className='tag__article--date'>2019-07-24</span>
            <span className='tag__article--title'>プロジェクトの途中から膨大なコードの品質を保証したくて rspec を導入する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-16'>
            <span className='tag__article--date'>2019-07-16</span>
            <span className='tag__article--title'>Google Calendar っぽくシンプルなデザインを適応する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-12'>
            <span className='tag__article--date'>2019-07-12</span>
            <span className='tag__article--title'>タグを分類するための JSON 生成とエンドポイントの修正</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-11'>
            <span className='tag__article--date'>2019-07-11</span>
            <span className='tag__article--title'>yield を使ってモデルクラスは標準出力の依存を避ける</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-10'>
            <span className='tag__article--date'>2019-07-10</span>
            <span className='tag__article--title'>テンプレートから TypeScript ファイルを生成するクラス</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-09'>
            <span className='tag__article--date'>2019-07-09</span>
            <span className='tag__article--title'>Markdown から TypeScript に書き換えるコンバーターのリファクタ</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-07'>
            <span className='tag__article--date'>2019-07-07</span>
            <span className='tag__article--title'>Json ファイルを React で読み取る</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-03'>
            <span className='tag__article--date'>2019-07-03</span>
            <span className='tag__article--title'>タグを楽に仕込む方法を今のうちに考える</span>
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

export default Tag12
