## Return'de Boşluk Bırakmak

Bir fonksiyondan bir değer return ederken arada boşluk bırakırsak JavaScript otomatik olarak `;` ekler. Bu yüzden return'de boşluk bırakmamaya özen göstermeliyiz.

```js
return
 (some + long + expression + or + whatever * f(a) + f(b)) // bu ifade hata verecektir.
```

Doğrusu:

```js
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```
