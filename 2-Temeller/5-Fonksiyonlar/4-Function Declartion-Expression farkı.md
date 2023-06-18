# Fonksiyon Declartion-Expression Farkı

JavaScript'te "Function Declaration" ve "Function Expression" olmak üzere iki farklı fonksiyon tanımlama yöntemi vardır. Bu iki yöntem arasındaki farklar aşağıdaki gibi özetlenebilir:

Function Declaration (Fonksiyon Bildirimi):

- Fonksiyonlar, function anahtar kelimesiyle ve isimleriyle birlikte doğrudan tanımlanır.
- Fonksiyon bildirimleri, tanımlandıkları kapsamın başına yükseltilir (hoisted). Bu nedenle, fonksiyon bildirimi, tanımlandığı yerden önce çağrılabilir.
- Fonksiyon bildirimi, global kapsamda, başka bir fonksiyon içinde veya blok içinde tanımlanabilir.

```js
function sayHello() {
  console.log("Merhaba!");
}

sayHello(); // Fonksiyon bildirimi çağrısı
```

Function Expression (Fonksiyon İfadesi):

- Fonksiyonlar, bir değişkene atanarak ifade edilir.
- Fonksiyon ifadeleri, değişkenin tanımlandığı yerden sonra çağrılabilir.
- Fonksiyon ifadeleri, değişkenin atanmasından sonra kullanılabilir.
- Function Expression, genellikle anonim fonksiyonlar (isimsiz fonksiyonlar) veya IIFE'ler (Immediately Invoked Function Expressions) oluşturmak için kullanılır.

```js
const sayHello = function() {
  console.log("Merhaba!");
};
```

Fonksiyon bildirimleri ve fonksiyon ifadeleri arasındaki en önemli fark, hoisting (yükseltme) davranışıdır. Fonksiyon bildirimleri hoisted olduğu için, tanımlandıkları yerden önce çağrılabilirler. Fonksiyon ifadeleri ise değişkenler olarak tanımlanır ve hoisted olmazlar, bu nedenle tanımlandıkları yerden sonra çağrılmaları gerekmektedir.

```js
sayHello(); // Fonksiyon bildirimi çağrısı
function sayHello() {
  console.log("Merhaba!");
}

sayHi(); // Hata: sayHi is not a function
var sayHi = function() {
  console.log("Merhaba!");
};
```
