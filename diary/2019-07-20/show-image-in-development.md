# create-react-app で作った JS ファイルで静的ファイルを参照したい

タグ `このサイトの生い立ち` `Ruby` `React`

## 対象者

create-react-app を進めてきた人のうち src 以外のディレクトリに配置したファイルを public 以下に配置して参照できるようにしたい

## 結果

ディスク容量効率はよくないが、シンボリックリンクだとダメだったのでやむなくファイルをコピーして public 以下に配置するスクリプトを書くことにした

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/10cc701fd3a6850f7673db780ef62a2202709387)

ruby のスクリプトだが簡素なので転機しておく

```ruby
require 'fileutils' # ファイル操作をするのに必要なやーつ

# 正規表現で対応するファイルを決める
# sort しているのは Dir.glob が順序を保証しないため
image_file_paths = Dir.glob('diary/**/*\.{png,jpg,jpeg,gif,svg}').sort

dirs = []
files = []
Dir.glob('diary/**/*\.{png,jpg,jpeg,gif,svg}') do |f| # はじめにファイルを読み込み
  files.push f
  dirs.push File.dirname(f)
end

dirs.uniq.sort.each do |dir|
  puts dir
  FileUtils.mkdir_p("public/static/#{dir}") # 存在しないディレクトリにコピーしないように mkdir -p して
end

files.each do |file|
  FileUtils.cp file, "public/static/#{file}" # ファイルをコピーする
end
```
