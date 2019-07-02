# React on Github Pages でも 404 を返さずに遷移したい！

タグ `Github` `React` `Javascript`

## 対象者

React on Github Pages を使っている/興味がある人

## 背景

`npm run start` でローカルで worker を立ち上げているときは `https://xxx.github.io/2019-07-05` なんかに飛んでも問題なかったのだが、 Github Pages にあげた途端に 404 が返るようになった :scream:

そこで、対処したかったが、できれば BrowerHistory の代わりに HashHistory は使いたくなかった

そこで、slack overflow の [getting 404 for links with create-react-app deployed to github pages](https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages) を参考にさせてもらった :pray:

## 結果

Github Pages の特性を使って問題を解決した。

[→成果]((https://github.com/shimomuh/shimomuh.github.io/commit/61fa7ddc9a16f187d94260293f962238350a098b)

結論だけ言うと stack overflow のリンクにあった [spa-github-pages - Github](https://github.com/rafrex/spa-github-pages) をコピペしただけなのだが、それだけだとあまりにも味気ないので、スクリプトの解説とそもそもなぜこれでいけるのかについて説明する。

## 過程

### そもそもなぜ 404.html にリダイレクト処理を書いたスクリプトだけでルーティングできるのか

そもそもこの現象、 slack overflow の質問者が書いていたように `createHistory` や `routerMiddleware` を使っても解決することができない

なぜなら、より上段の処理によって今回の問題が発生しているからである

#### Web サーバの存在

例えば、このサイトのように特定の index.html を `xxx.github.io` という名前で表示したかったとする

index.html には minify / uglify された元は typescript で書かれた js ファイルを読み込むように指定があり、同様に css も配置されている

さらにはドメインの登録が終わっており、 `xxx.github.io` と紐づけた `172.123.456.78` というグローバルIP を持つサーバに配置した index.html はインターネット上に公開されない

 

─── そう、表示するのに必要なものは全て揃っているのである

 

にもかかわらず表示されないのは `172.123.456.78` のグローバルIPアドレスを持つサーバに「`xxx.github.io` の root path に接続されたときは、このディレクトリにある index.html を表示するんだよ」と設定してあげる必要があるからである。

この割り当ての役割を担うのが Web サーバである。

nginx や Apache などは聞き覚えがあるだろう。

~_nginx や Apache に関するよもやま話もしたいがそれは別の機会に_~

#### Github Pages では

この Web サーバのような設定が Github Pages にもある

少なくとも Github のリポジトリの直下に配置した index.html は root path に接続された場合の表示ファイルになるし、 直下に配置した `404.html` はアクセス先の html ファイルが存在しなかったときの表示ファイルとなる

 

ここで話を戻すと、 react 的には `/hoge` のパスが来た時に hoge.js を参照してページを表示したいのだが、あいにく Github Pages の Web サーバ設定では hoge.html を探そうとしてしまう

そして、 hoge.html がないので `404.html` が返ってしまう

これが、ローカル（`npm run start` で実行した worker の設定）では表示されていたはずのパスで参照されていた js ファイルが Github Pages 上では `404.html` が表示されてしまうワケである

 

逆を返せば、 Github Pages には `/hoge` = hoge.js の発想がないので、 `404.html` にその役割を担うスクリプトを書いて、無理やり `/hoge` のパスでアクセスしてきた場合

`/hoge` => `404.html` が表示される => スクリプトによって hoge.js を参照するようになる

という具合に意図したファイルを擬似的に参照させてあげることも可能である

~必ず 302 の Http ステータスを返すリクエストを経由してからユーザにお届けすることになるので非効率的ではあるのだが、そこは HashHistory を使って URL を a bit messy であることを許容するかどちらを取るかの問題だよね~

 

さて、 `404.html` にリダイレクト処理を書いたスクリプトで世界を救う説明が終わったので次はスクリプトの中身を見ていく（実はめちゃくちゃシンプル）

### `404.html` の中身

ほぼ全容は以下の通りである

```javascript
var segmentCount = 0;
var l = window.location;
l.replace(
  l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
  l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
  l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
  (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
  l.hash
);
```

L3 で URL の置換を行なっている

```javascript
l.replace(/* ...(略)... */)
```

replace メソッドは文字通り"置換"なので、 `window.history` に `pushState` しないので、ブラウザ履歴として残らない

次に、 L5 に説明するために `xxx.github.io/hoge` にアクセスした場合を想定する

```javascript
l.pathname.split('/') // => ["", "hoge"]
          .slice(0, 1 + segmentCount) // => ""
          .join('/') // => ""
```

次に L6

```javascript
l.pathname.slice(1) // => "hoge"
          .split('/') // => ["hoge"]
          .slice(segmentCount) // => "hoge"
          .join('/') // => "hoge"
          .replace(/&/g, '~and~') // => "hoge" (クエリ判定)
```

L7 の search メソッドは `/hoge?p=1` の `?` 以降を取り出すメソッド（今回は関係なし）

```javascript
(l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '')
```

要は `https://xxx.github.io/?p=/hoge` のように変換する

これによって、パス的には `xxx.github.io` にクエリ付きパラメータでアクセスしたのと一緒になるのでルートに飛ばされるという寸法である

~これと `HashHistory` どっちが好みかは意見が割れそうだが~

 

受け取り側(`index.html`)の内容は以下の通り

```javascript
(function(l) {
  if (l.search) {
    var q = {};
    l.search.slice(1).split('&').forEach(function(v) {
      var a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + (q.p || '') +
        (q.q ? ('?' + q.q) : '') +
        l.hash
      );
    }
  }
}(window.location))
```

わざわざ解説しないが、先ほどの逆の手順で再度解析して適切な送信先に replaceState で飛ばしている
