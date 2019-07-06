# Json ファイルを React で読み取る

タグ `このサイトの生い立ち` `React` `Ruby` `TypeScript` `設計`

## 対象者

* React で Json を読み込みたいけどやり方を知らない
* 実装イメージはつくけどいざやってみるとコンパイラでエラーが出た

そんな人

## 背景

Markdown 形式で書いた記事のタイトルをカレンダーに表示したいと思ったがカレンダー部分は tsx ゴリゴリで今後も柔軟な変更が求められそうだったので以下のように対策することにした

 

1. article.md の1行目を読み取って ruby スクリプトで json に吐き出す

2. 吐き出した json を Typescript 風に読み込んで ReactDOM で表示する

 

## 結果

背景に書いた通りのプロセスで実現した

 

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/23fec03e5f7656ccf9dab360d7d4fe7fd1ec460a)

 

今回はその中でも躓いた部分について解説する

## 過程

### Typescript で json ってどう読むの？

非同期の方法は色々あるし知っているけど、そうじゃなくて簡素に json を読みたいんだ！

ファイルサイズが増えてきたら `saga.js` とか使って対策するからまずシンプルな方法を教えてくれ！

 

めっちゃ簡単でした

[Importing json file in TypeScript - stack overflow](https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript)

 

**json**

```json
{
  "key": "value"
}
```

 

**Typescript**

```javascript
import React from 'react';
import json from 'data.json';

const Component: React.RC = () => {
  return <p>{json.key}</p> // => "<p>value</p>"
}
```

なんてシンプルなんだﾊｯΣ (ﾟДﾟ!!!

 

...

 

なんて簡単に問屋はおろさない

案の定、型を定義してないから定義してくれよ！って怒られる

 

`Index signature of object type implicitly has an 'any' type.`

 

そこで [Typescriptで、Objectkeyとすると出るIndex signature of object type implicitly has an 'any' type.を正しく回避する](https://qiita.com/gonta/items/fb7b9e6d0f12060c27d6) に書いてあったことを参考に冗長に対応した

_多分もっとうまい方法はある_

```javascript
import React from 'react';
import json from 'data.json';

type Props = {
  \[key: string]: string;
}

const Component: React.RC = () => {
  const config: Props = json
  return <p>{config.key}</p> // => "<p>value</p>"
}
```

## おまけ

今回 ruby スクリプトで json ファイルに書き出したときの方法は以下の通り

成果だけだと見辛そうだったので完結に書いてみた

```ruby
hash = {}
files.each do |file|
  date = extract_date(file.path)
  File.open(input_file, 'r') do |f|
    f.each_line.with_inedx do |line, index|
      hash[date] = line[index] if index.zero?
    end
  end
end
File.open(output_file, hash.to_json)
```

いい加減リファクタしたい欲がすごいけど、多分明日はタグをリンクにする作業をやる

