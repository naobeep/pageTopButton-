# pageTop

トップに戻るボタンを作成・制御する script。

## 使い方

- integral
  - `pageTop.js`を直接読み込んで使用します。
  - Internet Explorer で使用する場合は`polyfills.js`も読み込む必要があります。
  - スムーススクロールを実装する場合は`smoothScroll.js`も読み込む必要があります。
  1. (`polyfills.js`を読み込む)
  2. (`smoothScroll`を読み込む)
  3. `pageTop.js`を読み込む
  4. `main.js`等で`PageTop`をインスタンスする。
  5. (`smoothScroll()`を呼び出す。)

    ```html
    <script src="~/polyfills.js"></script>
    <script src="~/pageTop.js"></script>
    <script src="~/smoothScroll_IE.js"></script>
    <script src="~/main.js"></script>
    ```

### 書式

```js
const settings = {
  // プロパティはすべて省略可。省略した場合は下記の値がデフォルト値として設定されます。
  baseColor: '#040', //  (string) ボタンの色
  borderColor: '#FFF', //  (string) ボタンの縁取りの色
  borderRadius: 10, //  (number) ボタンの角丸の設定
  borderThickness: 1, //  (number) ボタンの縁取りの幅
  fontWeight: '500', //  (string) `TOP`の文字のfont-weight
  marginRight: 20, //  (number) ボタンの画面右端からの距離(px)
  marginBottom: 20, //  (number) ボタンの画面下端かｒなお距離(px9
  size: 50, //  (number) ボタンのサイズ(px)。`TOP`の文字、上向きの`△`のサイズはボタンサイズに連動します。
  textColor: '#000', //  (string) `TOP`の文字色。上向きの`△`の色もこれに連動します。
  transition: '.3s linear', //  (string) ボタン要素に掛かるtransition
};
```

```js
new PageTop(settings);
```
