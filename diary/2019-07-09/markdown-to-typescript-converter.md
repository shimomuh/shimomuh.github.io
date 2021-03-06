# Markdown から TypeScript に書き換えるコンバーターのリファクタ

タグ `このサイトの生い立ち` `Ruby` `設計`

## 対象者

* DDD の実践をしたい
* DDD を実践している
* リファクタリングを考えている

そんな人

## 背景

bin/make-tsx.rb というファイルですでに Markdown to TypeScript なコンバーターは [【暫定版】ruby で React に載せるための Markdown コンバーターを実装する](http://localhost:3000/2019-06-29) で実践し改善してきたのだが、テストも全くないのでそろそろ拡張が限界にきている（品質が保証できなくなっている）

 

そこで、今回はクラスに分けて責務を分散しあとあとテストしやすくかつ品質を担保しやすくすることを目的にリファクタする

## 結論

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/d2c49b293127bcb8f51b9dd4d03a03ab934bf5ad)

## 過程

今の [make-tsx.rb](https://github.com/shimomuh/shimomuh.github.io/blob/feature/2019-07-08/bin/make-tsx.rb) を紐解いて設計を考える

ちなみに、設計は DDD に基づく

DDD については [実践DDD本 第2章「ドメイン」「サブドメイン」「境界づけられたコンテキスト」を読み解く](https://codezine.jp/article/detail/9744) あたりを参考にすべし

個人的には上記でも紹介されている [実践ドメイン駆動設計 - ヴァーン・ヴァーノン  (著), 高木 正弘 (翻訳)](https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88-Object-Oriented-SELECTION-%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%B3%E3%83%BB%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%8E%E3%83%B3/dp/479813161X) はぜひ一読してほしい

 

ともあれ設計した結果は以下の通り

* 1記事を文字列配列として渡し
* 文字列配列に対して複数行にまたがるマークダウン記法処理をする
* 文字列に対して1行に関するマークダウン処理をする
* 文字をエスケープする

このように粒度を下げていくことを意識した

処理の大枠は以下のようなイメージ

```ruby
class StringArrayParser
  def self.parse(str_array)
    string_array.each do |str|
      multi_line_parse str
      StringParser.parse str
    end
  end

  class StringParser
    def self.parse(str)
      escape str
      one_line_parse str
    end
  end
end

StringArrayParser.parse articles
```

明日はテンプレートを読み込むところを実装しようかな
