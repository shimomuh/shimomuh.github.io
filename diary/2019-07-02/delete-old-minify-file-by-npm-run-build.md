# npm run build によってできる不要ファイルの削除

タグ `このサイトの生い立ち` `Ruby`

## 対象者

npm run build で不要ファイルが出るがたまりすぎると困るので対応したい人

## 背景

npm run build のたびに削除されないファイルが溜まってきて定期的に rm してたけど、面倒なのでスクリプトとして書きたかった

## 結論

`bin/remove-old-file.rb` に書いた

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/f192cd3c07421b48fea622633da4fe092a71c40b)

愚直にパターンマッチングして対象のものを消すという処理

もっとマシにかけると思う orz

今はこれで辛抱。

もしかしたら tsconfig.json とかにいいオプションがあるのかもしれないが今はこれで行く方向で。
