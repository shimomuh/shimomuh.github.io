# マークダウンコンバーターロジックを見直す

タグ `このサイトの生い立ち` `Ruby`

## 対象者

このサイトの生い立ちを追っている方々

マークダウンコンバーターを作ろうとしている方

## 背景

過去のロジックの場合

`<a href="link">text</a>` のうち `link` にタグに置換されうる文字が含まれていた場合置換されてしまい問題だった

もともとかなり密結合な作りになっていたのが実装に不安をもたらしていたので見直すことにした

## 結論

タグの中に変換しうる文字が含まれていた場合でも置換されなくなり、 URL がセーフティな作りになった

加えて、メソッドをやや疎にできた

 

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/cbebd19ab72b469a7c0ce5ec8ff7c727bcfd6397)

 

## 過程

### 課題

`gsub!` による一括置換の場合、 `<a>` タグ処理のあと `<i>` タグ処理によって URL に `_` が2個以上含まれる場合に置換されてしまう

### 検討

`<a>` タグや `<img>` タグのように他のマークダウン記法による影響を受けない実装が必要

そもそも `<a>` タグの `href` 内の URL が他のマークダウンの記法の影響を受けるのがよろしくない

### 解決策

タグを分類し、それらに対してそれぞれ置換する

さらに、他置換の影響を受けたくない部分に関しては置き換えをすることでそれに対処する

 

**今回の成果の抜粋と解説のため一部改変**

```ruby
def parse_along_flow
  escape_about_html # HTML 特殊文字のエスケープ
  br_tag_if_blank # 空行の場合は <br /> タグ挿入
  return if option[:code_block] # コードブロック中はここで return

  escape_about_emoji # 絵文字を置換
  replace_beginning_tag # h や q など一度しか置換されない文頭処理
  mask_ignore_inner_tag # 内部を書き換えられたくない a タグなどをマスキング
  replace_simple_tag # i タグなどは全体的に雑に置換
  replace_mask_tag # 最後にマスキングしたものをあるべきタグに置換し直す
end

def mask_ignore_inner_tag
  # ...(略)...
  mask_a_tag
end

def mask_a_tag
  return if @a_tag.size > AVOID_STACK_LEVEL_TOO_DEEP # stack level too depp で怒られるので。

  matcher = /\[([^\]][^\(]*)\]\(([^\)]*)\)/.match(value)
  return unless matcher # 一致するものがなければ return

  @a_tag.push(href: matcher[2], text: matcher[1])
  @value.gsub!(matcher[0], "{A#{@a_tag.size - 1}}") # {A0} のようにマスキング
  mask_include_text_a_tag # match メソッドでは前方一致しかできないため再帰的に処理
end

def replace_simple_tag
  # ...(略)...
  replace_i_tag # マスキング後の処理のため a タグの内部は影響を受けない
end

def replace_i_tag
  @value.gsub!(/__([^_][^_]+)__/, '<i>\1</i>')
  @value.gsub!(/_([^_]+)_/, '<i>\1</i>')
end

def replace_mask_tag
  # ...(略)...
end

def replace_a_tag
  @a_tag.each_with_index do |a, index|
    @value.gsub!(/{A#{index}}/, "<a href=\"#{a[:href]}\">#{a[:text]}</a>") # 置換して戻してあげる
  end
end
```
