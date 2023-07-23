## String Karşılaştırmaları

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

## Diğer Türler

JavaScript, farklı türlerdeki değerleri karşılaştırırken değerleri sayılara dönüştürür.

```js
alert( '2' > 1 ); // true, 
alert( '01' == 1 ); // true

alert( true == 1 ); // true
alert( false == 0 ); // true
```

## Object.is()

`Object.is(a, b)` yöntemi, `===` ile aynı şekilde çalışır, ancak iki özel durumda farklı davranır:

- `NaN` ile `NaN`'yi karşılaştırırken `true` döndürür.

- `0` ile `-0`'yı karşılaştırırken `false` döndürür.

```js
alert( Object.is(NaN, NaN) ); // true
alert( Object.is(0, -0) ); // false
```
