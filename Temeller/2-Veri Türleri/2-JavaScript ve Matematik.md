## JavaScript ve Matematik

JavaScript'te matematiksel işlemlerin bütününü güvenle yapabilirsiniz. Sıfıra bölme gibi durumlarda kod direkt olarak çökmez ve `Infinity` veya `-Infinity` gibi özel değerler döndürür. Ayrıca, `NaN` (Not a Number) değeri de matematiksel işlemler sonucunda elde edilebilir.

```
alert( 1 / 0 ); // Infinity
alert( "not a number" / 2 ); // NaN
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
```