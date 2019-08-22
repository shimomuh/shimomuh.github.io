# Javascript でカレンダーを作ろう

タグ `このサイトの生い立ち` `Javascript` `TypeScript` `React`

## 対象者

* 車輪の再発明大好き！
* Javascript で何か作りたい！

人向け。

プログラミング言語触りたて、Javascript はじめたての人向けではない。

## 背景

アドベントカレンダー作るからにはカレンダー作らないとね

せっかくなら汎用的に作りたいよね

## 結論

[JavaScriptでカレンダーを自作したら勉強になった](https://qiita.com/kan_dai/items/b1850750b883f83b9bee)


以上


だとあまりにもそっけないので過程を説明する

成果物以上の効果として、勘を取り戻しつつ課題がみつかるので進捗感が得られた

[→成果](https://github.com/shimomuh/shimomuh.github.io/pull/2/commits/3e483e1c8ace75af061ee36fb071d0507b01f08a)

## 過程

"どんなコードを書いたか" は commit をみてもらえばわかるのでここでは考え方を共有する

### 責務の所在をはっきりする

僕はスーパーマンじゃないのでなんでもは知らない、知ってることだけ

今ある `src/components/` 配下に新しく calendar 的なコンポーネントを作りたかったけど、これから作ろうとしているカレンダーのロジックはロジックなので view を表現するコンポーネントとは別の場所に配置したかった

そこで、 `models/calendar.tsx` が爆誕した

### パスを絶対参照で書く

配置したはいいが、ロジックを読み込むのに相対パスだと場所が変わったら崩壊してしまう

密なコンポーネントなら相対参照でよいがロジックはさすがに `src` を起点に絶対パスで描きたかった

そこで `tsconfig.json` をいじって、絶対パスっぽく参照できるように以下のようにした

もしかしたらこれが一番時間かかったかもしれない

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "components/*": ["components/*"],
      "models/*": ["models/*"]
    }
  }
}
```

はじめ `"~*": ["*"]` みたいな形で `src` を root に参照しようと思ったがうまくいかなかった

もしかしたら hot loader との相性が悪いのかもしれないがそれはまた別の機会に。

参考にしたのはこのあたり

[TypeScriptでaliasなパスでmoduleをimportできるように](https://qiita.com/nju33/items/cf924f7b6bb513bef8a2)

### ロジックを書く

まずは function でカレンダーロジックを作った

イメージ的には以下を返すような関数

```javascript
const getCalendar = (year: number, month: number): any => {
  return [
    [   ,   ,   ,   ,   ,   ,  1],
    [  2,  3,  4,  5,  6,  7,  8],
    [  9, 10, 11, 12, 13, 14, 15],
    [ 16, 17, 18, 19, 20, 21, 22],
    [ 23, 24, 25, 26, 27, 28, 29],
    [ 30, 31,   ,   ,   ,   ,   ]
  ]
}
```

あとはロジックを考えて中身を埋めるだけ

これができると view はなんでもよくなるので、他のサイト作りたい時にも流用できて責務わけ様様！

しかし、空の部分に先月とか来月の日数が入っているのはよくみるし、日付は連続的なものであって断続的なものではない（見方にもよるけど）

そこで空を埋めようとした時、o o O（今月とそれ以外は色分けとかしたいよな）と思った。

しかし、単なる二次元配列だと状態が管理できない！

そこでクラス構造にすることにした

### function を class に置き換える

一番意識したのは命名とコンテキストマッピング

普通に class にするとすれば大枠が Calendar で日付が Date にしたかった

でもさすがに Date は標準クラスだし、 Calendar はコンポーネントの Calendar とも被ってしまう問題に直面した

そこで、前者はどうしようもないので DateCell という名前にして Calendar はコンテキストマッピングとして処理することでクラス実装時は Calendar として実装すればよいので助かった

```javascript
class Calendar {
}

export { Calendar as CalendarModel };
```

これで衝突を避けられる。本音を言うと

```javascript
// src/models/calendar.tsx
export class Calendar {}

// src/components/adventCalendar/calendar.tsx
import { Calendar as Model } from 'models/calendar';

export const Calendar: React.FC = () => {
  var model = new Model();
  // ...(略)...
}

```

みたいな感じにしたかったが、うまい方法が見つからず今は前者を選んでいる

こんな風にして設計・実装した

## おまけ

実装していて、 scss で書きたかったので次回はそれをやっていきたい

ついでに、コンパイラーで警告されてたから対応したのだけれども react はループで回した dom に対しては key をつけるように指定してくるので忘れた時に思い出しておくとよさそう
（以下の key の部分）

```javascript
<ul>
  {[1, 2, 3].map((num: number, key: number) => <li key={key}>{num}</li>)}
</ul>
```
