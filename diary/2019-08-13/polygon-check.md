# 関節部のポリゴン数を減らした時にどうなるか実験する

タグ `理想のモデルを作りたい` `Blender` `モデリング` `実験`

## 対象者

モデルの基礎を理解したい人

## 結論

[→成果](https://github.com/shimomuh/model-base/commit/47fab2c9a50a566441e37d14577b1aa4d5e51eec)

ポリゴン数が少なくなるとどういう見え方をするのかを実験してみた

 

なお、変化がわかりやすくするため UV 画像をそのままテクスチャとして貼ってみた

UV 画像とかテクスチャとして貼って表現することについては、 [かんたんBlender講座](http://krlab.info.kochi-tech.ac.jp/kurihara/lecture/cg/BlenderWeb_Hayashi/html/materialAndTexture.html) の UV 展開あたりを参考にしてほしい

### メッシュを少なくしてみた場合

|先日のメッシュ|関節部のメッシュを少なくしてみた|
|---|---|---|
|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard01.gif)|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard02.gif)|

 

これをみてわかったことは以下の通りである

関節部分のポリゴンの面積が広い方が

* テクスチャは大きく変化してしまうのでつぶれやすく
* ポリゴンは変化領域が広いので自動ウェイトで周囲(関節に近いポリゴン)が影響を受けにくい

ということである

また、このあと最大まで減らしたケースまで検証してみた

### 関節部のポリゴン数を最大限まで少なくした場合

|関節部のポリゴン数を最大限まで少なくした場合|そのときのウェイト|
|---|---|
|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard05.gif)|![](https://raw.githubusercontent.com/shimomuh/model-base/master/structure-base/standard05-weight.png)|

 

あまり支障なさそうにみえた

むしろウェイトは絶妙な配分で割り当てられているまであるなと感じた

 

この検証によって 90 度曲げたい場合は関節部分が yz 軸平面において `縦 >= 横` でなければポリコンがめり込んでしまうことがわかった
