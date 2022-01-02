# pageTop

トップに戻るボタンを作成・制御する class モジュール。

## 使い方

- module
  - モジュールとして import してつかいます。Internet Explorer では使用できません。
  - 使用には`elementGenerator.js`が必要になります。
  1. `elementGenerator.js`を`pageTop.js`と同じ階層に格納する
  2. `main.js`に`pageTop.js`を import し、`PageTop`をインスタンスする。
  3. html で`main.js`を`type="module"`で読み込む。

    ```html
    <script src="~/main.js" type="module"></script>
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
