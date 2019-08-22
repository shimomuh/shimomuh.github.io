# Google Analytics のタグを埋め込んで訪問者を分析しよう

タグ `このサイトの生い立ち` `分析`

## 対象者

Google Analytics を知らない、忘れたという人たち

## 結論

最終的に html に以下のようなタグを埋め込むのがゴール

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/8d688a0212a7c1a991adb4af45c56bc6d64aa668)

## 過程

この記事時点での最新なので、見た人によっては最新じゃないかもめ :bow:

Google でアカウントは作っている前提として

[Google Analytics](https://analytics.google.com/analytics/web/) にアクセスすると、ログインを求められてログインするとリダイレクトで Analytics のトップに飛ばされる

 

アカウントを作れ！と言われるので（これは分析用のアカウントなので Google アカウントとは別）

以下のように適当に埋めて、最後に [トラッキング ID を取得] のボタンをクリック

![](/static/diary/2019-07-21/analytics.png)

その後に利用規約が出てくるので ~読み飛ばして~ 内容を確認しながらチェックを入れていく

この当時は GDPR が出てそういえば1年前にそんなの適応されたなーとか思い出した

 

あとは以下のトラッキングコードに書かれたコードをコピペで :ok_hand:

![](/static/diary/2019-07-21/tracking-code.png)

## おまけ

おまけだけど重要な話

以下の有効期限を変更しておかないとユーザのデータやイベントのデータは保持されず、破棄されちゃうので注意！

![](/static/diary/2019-07-21/expiration.png)

気にしない人はそのままで :ok_hand:
