# 【暫定版】ruby で React に載せるための Markdown コンバーターを実装する

タグ `このサイトの生い立ち` `Ruby` `Shell`

## 対象者

markdown (.md) ファイルを react で表示させたいなぁと考えていて自分で ruby かけるよ！って方

結構絞ってしまったかもしれない...

## 背景

markdown で日記書いてるんだから、 xxx.github.io の上で自分のサイトっぽくみせたいよね！という発想から

せっかく `Link` 使っているのに github の markdown reviewer 使うのが癪だったというのもある

## 結果

`bin/make-tsx` という、めちゃくちゃ汚いコンバーターができた

たぶんまだバグあるかもしれないけど、まだ気づいてない

でも基盤を作ってしまえばあとは bugfix なりリファクタして汎用的に作ったりするだけなので後悔はしていない

[→成果](https://github.com/shimomuh/shimomuh.github.io/pull/5/commits/b8218234437c1d3da57ace0b253deb8318cc1740)

## 過程

はじめ shell で書いてたけど、 ruby で import する方が圧倒的に楽そうだったので ruby に切り替えた

そもそもなぜ shell をやめたのかだが、一番の原因は erb の存在である

### テンプレートで文字を埋め込むという発想

shell で頑張ろうとすると、文字を埋め込みたい場合にすごくいびつな書き方になった

たとえば、出力後が以下のファイルを作りたいとする

```javascript
import React from 'react';
import Index1 from './index1';
import Index2 from './index2';

const Root: React.FC = () => {
  return (
    <div>
      <Index1 />
      <Index2 />
    </div>
  );
}

export default Root;
```

僕が頑張った時はこう

```bash
cat - << EOS > src/root.tsx
import React from 'react';
EOS

for i in (1 2)
do
  echo "import Index${i} from './index${i}';" >> src/root.tsx
done

cat - << EOS >> src/root.tsx
const Root: React.FC = () => {
  return (
    <div>
EOS

# ...
```

_これはひどい_

[bashのヒアドキュメントを活用する](https://qiita.com/take4s5i/items/e207cee4fb04385a9952) とかみるとまだマシにかけるかもしれない（が、諦めた）

その結果 erb を使うことにした

今回は ruby ファイル内にヒアドキュメントで書いてるが、普通に `.erb` ファイルとして書くのが正常だと思う

rails だと置換したい後のファイル拡張子をつけたりするの (`root.tsx.erb` etc) をよくみるヨネ！

ファイル読み込みにしてるかどうかの差だけなので今は気にしないで（そのうち直す）

```ruby
template = <<EOS
import React from 'react';
<%- [1, 2].each do |i| -%>
import Index<%= i %> from './index<%= i %>';
<%- end -%>

const Root: React.FC = () => {
  return (
    <div>
      <%- [1, 2].each do |i| -%>
      <Index<%= i %> />
      <%- end -%>
    </div>
  );
}

export default Root;
EOS

erb = ERB.new(template, nil, '-')
File.open('src/root.tsx', 'w') do |f|
  f.write erb.result(binding)
end
```

これで元のテンプレートがどんなのだったかもわからなくなるくらい壊滅的な書き方にならなくてハッピー！

[Rubyでテキストにコードを埋め込む。|ERBでテンプレート利用](http://mukaer.com/archives/2013/06/05/rubyerb/) を参考に。

### ファイルの読み込み/書き込み、ファイル取得

#### bash でやってた ls の代用
[Dir.glob - doc.ruby-lang.org](https://docs.ruby-lang.org/ja/latest/method/Dir/s/=5b=5d.html)

#### bash でやってた cat や >> の代用

* [Rubyでファイルの書き込み・読み込みを行う方法](https://uxmilk.jp/22615)
* [ファイルから1行／段落ごと読み込む（入力する）には？](https://www.buildinsider.net/language/rubytips/0021)

### 文字エスケープ

実装したらエスケープ忘れによく気づくよね！

というわけで、文字のエスケープについてだが、 `cgi/escape` なんてものもあるけど、後述の絵文字対応のときに備えて自前で実装した

ほぼ [素の Ruby で HTML エスケープするなら cgi/escapeが最強](https://qiita.com/scivola/items/b2d749a5a720f9eb02b1) を丸パクリ

~最強と言う人を裏切る勇気~

文字コード忘れた人は 「HTML 特殊文字コード表」とかで検索すると色々あるよ

### マークダウン特有の文字を置換する

`*` がリストだったり `#` がヘッダーだったりそういうやつを html 文字に変更しなきゃならんのだが、 shell だと sed でできたのをどうするかという話

sub/sub! や gsub/gsub! を使えば OK! (gsub! は破壊的なので注意)

```diff
- echo "* hoge" | sed s/^\*\ /\<li\>/g
+ "* hoge".gsub(/^\*\ /, '<li>')
```

_まぁこの書き方だと他にも競合するのだがそれはご自身で考察ください_

ちなみに一番時間を食ったのがこの正規表現かもしれない

[正規表現 .*?は最短マッチではない](https://qiita.com/anqooqie/items/191ad215e93237c77811)

こういうのまじ助かりました :bow:

ちなみに一番書き方で悩んだのは

```ruby
"**強調！**".gsub!(/\*\*([^\*]+)\*\*/, '<b>\1</b>')
```

こういうやつ

### 絵文字

:tada: とか github だと認識してくれるけど、コンバーターだと自分でかかなきゃいけない

そこで先程自前で書いたのが活きてくる

```ruby
EMOJI_TABLE = {
  ':tada:' => '&#x1f389;'
}

"おめでとう :tada:".gsub(/:tada:/, EMOJI_TABLE)
```

絵文字のコードは [主な特殊文字の文字コード - Guppy](http://guppy.eng.kagawa-u.ac.jp/~kagawa/OpenCampus/unicode.html) を参考に。
