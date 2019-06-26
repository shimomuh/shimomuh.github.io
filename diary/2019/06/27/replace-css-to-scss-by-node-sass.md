# create-react-app でも scss が使いたい！

## 対象者

create-react-app の導入に倣って入れたはいいけど、 css しか使えないの！？って人向け

## 背景

まさか今時 hot-loader でも scss が使えないなんて言わないよね？って発想から

## 結果

```bash
npm i --save-dev node-sass
```

以上！

あとは、 import しているファイルの拡張子なんかを変えてあげれば OK

**階層**

```
src
├── components
│   ├── adventCalendar
│   │   ├── calendar.css -> calendar.scss
│   │   ├── calendar.tsx
│   │   └── root.tsx
│   └── index.tsx
├── index.css -> index.scss
├── index.tsx
├── models
│   └── calendar.tsx
├── react-app-env.d.ts
└── serviceWorker.ts
```

**ファイル内置換**

例えば、 index.tsx で以下を置換してあげるだけ

```diff
- import './index.css'
+ import './index.scss'
```

あとはいつも通りの scss ライフが送れます :tada:

## 参考

* [create-react-appでSassやCSS-moduleを使う方法](https://qiita.com/yikeda6616/items/0e31a920d533d70c0bd9)
