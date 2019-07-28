# 正規のシンタックスハイライトを実現する

タグ `このサイトの生い立ち` `Ruby`

## 対象者

このサイトの生い立ちを追ってきた方々

## 背景

昨日雑多なシンタックスハイライトを作ったが、やっぱよりよい方法に直したかった

## 結果

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/75a350a72ee0f28cfa47fa8c643245e648684241)

 

json から受け取った string 文字列を使って regexp にうまく変換できなかったのでやむなく json はやめて Config ファイルを定義することにした

```ruby
class SyntaxHighlight
  CONFIG = [
    {
      in: /(\b)(return)(\b)/,
      out: '\1<span className="syntax--\2">\2</span>\3'
    }
  ].freeze

  def self.insert_tag(value)
    syntaxs.each do |syntax|
      value.gsub!(syntax[:in], syntax[:out])
    end
  end

  private

  def self.syntaxs
    Config
  end
end

SyntaxHighlight.insert_tag('return returnValue;')
```

~`\\b` を知らなかった情弱~

でもこのおかげで、 `return` のような文字と `returnValue` のような文字列に対応できた

 

あと、テストを書くときにあまりに同じのを書くのが面倒だったので今回のようにパターン化できるものは shared_examples で簡潔に書くとよい

```ruby
# trigger と klass は内部で使う
shared_examples '(\b)(trigger)(\b)' do |trigger, klass|
  context 'ぴったり一致する場合' do
    it '意図した通りに span タグが挿入される'
  end

  context '2回出てくる場合' do
    it '意図した通りに span タグが挿入される'
  end

  context '後ろに許容できる文字がきた場合' do
    it '意図した通りに span タグが挿入される'
  end

  context '前に許容できない文字がきた場合' do
    it '変換されない'
  end

  context '後ろに許容できない文字がきた場合' do
    it '変換されない'
  end
end

describe 'return' do
  it_behaves_like '(\b)(trigger)(\b)', 'return', 'return'
end
```

