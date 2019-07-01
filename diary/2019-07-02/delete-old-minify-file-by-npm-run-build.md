# npm run build によってできる不要ファイルの削除

## 対象者

npm run build で不要ファイルが出るがたまりすぎると困るので対応したい人

## 背景

npm run build のたびに削除されないファイルが溜まってきて定期的に rm してたけど、面倒なのでスクリプトとして書きたかった

## 結果

`bin/remove-old-file.rb` に書いた

[→成果](https://github.com/shimomuh/shimomuh.github.io/pull/8/files)

愚直にパターンマッチングして対象のものを消すという処理

もっとマシにかけると思う orz

今はこれで辛抱。

もしかしたら tsconfig.json とかにいいオプションがあるのかもしれないが今はこれで行く方向で。
