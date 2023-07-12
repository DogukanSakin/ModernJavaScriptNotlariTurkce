## Symbol

Bir objenin key'i sadece string veya symbol olabilir. JavaScript'te Symbol, benzersiz ve değişmez bir veri türüdür. Symbol'ler, diğer JavaScript değerlerinden farklı olarak, her biri tamamen eşsiz olan bir anahtara sahiptir. Bu nedenle, Symbol'ler özellikle nesne özelliklerini tanımlamak için kullanılırken çakışma riskini en aza indirmek amacıyla tercih edilir.

```js
const mySymbol = Symbol();
const myOtherSymbol = Symbol();
console.log(mySymbol === myOtherSymbol); // false
```

Symbol'ler genellikle nesne özellikleri olarak kullanılır. Bu, özelliklerin çakışma riskini azaltır çünkü Symbol'lerin anahtarları diğer özelliklerle karışmaz:

```js
const mySymbol = Symbol("Açıklama");
const obj = {};

obj[mySymbol] = "Bu Symbol ile ilişkilendirilen bir değer";
console.log(obj[mySymbol]); // Bu Symbol ile ilişkilendirilen bir değer
```

Symbol'ler bir objenin içerisinde iterasyon esnasında görünmezler. Bu, Symbol'lerin özelliklerin çakışmasını önlemek için kullanıldığı anlamına gelir.

```js
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123
```

Symbol'ler, Object.getOwnPropertySymbols() veya Reflect.ownKeys() gibi özel yöntemler kullanılarak nesnelerdeki Symbol özelliklerini elde etmek için kullanılabilir.

Symbol'ler, JavaScript dilinde bazı yerleşik sembol değerlerine de sahiptir. Örneğin, Symbol.iterator, Symbol.match, Symbol.species gibi semboller, belirli işlemleri gerçekleştirmek üzere kullanılır ve özellikle veri yapılarının davranışlarını tanımlamak için önemlidir.