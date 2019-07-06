# react-router-dom でルーティングする

タグ `このサイトの生い立ち` `React` `TypeScript`

## 対象者

react-router-dom 何ソレ美味しいの？という人向け

## 背景

今書いてるこの markdown ファイルを tsx に置換するスクリプトを書いて、それをルーティングすれば github のページに飛ばさなくてもあたかも自分のページのように表現できるんじゃね？と思ったのがきっかけ

## 結果

```bash
npm i --save react-douter-dom @types/react-router-dom
```

をインスコ

あとは [React Router v4 の基本的な考え方と使い方](https://numb86-tech.hatenablog.com/entry/2017/05/06/125333) のママ

 

**呼び出し側**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Index} />
        <Route path='/home' component={Home} />
      </div>
    </BrowserRouter>
  );
}

const Index: React.FC = () => {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

ReactDOM.render(<Router />, document.getElementById('#app'));
```

本当は他にも History 対応だったり state を使ってページまたぎでデータを使ったりできるのだが、それはこの Web サイトではﾀﾌﾞﾝやらない

他にホームページを作っているのでそちらで実践についてお話する機会があれば寄稿しようと思ふ

明日は途中まで書いてる md を tsx に変えるスクリプトについてでも書きたいなぁ

 

[→成果](https://github.com/shimomuh/shimomuh.github.io/pull/4/commits/ebb1789f743089f95f9746d45da7890c80ac839b)
