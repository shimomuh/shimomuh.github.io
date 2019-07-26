//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';
import 'components/syntaxHighlight.scss';

const Diary20190702: React.FC = () => {
  return (
    <div className='diary'>
        <h1>npm&nbsp;run&nbsp;build&nbsp;によってできる不要ファイルの削除</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        npm&nbsp;run&nbsp;build&nbsp;で不要ファイルが出るがたまりすぎると困るので対応したい人
        <br />
        <h2>背景</h2>
        
        npm&nbsp;run&nbsp;build&nbsp;のたびに削除されないファイルが溜まってきて定期的に&nbsp;rm&nbsp;してたけど、面倒なのでスクリプトとして書きたかった
        <br />
        <h2>結果</h2>
        
        <span className="inline-code">bin/remove-old-file.rb</span>&nbsp;に書いた
        <br />
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/f192cd3c07421b48fea622633da4fe092a71c40b">→成果</a>
        <br />
        愚直にパターンマッチングして対象のものを消すという処理
        <br />
        もっとマシにかけると思う&nbsp;orz
        <br />
        今はこれで辛抱。
        <br />
        もしかしたら&nbsp;tsconfig.json&nbsp;とかにいいオプションがあるのかもしれないが今はこれで行く方向で。
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190702
