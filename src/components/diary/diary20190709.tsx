//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190709: React.FC = () => {
  return (
    <div className='diary'>
      <h1>Markdown&nbsp;から&nbsp;TypeScript&nbsp;に書き換えるコンバーターのリファクタ</h1>タグ&nbsp;<span className="inline-code">このサイトの生い立ち</span>&nbsp;<span className="inline-code">Ruby</span>&nbsp;<span className="inline-code">設計</span><br /><h2>対象者</h2><ul><li>DDD&nbsp;の実践をしたい</li><li>DDD&nbsp;を実践している</li><li>リファクタリングを考えている</li></ul>そんな人<br /><h2>背景</h2>bin/make-tsx.rb&nbsp;というファイルですでに&nbsp;Markdown&nbsp;to&nbsp;TypeScript&nbsp;なコンバーターは&nbsp;<a href={"http://localhost:3000/2019-06-29"}>【暫定版】ruby&nbsp;で&nbsp;React&nbsp;に載せるための&nbsp;Markdown&nbsp;コンバーターを実装する</a>&nbsp;で実践し改善してきたのだが、テストも全くないのでそろそろ拡張が限界にきている（品質が保証できなくなっている）<br />&nbsp;<br />そこで、今回はクラスに分けて責務を分散しあとあとテストしやすくかつ品質を担保しやすくすることを目的にリファクタする<br /><h2>結果</h2><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/d2c49b293127bcb8f51b9dd4d03a03ab934bf5ad"}>→成果</a><br /><h2>過程</h2>今の&nbsp;<a href={"https://github.com/shimomuh/shimomuh.github.io/blob/feature/2019-07-08/bin/make-tsx.rb"}>make-tsx.rb</a>&nbsp;を紐解いて設計を考える<br />ちなみに、設計は&nbsp;DDD&nbsp;に基づく<br />DDD&nbsp;については&nbsp;<a href={"https://codezine.jp/article/detail/9744"}>実践DDD本&nbsp;第2章「ドメイン」「サブドメイン」「境界づけられたコンテキスト」を読み解く</a>&nbsp;あたりを参考にすべし<br />個人的には上記でも紹介されている&nbsp;[実践ドメイン駆動設計&nbsp;-&nbsp;ヴァーン・ヴァーノン&nbsp;&nbsp;(著)&nbsp;高木&nbsp;正弘&nbsp;(翻訳)](https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88-Object-Oriented-SELECTION-%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%B3%E3%83%BB%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%8E%E3%83%B3/dp/479813161X)&nbsp;はぜひ一読してほしい<br />&nbsp;<br />ともあれ設計した結果は以下の通り<br /><ul><li>1記事を文字列配列として渡し</li><li>文字列配列に対して複数行にまたがるマークダウン記法処理をする</li><li>文字列に対して1行に関するマークダウン処理をする</li><li>文字をエスケープする</li></ul>このように粒度を下げていくことを意識した<br />処理の大枠は以下のようなイメージ<br /><p className="code"><code><span className="code__with-order">class&nbsp;StringArrayParser</span><br /><span className="code__with-order">&nbsp;&nbsp;def&nbsp;self.parse(str_array)</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;string_array.each&nbsp;do&nbsp;|str|</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;multi_line_parse&nbsp;str</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StringParser.parse&nbsp;str</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br /><span className="code__with-order">&nbsp;&nbsp;end</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">&nbsp;&nbsp;class&nbsp;StringParser</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;self.parse(str)</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;escape&nbsp;str</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one_line_parse&nbsp;str</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br /><span className="code__with-order">&nbsp;&nbsp;end</span><br /><span className="code__with-order">end</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">StringArrayParser.parse&nbsp;articles</span><br /></code></p><br />明日はテンプレートを読み込むところを実装しようかな
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190709
