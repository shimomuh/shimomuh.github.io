# yield を使ってモデルクラスは標準出力の依存を避ける

タグ `このサイトの生い立ち` `Ruby` `設計`

## 対象者

* yield を使ったことはあるけどいまいち使い所をイメージできない
* yield を知らない

そんな人

## 背景

モデルクラスが rake task でもないのに標準出力に依存しているのが気持ち悪かったので分離した

## 成果

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/4c87dbb180a1c008e266b77a0bb858d4f7278c15)

yield 周りについてはググってもらうとして、以下のようにすることでモデルのテストで標準出力を無視できるよという話

もし circleci や jenkins で job を実行して test をしている人なんかは標準出力が出ないように以下で工夫してみてもいいかもしれない

```ruby
class Model
  def initialize
  end

  def exec
    # ...(なんか処理)...
    puts 'exec!'
  end
end
```

これをテストすると

```bash
bundle exec rspec model_spec.rb
exec!
..
```

exec! が出力されてダサいし、もし api なんかで使うことがあったら変にログに記録されてしまうかもしれない

そこで

```ruby
class Model
  def initialize
  end

  def exec
    yield 'exec!' if given_block?
  end
end
```

こうすることで、、テスト時や api 利用などの標準出力をさけたいときは

```ruby
Model.new.exec
```

rake task のように実行を標準結果に出したいときは

```ruby
Model.new.exec { |message| puts message }
```

とすればよい

このメリットは標準出力に限らず内部処理の途中経過を外に出せることにあるので

```ruby
Model.new.exec { |m| STDERR.puts m }
Model.new.exec { |m| OtherModel.new(m) }
```

のようにすることで標準エラー出力に吐いたり処理を他に渡せるのも魅力である
