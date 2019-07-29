# Rome was not built in a day

これは継続がとても苦手なサボり屋 [@shimomuh](https://github.com/shimomuh) がローマを作り上げるまでの記録

## 日記を書く

```bash
mkdir diary/YYYY-MM-DD
vim diary/YYYY-MM-DD/{FREE_NAME}.md
```

画像は同じ階層に配置して OK

## 開発環境で確認する

```bash
# 開発環境を起動する
npm run start

# 日記を書いたりテンプレートを変更したらビルドする
ruby bin/make-tsx.md

# 画像を公開可能なディレクトリにコピーする
ruby bin/image-copy.md
```

## ビルドして反映する

```bash
bin/build
git push origin {BRANCH_NAME}
```
