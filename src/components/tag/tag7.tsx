//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';

const Tag7: React.FC = () => {
  return (
    <div className='tag'>
      <h1>Ruby</h1>
      <ul>
        <li><span className='tag__date'>2019-06-29</span><span className='tag__title'><Link to='/diary/2019-06-29'>【暫定版】ruby で React に載せるための Markdown コンバーターを実装する</Link></span></li>
        <li><span className='tag__date'>2019-07-02</span><span className='tag__title'><Link to='/diary/2019-07-02'>npm run build によってできる不要ファイルの削除</Link></span></li>
        <li><span className='tag__date'>2019-07-07</span><span className='tag__title'><Link to='/diary/2019-07-07'>Json ファイルを React で読み取る</Link></span></li>
        <li><span className='tag__date'>2019-07-09</span><span className='tag__title'><Link to='/diary/2019-07-09'>Markdown から TypeScript に書き換えるコンバーターのリファクタ</Link></span></li>
        <li><span className='tag__date'>2019-07-10</span><span className='tag__title'><Link to='/diary/2019-07-10'>テンプレートから TypeScript ファイルを生成するクラス</Link></span></li>
        <li><span className='tag__date'>2019-07-11</span><span className='tag__title'><Link to='/diary/2019-07-11'>yield を使ってモデルクラスは標準出力の依存を避ける</Link></span></li>
        <li><span className='tag__date'>2019-07-12</span><span className='tag__title'><Link to='/diary/2019-07-12'>タグを分類するための JSON 生成とエンドポイントの修正</Link></span></li>
        <li><span className='tag__date'>2019-07-13</span><span className='tag__title'><Link to='/diary/2019-07-13'>Ruby で to_json 時にインデントや改行したいとき</Link></span></li>
        <li><span className='tag__date'>2019-07-15</span><span className='tag__title'><Link to='/diary/2019-07-15'>タグをリンクにしてタグリンク集を作る</Link></span></li>
      </ul>
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Tag7
