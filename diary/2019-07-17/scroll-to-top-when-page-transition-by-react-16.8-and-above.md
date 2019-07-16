# react-router で遷移したときにスクロール位置を Top に戻す(React 16.8 and above 版)

タグ `このサイトの生い立ち` `React`

## 対象者

react-router を使っていて、ページ遷移後にスクロール位置が遷移前と同じ場所になっていて困っている人

## 結果

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/638a25b6e9aa4d6fc39187583a98c579427256a0)

### before

![](/diary/2019-07-17/before.gif)

### after

![](/diary/2019-07-17/after.gif)

## 過程

まずは動きをみてもらってどう変わったかをみてもらった

仕組みは案外簡単で [【React】React-Routerで別パスに行った時に上にスクロールしてくれない時](https://taroken.org/react-router-scroll-top/) を参考にさせてもらって作ったのだが、この記事の中に [公式](https://reacttraining.com/react-router/web/guides/scroll-restoration) をみよ！とあったのでみてみたら

 

> Or if you are running React 16.8 and above, you can use hooks:

```javascript
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
```

とあったので丸パクリしたというわけである

せっかくなので新鮮なネタにしてみたので上記記事とも差分はある
