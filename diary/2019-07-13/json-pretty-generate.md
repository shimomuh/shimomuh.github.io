# Ruby で to_json 時にインデントや改行したいとき

タグ `このサイトの生い立ち` `Ruby`

## 対象者

json ファイルを出力時に `to_json` メソッドを使うとインデントや改行がされなくて困ってる人

## 背景

```ruby
require 'json'

File.open('file.json', 'w') do |f|
  f.write { hoge: 1, huga: 2 }.to_json
end
```

とすると

```
{"hoge":1,"huga":2}
```

と改行やインデントなしに生成される

これはこれで読み込みサイズを削減したりするのには役に立つ

しかし、今回は build.js で minify されるので可読性を優先したかった

## 結論

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/96b448f496f040fa89ea9db5e4956829c06ed3b1)

```ruby
require 'json'

File.open('file.json', 'w') do |f|
  f.write JSON.pretty_generate({ hoge: 1, huga: 2 })
end
```

とすると

```json
{
  "hoge": 1,
  "huga": 2
}
```

と改行やインデントに加え、適切にスペースも含めてくれて可読性が上がって good :+1:

## 参考

* [to_jsonの時にppっぽくしたい場合](http://hai3.net/blog/2013/02/14/json-pretty-generate/)
