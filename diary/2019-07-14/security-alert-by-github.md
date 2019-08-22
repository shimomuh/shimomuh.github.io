# Github からセキュリティ脆弱性の通知がきたとき

タグ `このサイトの生い立ち` `Github`

## 背景

ある日 Github をみているとセキュリティ脆弱性に関する警告が出ていた

![](/static/diary/2019-07-14/security-alert.png)

これに対策する

## 結論

### 自力で入れる

単純に上記の [See security alert] ボタンを押すと

![](/static/diary/2019-07-14/warned-module.png)

このようにエラーモジュール一覧が表示されているので選択すると解消方法が記載されている

![](/static/diary/2019-07-14/resolve-security-alert.png)

この通りに対応すればいける

 

今回は以下のような感じ

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/a8a1acd8691635107bbf7a7209301911dc5df89c)

```bash
npm i --save-dev lodash.template@4.5.0
```

### Github bot で自動で導入する

先程の解消方法が記載されたページに [Create automated security fix] という緑のボタンがある

これを押すと以下のようにボタンがなくなり Generating an automated security fix な Pull Request が生成される

![](/static/diary/2019-07-14/after-create-automated-security-fix.png)

実際に Pull Request ができていて

![](/static/diary/2019-07-14/pull-request.png)

クリックすると、 Bot によって生成されていることがわかる

![](/static/diary/2019-07-14/pr-by-bot.png)

## 補足

ビジネス的な要件やステークホルダーの都合で脆弱性が含まれていることがわかっていても更新が許容できない場合があるかもしれない（あまりよくわからないが）

一応その場合の対処法についても述べると、先程の解消方法が記載されたページの [Dismiss] のボタンを押すと実施できる

その際理由を求められるので選択すれば許容できる

![](/static/diary/2019-07-14/dismiss.png)

実施していないからわからないが、おそらく Github リポジトリトップの警告が消えるんじゃないかな？


