//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190721: React.FC = () => {
  return (
    <div className='diary'>
      <h1>Google&nbsp;Analytics&nbsp;のタグを埋め込んで訪問者を分析しよう</h1>タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/14'><span className='inline-code'>分析</span></Link><br /><h2>対象者</h2>Google&nbsp;Analytics&nbsp;を知らない、忘れたという人たち<br /><h2>結果</h2>最終的に&nbsp;html&nbsp;に以下のようなタグを埋め込むのがゴール<br /><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/8d688a0212a7c1a991adb4af45c56bc6d64aa668"}>→成果</a><br /><h2>過程</h2>この記事時点での最新なので、見た人によっては最新じゃないかもめ&nbsp;&#x1f647;<br />Google&nbsp;でアカウントは作っている前提として<br /><a href={"https://analytics.google.com/analytics/web/"}>Google&nbsp;Analytics</a>&nbsp;にアクセスすると、ログインを求められてログインするとリダイレクトで&nbsp;Analytics&nbsp;のトップに飛ばされる<br />&nbsp;<br />アカウントを作れ！と言われるので（これは分析用のアカウントなので&nbsp;Google&nbsp;アカウントとは別）<br />以下のように適当に埋めて、最後に&nbsp;[トラッキング&nbsp;ID&nbsp;を取得]&nbsp;のボタンをクリック<br /><img src="/static/diary/2019-07-21/analytics.png" alt="" /><br />その後に利用規約が出てくるので&nbsp;<s>読み飛ばして</s>&nbsp;内容を確認しながらチェックを入れていく<br />この当時は&nbsp;GDPR&nbsp;が出てそういえば1年前にそんなの適応されたなーとか思い出した<br />&nbsp;<br />あとは以下のトラッキングコードに書かれたコードをコピペで&nbsp;&#x1f44c;<br /><img src="/static/diary/2019-07-21/tracking-code.png" alt="" /><br /><h2>おまけ</h2>おまけだけど重要な話<br />以下の有効期限を変更しておかないとユーザのデータやイベントのデータは保持されず、破棄されちゃうので注意！<br /><img src="/static/diary/2019-07-21/expiration.png" alt="" /><br />気にしない人はそのままで&nbsp;&#x1f44c;
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190721
