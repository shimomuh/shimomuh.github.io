//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/tag.scss';
import tagIcon from 'config/tag_icon.json';

const Tag1: React.FC = () => {
  return (
    <div className='tag'>
      <div className='tag__header'>
        <img src={`/static/tag/${tagIcon[1]}`} alt="" />
        <h1>「このサイトの生い立ち」がついている日記一覧</h1>
      </div>
      <ul>
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
          <Link to='/diary/2019-07-17'>
            <span className='tag__article--date'>2019-07-17</span>
            <span className='tag__article--title'>react-router で遷移したときにスクロール位置を Top に戻す(React 16.8 and above 版)</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-16'>
            <span className='tag__article--date'>2019-07-16</span>
            <span className='tag__article--title'>Google Calendar っぽくシンプルなデザインを適応する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-15'>
            <span className='tag__article--date'>2019-07-15</span>
            <span className='tag__article--title'>タグをリンクにしてタグリンク集を作る</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-14'>
            <span className='tag__article--date'>2019-07-14</span>
            <span className='tag__article--title'>Github からセキュリティ脆弱性の通知がきたとき</span>
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
          <Link to='/diary/2019-07-08'>
            <span className='tag__article--date'>2019-07-08</span>
            <span className='tag__article--title'>ハイブリットレスポンシブ（レスポンシブ + メディアクエリ）デザイン</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-07'>
            <span className='tag__article--date'>2019-07-07</span>
            <span className='tag__article--title'>Json ファイルを React で読み取る</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-06'>
            <span className='tag__article--date'>2019-07-06</span>
            <span className='tag__article--title'>Redux を使って URL が変わらない VirtualDOM 特有の遷移 (厳密には再描画) を実現する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-05'>
            <span className='tag__article--date'>2019-07-05</span>
            <span className='tag__article--title'>React on Github Pages でも 404 を返さずに遷移したい！</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-04'>
            <span className='tag__article--date'>2019-07-04</span>
            <span className='tag__article--title'>CSS ハックを使って以前実装した `&lt;code&gt;` タグのデザイン崩れに対応する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-03'>
            <span className='tag__article--date'>2019-07-03</span>
            <span className='tag__article--title'>タグを楽に仕込む方法を今のうちに考える</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-02'>
            <span className='tag__article--date'>2019-07-02</span>
            <span className='tag__article--title'>npm run build によってできる不要ファイルの削除</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-07-01'>
            <span className='tag__article--date'>2019-07-01</span>
            <span className='tag__article--title'>React + Typescript の Stateless Function で props を利用する</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-30'>
            <span className='tag__article--date'>2019-06-30</span>
            <span className='tag__article--title'>コードブロックを counter プロパティを使ってオシャレにしてみた</span>
          </Link>
        </li>
        <li className='tag__article'>
          <Link to='/diary/2019-06-29'>
            <span className='tag__article--date'>2019-06-29</span>
            <span className='tag__article--title'>【暫定版】ruby で React に載せるための Markdown コンバーターを実装する</span>
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

export default Tag1
