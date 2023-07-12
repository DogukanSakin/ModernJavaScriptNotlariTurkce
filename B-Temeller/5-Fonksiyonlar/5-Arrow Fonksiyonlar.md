## Arrow Fonksiyonlar

Arrow fonksiyonlar, fonksiyonları daha kısa yazmamızı sağlayan bir fonksiyon yazım şeklidir.

```js
const myFunction = () => {
    console.log("Hello World!");
};
```

Bu fonksiyonların this keyword'ü yoktur. Bu yüzden this keyword'ünü kullanmak istediğimizde dikkatli olmamız gerekir.

```js
const myObject = {
    myMethod: () => {
        console.log(this); // window
    }
};
```
