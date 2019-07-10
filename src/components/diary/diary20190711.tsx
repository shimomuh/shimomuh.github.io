//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190711: React.FC = () => {
  return (
    <div className='diary'>
      <h1>yield&nbsp;を使ってモデルクラスは標準出力の依存を避ける</h1>タグ&nbsp;<span className="inline-code">このサイトの生い立ち</span>&nbsp;<span className="inline-code">Ruby</span>&nbsp;<span className="inline-code">設計</span><br /><h2>対象者</h2><ul><li>yield&nbsp;を使ったことはあるけどいまいち使い所をイメージできない</li><li>yield&nbsp;を知らない</li></ul>そんな人<br /><h2>背景</h2>モデルクラスが&nbsp;rake&nbsp;task&nbsp;でもないのに標準出力に依存しているのが気持ち悪かったので分離した<br /><h2>成果</h2><a href={"https://github.com/shimomuh/shimomuh.github.io/commit/4c87dbb180a1c008e266b77a0bb858d4f7278c15"}>→成果</a><br />yield&nbsp;周りについてはググってもらうとして、以下のようにすることでモデルのテストで標準出力を無視できるよという話<br />もし&nbsp;circleci&nbsp;や&nbsp;jenkins&nbsp;で&nbsp;job&nbsp;を実行して&nbsp;test&nbsp;をしている人なんかは標準出力が出ないように以下で工夫してみてもいいかもしれない<br /><p className="code"><code><span className="code__with-order">class&nbsp;Model</span><br /><span className="code__with-order">&nbsp;&nbsp;def&nbsp;initialize</span><br /><span className="code__with-order">&nbsp;&nbsp;end</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">&nbsp;&nbsp;def&nbsp;exec</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;...(なんか処理)...</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;puts&nbsp;&#39;exec!&#39;</span><br /><span className="code__with-order">&nbsp;&nbsp;end</span><br /><span className="code__with-order">end</span><br /></code></p><br />これをテストすると<br /><p className="code"><code><span className="code__with-order">bundle&nbsp;exec&nbsp;rspec&nbsp;model_spec.rb</span><br /><span className="code__with-order">exec!</span><br /><span className="code__with-order">..</span><br /></code></p><br />exec!&nbsp;が出力されてダサいし、もし&nbsp;api&nbsp;なんかで使うことがあったら変にログに記録されてしまうかもしれない<br />そこで<br /><p className="code"><code><span className="code__with-order">class&nbsp;Model</span><br /><span className="code__with-order">&nbsp;&nbsp;def&nbsp;initialize</span><br /><span className="code__with-order">&nbsp;&nbsp;end</span><br /><span className="code__with-order"></span><br /><span className="code__with-order">&nbsp;&nbsp;def&nbsp;exec</span><br /><span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;yield&nbsp;&#39;exec!&#39;&nbsp;if&nbsp;given_block?</span><br /><span className="code__with-order">&nbsp;&nbsp;end</span><br /><span className="code__with-order">end</span><br /></code></p><br />こうすることで、、テスト時や&nbsp;api&nbsp;利用などの標準出力をさけたいときは<br /><p className="code"><code><span className="code__with-order">Model.new.exec</span><br /></code></p><br />rake&nbsp;task&nbsp;のように実行を標準結果に出したいときは<br /><p className="code"><code><span className="code__with-order">Model.new.exec&nbsp;&#123;&nbsp;|message|&nbsp;puts&nbsp;message&nbsp;&#125;</span><br /></code></p><br />とすればよい<br />このメリットは標準出力に限らず内部処理の途中経過を外に出せることにあるので<br /><p className="code"><code><span className="code__with-order">Model.new.exec&nbsp;&#123;&nbsp;|m|&nbsp;STDERR.puts&nbsp;m&nbsp;&#125;</span><br /><span className="code__with-order">Model.new.exec&nbsp;&#123;&nbsp;|m|&nbsp;OtherModel.new(m)&nbsp;&#125;</span><br /></code></p><br />のようにすることで標準エラー出力に吐いたり処理を他に渡せるのも魅力である
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190711