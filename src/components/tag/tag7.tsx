//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag7: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[7]}`} alt="" />
        <h1>「Ruby」がついている日記一覧</h1>
      </div>
      <ul>
        <li className='tag__article'>
          <Link to='/diary/2019-07-26'>
            <span className='tag__article--date'>2019-07-26</span>
            <span className='tag__article--title'>エスケープ文字に対応してみる</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-25'>
            <span className='tag__article--date'>2019-07-25</span>
            <span className='tag__article--title'>マークダウンコンバーターロジックを見直す</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-24'>
            <span className='tag__article--date'>2019-07-24</span>
            <span className='tag__article--title'>プロジェクトの途中から膨大なコードの品質を保証したくて rspec を導入する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-22'>
            <span className='tag__article--date'>2019-07-22</span>
            <span className='tag__article--title'>rubocop を使って ruby コードに秩序を！</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-20'>
            <span className='tag__article--date'>2019-07-20</span>
            <span className='tag__article--title'>create-react-app で作った JS ファイルで静的ファイルを参照したい</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-19'>
            <span className='tag__article--date'>2019-07-19</span>
            <span className='tag__article--title'>アイコンをつけて視認性を向上する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-18'>
            <span className='tag__article--date'>2019-07-18</span>
            <span className='tag__article--title'>マークダウンの Table に対応する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-15'>
            <span className='tag__article--date'>2019-07-15</span>
            <span className='tag__article--title'>タグをリンクにしてタグリンク集を作る</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-13'>
            <span className='tag__article--date'>2019-07-13</span>
            <span className='tag__article--title'>Ruby で to_json 時にインデントや改行したいとき</span>
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
          <Link to='/diary/2019-07-02'>
            <span className='tag__article--date'>2019-07-02</span>
            <span className='tag__article--title'>npm run build によってできる不要ファイルの削除</span>
          </Link>
        </li>
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

export default Tag7
