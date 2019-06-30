# React + Typescript の Stateless Function で props を利用する

## 対象者

* Stateless Function を使っていて props の渡し方がわからない方
* `Type '{ 渡した変数: 渡した変数の型; }' is not assignable to type 'IntrinsicAttributes & { children?: ReactNode; }'.` が出て困ってる方

## 背景

カレンダー拡張にあたり、props を扱いたくなったが、`Type '{ 渡した変数: 渡した変数の型; }' is not assignable to type 'IntrinsicAttributes & { children?: ReactNode; }'.` というエラーに阻まれた

ちなみに、そもそもなぜ stateless function を採用しているかは [ステートレスなコンポーネントによるReactのパフォーマンス最適化](https://www.webprofessional.jp/optimizing-react-performance-stateless-components/) あたりを参照。


## 結果

React.FC にうまいこと型宣言してあげる

```javqscript
import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  value: string;
}

const Component: React.FC<Props> = (props) => {
  return <p>{props.value}</p>;
}

ReactDOM.render(<Component value="hoge" />, document.getElementById('#app'));
```

## 過程

typescript で書く前まで（babelで）は stateless function での props の受け渡しは以下のようにやっていた

```javascript
function App () {
  return <Component value='hoge' />
}

type Props = {
  value: string
}

function Component(props: Props) {
  const { value } = props
  return <p>{ value }</p>
}
```

ところがどっこい同じように typescript で書くとエラーで怒られた

```javascript
const App: React.FC = () => {
  return <Component value='hoge' />
}

type Props = {
  value: string;
}

const Component: React.FC = (props: Props) => {
  const { value } = props;
  return <p>{ value }</p>;
}
```

理由は React.FC の方に引数の指定をしてあげる必要があるから。

babel でうまくいってたのは function Component の戻り値を明示してなかったからというわけか

宣言の仕方は以下の通り

```javascript
type Props = {
  value: string;
}

const Component: React.FC<Props> = (props) => {
  const { value } = props;
  return <p>{ value }</p>;
}
```

もちろん超絶短く書きたい人は短く書いてもらって結構

```javascript
const Component: React.FC<{ value: string }> = (props) => {
  return <p>{ props.value }</p>
}
```

