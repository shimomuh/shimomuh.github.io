# tslint を使って TypeScript にも秩序を！

タグ `このサイトの生い立ち` `TypeScript`

## 対象者

運用途中から tslint を入れる人

## 背景

昨日の rubocop 同様 TypeScript にも lint くらい入れようという話

## 結果

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/4aaf58453bc79eea53ca971eb4a07b5e240fd468)

```json
{
  "extends": ["tslint:latest", "tslint-react"],
  "rules": {
    "jsx-wrap-multiline": false,
    "_comment-quotemark": "quote は single だろうが double だろうが許容する",
    "quotemark": false,
    "_comment-ordered-imports": "import はアルファベット順",
    "ordered-imports": false,
    "_comment-no-submodule-imports": "import されるファイルは submodule (/ を使うもの
) も許容する",
    "no-submodule-imports": false,
    "_comment-no-implicit-dependencies": "tsconfig の path alias を無視したいので許容
する",
    "no-implicit-dependencies": false,
    "_comment-trailing-comma": "文末のコンマは無視しよう fyi: https://selmertsx.hatenablog.com/entry/2018/02/06/201945",
    "trailing-comma": false,
    "_comment-max-classes-per-file": "1つのファイルに private な小さなクラスの宣言を>許容する",
    "max-classes-per-file": false,
    "_comment-jsx-no-multiline-js": "関数埋め込みを許容する",
    "jsx-no-multiline-js": false
  },
  "linterOptions": {
    "exclude": [
      "src/components/tag/*.ts{,x}",
      "src/components/diary/*.ts{,x}",
      "src/react-app-env.d.ts",
      "src/serviceWorker.ts",
      "src/components/router.tsx"
    ]
  }
}
```

警告されたものについてはコメント付きでどういうものかを説明しつつ、無理ゲーなら許容したり、重要ではなさそうなものについてはスルーするようにした

あと、テンプレートから作成されるようなものについてはあまり気にしたくはないので exclude に入れて無視するようにした

_~lint 時に Could not find implementations for the following rules specified in the configuration って怒られるけどね！~_
