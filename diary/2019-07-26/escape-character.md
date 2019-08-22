# エスケープ文字に対応してみる

タグ `このサイトの生い立ち` `Ruby`

## 対象者

このサイトの生い立ちをみてきた方

## 背景

前回テストを書いたが一部対応ができていなかったのでそれを補足した

## 結論

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/30d432b7f06c1bd9654671130ebcf166e2bd538b)

前回のほぼ応用だが、一度文字を適当な文字に置換して、その後元に戻すという方法で対応した

多少の工夫点があるとすれば

* エスケープは HTML 特殊文字のエスケープ処理の前後でも動作するために、HTML 特殊文字のエスケープ対象外の文字を選択した
* エスケープは `%MASK{NUMBER}%` のような文字列に置き換えをするので、置き換え前の値を格納しておくためにクラスメソッドで単発で使うのではなくインスタンスメソッドとしてインスタンスが置き換え前の値を保持するようにした

このやり方は完全ではない

なぜなら `%MASK{NUMBER}%` に該当する文字列が含まれると誤検知してしまうからだ

一応後者について簡易的なコードも添付しておく

 

**before**

```ruby
class Parser
  def initialize(value)
    @value = value
    @masks = []
  end

  def self.parse(value)
    instance = new(value)
    instance.escape
    instance.parse_something
    instance.unescape
  end

  private

  def escape
    matcher = /PATTERN/.match(value)
    return unless matcher

    @masks.push matcher[0]
    @value.gsub!(matcher[0], "%MASK#{@masks.size - 1}%")
  end

  def unescape
    @masks.each_with_index do |esc, index|
      @value.gsub!("%MASK#{index}%", esc)
    end
  end
end

Parser.parse(value)
```

**after**

```ruby
class Parser
  def initialize(value)
    # ...(上記と一緒)...
  end

  def self.parse(value)
    instance = new(value)
    instance.parse_something # 従来のやり方は残す
    value # クラスメソッドとして単発利用するときはインスタンスは返さず値だけ返す
  end

  def parse # インスタンスメソッドとしてもパースを利用できるようにする
    parse_something
  end

  def escape
    # ...(上記と一緒)...
  end

  def unescape
    # ...(上記と一緒)...
  end
end

instance = Parser.new
instance.escape
instance.parse
instance.unescape
```

メリット

* escape と parse / parse と unescape の間に処理を噛ませることができる
* メソッドの粒度が高くなりテストが容易に、かつ責任範囲が明確になる
* 従来の方法も残すことで、 escape したくない場合の単発利用もできる

今回はこのメリットのおかげで、 `li` やテーブルレイアウトのような複数行にまたがる処理でも各メソッドにエスケープ処理を書くことなく処理の最初と最後で escape / unescape するだけで実現できた
