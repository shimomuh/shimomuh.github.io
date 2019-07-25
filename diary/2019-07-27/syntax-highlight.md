# 雑なシンタックスハイライトをつける

タグ `このサイトの生い立ち` `Ruby`

## 対象者

このサイトの生い立ちをみてきた人

## 結果

コードがなんとなく他の優秀なサイトと比べてみづらくてよくよく考えるとシンタックスハイライトがなかったので追加してみた

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/71e67bd1bee954511437a43256a7f1b394675192)

**ruby**

```ruby
class A
  def initialize(value)
    @value = value
  end

  def call
    @value
  end
end
```

**js**

```js
function plus(a, b) {
  return a + b;
}
```

ただし、この正規表現には穴も多い現状だと ruby コードで pending の end にハイライトが入ってしまうので `/[^a-z]+end/` みたいな感じにした方がいいかもしれないし、もっといい方法もあるかもしれない

言い出すとキリがないのと、どのエディタに色を寄せるかは好みのレベルなので、一旦色々と諦めて現状に

## 課題

`"` や `'` を置換しようとするとコンパイルが重すぎて node サーバが立ち上がらなくなったので考えないといけない

これは追々...
