## && And Operatörü

Soldan sağa doğru işler ve ilk bulduğu hatalı değeri döndürür.

```js
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5
alert( null && 5 ); // null
alert( 0 && "hi" ); // 0
```

Tüm sonuçlar doğruysa en sonuncuyu döndürür:

```js
alert( 1 && 2 && 3 ); // 3, the last one
```
## !! Operatörü

Bir değerin boolean değerini döndürür.

```js
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```

## ?? Operatörü

Nullish coalescing operator olarakta bilinir. Eğer ilk değer null veya undefined ise ikinci değeri döndürür. Dile yeni eklenmiştir.

```js
let firstName = null;
let nickName = "Supercoder";
let currentName = firstName ?? nickName ?? "Anonymous"; // Supercoder
```

Bunu || operatörü ile de yapabiliriz. || Operatörü ilk true değere sahip olanı döndürür. ?? Operatörü ise ilk tanımlanmış değeri döndürür.

Örneğin:

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```