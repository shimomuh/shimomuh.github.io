//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190715: React.FC = () => {
  return (
    <div className='diary'>
        <h1>タグをリンクにしてタグリンク集を作る</h1>
        
        タグ&nbsp;<Link to='/tag/1'><span className='inline-code'>このサイトの生い立ち</span></Link>&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>
        <br />
        <h2>対象者</h2>
        
        このサイトの生い立ちをここまでみてくださってるみなさま
        <br />
        <h2>背景</h2>
        
        今までの知識の複合でこのマークダウン記事3段目のタグを自動で抽出して記録し、リンク集として機能するようにした
        <br />
        <h2>結果</h2>
        
        <a href={"https://github.com/shimomuh/shimomuh.github.io/commit/8ab2f6bd3a654ed4fbaf176049d4480613fb9ef2"}>→成果</a>
        <br />
        ほぼ今までの作業の複合だけで作成した
        <br />
        もし自動抽出に興味がある方は参考にしてみてもよいかもしれない
        <br />
        次はサイトデザインをしていこうと思ふ
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190715
