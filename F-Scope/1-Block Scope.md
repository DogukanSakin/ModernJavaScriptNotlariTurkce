## Block Scope

JavaScript'te block scope, bir değişkenin sadece belirli bir kod bloğu içinde erişilebilir olduğu bir kapsam türüdür. Bir block scope, genellikle süslü parantezler ({}), if-else ifadeleri, döngüler ve fonksiyonlar gibi yapılar tarafından tanımlanan kod blokları içinde oluşur.

ES6 (ECMAScript 2015) ile birlikte, let ve const anahtar kelimeleri tanıtılarak block scope desteği JavaScript'e eklenmiştir. Bu, var anahtar kelimesinin kullanıldığı function scope'dan farklıdır. 

```js
function exampleIfScope() {
  if (true) {
    let x = 10; // sadece if bloğu içinde erişilebilir
    console.log(x); // çıktı: 10
  }

  console.log(x); // Hata: x tanımsız, çünkü x sadece if bloğu içinde tanımlı
}
```

```js
function exampleForLoopScope() {
  for (let i = 0; i < 5; i++) {
    // i sadece for döngüsü bloğu içinde erişilebilir
    console.log(i); // çıktı: 0, 1, 2, 3, 4
  }

  console.log(i); // Hata: i tanımsız, çünkü i sadece for döngüsü bloğu içinde tanımlı
}
```

```js
function exampleFunctionScope() {
  let a = 1;

  if (true) {
    let b = 2;
    console.log(a); // çıktı: 1, a function scope içinde olduğu için erişilebilir
    console.log(b); // çıktı: 2, çünkü aynı block scope içinde
  }

  console.log(a); // çıktı: 1, hala function scope içinde
  console.log(b); // Hata: b tanımsız, çünkü sadece if bloğu içinde tanımlı
}
```

```js
function exampleConstScope() {
  const pi = 3.14159;
  console.log(pi); // çıktı: 3.14159

  if (true) {
    const pi = 3.14; // farklı bir const değişkeni
    console.log(pi); // çıktı: 3.14, çünkü const, block scope içinde tekrar tanımlanabilir
  }

  console.log(pi); // çıktı: 3.14159, çünkü orijinal const hala mevcut ve değeri değişmedi
}
```

Not: var anahtar kelimesi block scope desteklemez:

```js
function exampleVarScope() {
  if (true) {
    var x = 10; // var, function scope içinde tanımlanır
    console.log(x); // çıktı: 10
  }

  console.log(x); // çıktı: 10, çünkü x function scope içinde tanımlı
}
```
