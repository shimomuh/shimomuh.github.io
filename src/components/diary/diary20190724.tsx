//
// このファイルは自動生成です。
// 変更したい場合は ruby_scripts/domain/dairy_converter.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary20190724: React.FC = () => {
  return (
    <div className='diary'>
        <h1>プロジェクトの途中から膨大なコードの品質を保証したくて&nbsp;rspec&nbsp;を導入する</h1>
        
        タグ&nbsp;<Link to='/tag/7'><span className='inline-code'>Ruby</span></Link>&nbsp;<Link to='/tag/12'><span className='inline-code'>設計</span></Link>
        <br />
        <h2>対象者</h2>
        
        プロジェクト始まってるけど&nbsp;rspec&nbsp;を入れようという人
        <br />
        <h2>背景</h2>
        
        TDD&nbsp;とかやる人間なので、テストなしの品質保証は正直やめたかった
        <br />
        考慮漏れはまだしも考慮してたかどうかを保証したかったので導入した
        <br />
        <s>あと、正規表現苦手なので</s>
        <br />
        &nbsp;
        <br />
        加えてタイミング的なこともあった
        <br />
        もちろん最初から入れておくのがベストだが、スタートアップとかだとなおのこと、予算もなければ工数もヒューマンリソースもないなんてことはザルだと思う
        <br />
        僕もまずは完成を優先させたかったので今まで書いてこなかったが、少し落ち着いたのと、ちょうど帰省中の新幹線の中でネットワークなしにできそうなことを考えて今回のテスト実施に至った
        <br />
        <h2>結果</h2>
        
        <a href="https://github.com/shimomuh/shimomuh.github.io/commit/8a2d40362a68a0b68d606bc5810df892529b4c21">→成果</a>
        <br />
        ネットワークほぼない状態で書くことを書いたので新しい知識はなかったので共有することは少ないが、テストをどうやったかという話をしよう
        <br />
        &nbsp;
        <br />
        まずテストをやるからには網羅的にやる必要がある
        <br />
        むしろ網羅的にやらず不安なところだけやるというのも手だが、個人的には全部やったほうがいいと思っている
        <br />
        とはいえ、全部は無理なことも多いだろう
        <br />
        そこで今回は&nbsp;pending&nbsp;を使って、機能を網羅的にテストするようにした
        <br />
        <ul><li>考慮しているものは全て書いたはずなので、考慮漏れがあるとすればテストケースがないはずだ</li>
        <li>pending&nbsp;を使うことで理想はこの機能を対応したいが、現状は乖離しているということを自明にした</li>
        <li>同じテストは省く意味でコメントを多く残し、他でやっているテストはそっちで担保すると明示することで書く量を減らした</li>
        </ul>
        成果の一部を抜粋すると以下のような感じだ
        <br />
        <p className="code ruby"><code>
        <span className="code__with-order">RSpec.describe&nbsp;ClassA&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;describe&nbsp;&#39;.methodA&#39;&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;網羅的に書き出す</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;context&nbsp;&#39;M&nbsp;のとき&#39;&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;methodA&nbsp;は&nbsp;m&nbsp;を返す&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;context&nbsp;&#39;N&nbsp;のとき&#39;&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;methodA&nbsp;は例外を返す&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;context&nbsp;&#39;O&nbsp;のとき&#39;&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;未実装の場合は理想と現実の&nbsp;gap&nbsp;を書く</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pending&nbsp;&#39;本当はこうしたい（けど今はこんな感じで&nbsp;fail&nbsp;する）&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">&nbsp;&nbsp;end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;describe&nbsp;&#39;.methodB&#39;&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;自明なものはこういう理由で割愛してると書いてあげる</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;it&nbsp;&#39;このテストは内部で&nbsp;ClassB&nbsp;の&nbsp;methodC&nbsp;を&nbsp;delegate&nbsp;しているだけなので割愛&#39;</span><br />
        <span className="code__with-order">&nbsp;&nbsp;end</span><br />
        <span className="code__with-order"><br /></span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;このようにコメントだけ残すのもあり</span><br />
        <span className="code__with-order">&nbsp;&nbsp;#&nbsp;この場合はテストに出てこないので可能な限り理由が表示される形でテストしておくほうがよい</span><br />
        <span className="code__with-order">&nbsp;&nbsp;describe&nbsp;&#39;.methodC&#39;&nbsp;do</span><br />
        <span className="code__with-order">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;このクラスは内部で&nbsp;ClassC&nbsp;の&nbsp;methodA&nbsp;を&nbsp;delegate&nbsp;しているので割愛</span><br />
        <span className="code__with-order">&nbsp;&nbsp;end</span><br />
        <span className="code__with-order">end</span><br />
        </code></p>
        
        あとは&nbsp;<span className="inline-code">bundle&nbsp;exec&nbsp;rspec&nbsp;--format&nbsp;documentation</span>&nbsp;してあげれば、どういう理由で&nbsp;PENDING&nbsp;なのか、&nbsp;PASS&nbsp;しているのかがわかるのでおすすめ
      <br /><br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary20190724
