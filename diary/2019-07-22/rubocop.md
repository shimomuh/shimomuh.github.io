# rubocop を使って ruby コードに秩序を！

タグ `このサイトの生い立ち` `Ruby`

## 対象者

運用途中から rubocop を入れる人

## 背景

今更だけど `.ruby-version` すら縛ってないことに気づいた

あと、スピード重視で rubocop をやめてたけどそろそろ入れたい感が出てきた

## 結果

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/b0bfa1f4c30137969d1bdc0d22f59b424946258b)

ぶっちゃけ初めから入れとこうに尽きる

`.rubocop.yml` みてもらえばわかるが、めちゃくちゃ妥協してる orz

```yml
# 日本語のコメントを許可する
Style/AsciiComments:
  Enabled: false

# Ruby 2.3 から `# frozen_string_literal: true` とファイル先頭に書くと文字リテラルが>デフォルトで freeze されるようになる
# これは Ruby 3.0 で文字リテラルがデフォルトで freeze になる予定なので互換性の問題も>あって移行シミュレーションが可能なように導入されている
# 今回はあえて気にして true にしてみる
# fyi: https://www.task-notes.com/entry/20160831/1472572735
Style/FrozenStringLiteralComment:
  Enabled: true

# 本当はもっと小分けしたいがリファクタの時間はもったいないので諦める
Metrics/ClassLength:
  Max: 200

# なんかめっちゃ長いのもあるので諦める
Metrics/LineLength:
  Max: 200

# 割と危険度が高いと判断されたものも許容する
Metrics/AbcSize:
  Max: 50

# メソッドの危険度（多分破壊的処理とかめっちゃやってるから怒られる）
Metrics/PerceivedComplexity:
  Max: 10
Metrics/CyclomaticComplexity:
  Max: 10

# メソッドの長さはある程度許容する
Metrics/MethodLength:
  Max: 30

# JSON.load の代わりに JSON.parse 使えってことだったけどそうするとエラーなケースがあ>ったのでひとまず回避
Security/JSONLoad:
  Enabled: false

# ハッシュの key => value の値を列挙した時に value の位置が揃うように空白を入れたとき
に警告するもの
# 可読性的には全然ありなので、 false にする
Layout/AlignHash:
  Enabled: false
```

本来これらの規制はカスタムせずに守られるべきなので、隙を見て徐々に改善していこうかなという次第

ただ途中からだとコード量にも限界があるので、なるべく許容することも視野に入れて徐々に直しておくがよいと思う

あと、コードになるべく規制はつけない派なので、許容できるならルールにしてしまって、コード中に `# rubocop:disable all` みたいなのはやらない方が吉
