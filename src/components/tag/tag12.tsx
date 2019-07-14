//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag12: React.FC = () => {
  return (
    <div className='tag'>
      <h1>設計</h1>
      <ul>
        <li><span className='tag__date'>2019-07-03</span><span className='tag__title'><Link to='/diary/2019-07-03'>タグを楽に仕込む方法を今のうちに考える</Link></span></li>
        <li><span className='tag__date'>2019-07-07</span><span className='tag__title'><Link to='/diary/2019-07-07'>Json ファイルを React で読み取る</Link></span></li>
        <li><span className='tag__date'>2019-07-09</span><span className='tag__title'><Link to='/diary/2019-07-09'>Markdown から TypeScript に書き換えるコンバーターのリファクタ</Link></span></li>
        <li><span className='tag__date'>2019-07-10</span><span className='tag__title'><Link to='/diary/2019-07-10'>テンプレートから TypeScript ファイルを生成するクラス</Link></span></li>
        <li><span className='tag__date'>2019-07-11</span><span className='tag__title'><Link to='/diary/2019-07-11'>yield を使ってモデルクラスは標準出力の依存を避ける</Link></span></li>
        <li><span className='tag__date'>2019-07-12</span><span className='tag__title'><Link to='/diary/2019-07-12'>タグを分類するための JSON 生成とエンドポイントの修正</Link></span></li>
      </ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag12
