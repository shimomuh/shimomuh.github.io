# モデルに自動のウェイトペイントを付与した際の挙動を確かめる

タグ `理想のモデルを作りたい` `Blender` `モデリング`

## 対象者

いい感じに動くモデルを作りたい人

## 背景

[関節のボーンとポリゴンフローに関するTIPS](https://dskjal.com/blender/the-tips-of-joint.html) という良サイトに出会ったので、なるべくいい感じでオートウェイトを付与していい感じに動くものを作りたい

## 結果

[→成果](https://github.com/shimomuh/model-base/commit/fbcb8de87a14c2e4489236bee49199485adeb0b4)

今回は時間がないので仕組みのベースとなる考え方だけ

上記の記事には書いてあるけど、実際に試してみないとと思ってやった

## 過程

以下のようなボーンをモデルに組み込んで以下のようにカットした場合 [Ctrl + P] で自動でウェイトペイントを割り当てると以下のような意図した結果が得られた

 

|ボーン|モデルのカット具合|ペイントウェイト|
|---|---|---|
|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/bone.png)|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/cut.png)|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/auto-weight-paint.png)|

 

これにより以下のような動作が実現できた

 

![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/move.gif)

記事の通りになった（納得

明日こそ手に着手できるといいなぁ

