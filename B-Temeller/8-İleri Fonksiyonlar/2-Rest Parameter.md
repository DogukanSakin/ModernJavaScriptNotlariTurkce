## Rest Parameter

Rest parameter, bir fonksiyona sınırsız sayıda argüman göndermek için kullanılır. Rest parameter, fonksiyonun son parametresi olmalıdır. Rest parameter, bir dizi olarak fonksiyona gönderilir.

```js   
function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}
```

Fonksiyonda birden fazla parametre varsa rest paramter en son parametre olmalıdır.

```js
function sum(a, b, ...args) {
  let total = a + b;
  for (let i of args) {
    total += i;
  }
  return total;
}
```

## arguments

`arguments` değişkeni, fonksiyona gönderilen tüm argümanları içeren bir dizidir. `arguments` değişkeni, fonksiyonun içinde tanımlanmıştır ve fonksiyonun her yerinden erişilebilir.

```js
function sum() {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
}
```
Arrow fonksiyonlarında `arguments` değişkeni kullanılamaz.



