# Redux を使って URL が変わらない VirtualDOM 特有の遷移 (厳密には再描画) を実現する

タグ `このサイトの生い立ち` `React` `Redux` `UI/UX`

## 対象者

* Redux に聞き覚えがある
* Typescript で Redux コードは書いたことがない

という人

## 背景

カレンダーなので先月/来月には遷移したいよなと思ったのだが、 state を使う実装は Stateless Function に反するし、なにより普段から React x Redux には慣れていたので、せっかくなら Typescript でも試したいと思った

## 結論

redux を使って VirtualDOM 特有の再描画で URL が変わらない遷移を実現した

 

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/018c6f2b9a3227fd279213e627d8f90f0ffcac97)

 

この遷移を使うデメリットは `withRouter(connect(state)(Container))` みたいなことをしていないので URL が変わらないことである

が、今回はUXの観点からそのデメリットを活用した

 

ことカレンダーにおいて

* 今どこのページをみているかというのはインターネット上のアドレス（URL）として残すほどの意味がない
* 物体としてのカレンダーにおける困った事象の一つに6ヶ月前の予定を調べた後に今月に戻ってくるのが面倒だと思う

これらの観点から URL に残さないことで、リロードで今月に戻ることができる点から Redux の採用に至った

~まぁ、今のままだとぶっちゃけ React の恩恵をあまり受けれてないしね~

## 過程

ほぼ以下に従っただけ

[関東最速でReact+Redux+TypeScriptなアプリを作る](https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510)

一応はまった点だけ補足しておく

### Redux の store は更新されてるのに再描画が走らない問題

久々にはまった点が Reduxは浅い比較 ( shallow equality checking ) だということである

[ReduxのStateが変更されたのに再レンダリングされない問題](https://qiita.com/yasuhiro-yamada/items/aebda0dff79a70eb71d7) をみて思い出した

例えば以下のようなコンポーネントがあったとしよう

store プロパティの中身は action で更新されうる store の値が入っていて今回は仮想のモデル CalendarModel が入っているとする

Component は Container に接続され store の更新を dispatch している前提とする

```javascript
import React from 'react';

type Props = {
  store: {
    calendar: CalendarModel;
  }
}

Component: React.RC<Props> = () => {
  console.log(props.store.calendar.year) // (1)
  reutnr <p>{props.store.calendar.year}</p> // (2)
}

class CalendarModel {
  public year: number;
}
```

あるアクションによって CalendarModel が更新された時、たしかに console.log で確認した時 (1) の値は変わっているのに (2) の描画は古いままになってしまう

これは CalendarModel の要素が変わっても **CalendarModel の参照（メモリ上の番地）が変わっていないからである**

参照渡しではなく値渡しでないと、 React は最適化の観点から描画を実行しない

なので、僕の場合はアクションで更新する時に値が変わるものを store に追加してカバーした

```javascript
// reducer
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actionCreatorFactory from 'typescript-fsa';

interface CalendarState {
  calendar: CalendarModel,
  year: number;
}

const state: CalendarState = {
  calendar: new Calender(),
  year: new Calender().year
}

const actionCreator = actionCreatorFactory();

const calendarActions = {
  nextYear: actionCreator<CalendarModel>('NEXT_YEAR')
}

export const calendarReducer = reducerWithInitialState(state)
  .case(calendarActions.nextYear, (state, model) => {
    return Object.assign({}, state, { calendar: model, year: model.year })
  });

class CalendarModel {
  public year: number;
}
```

こうしておくことで `calendarActions.nextYear` というアクションが実行されたときに store の中の値渡しである `year` が変更され、 Component の再描画が走るという寸法である
