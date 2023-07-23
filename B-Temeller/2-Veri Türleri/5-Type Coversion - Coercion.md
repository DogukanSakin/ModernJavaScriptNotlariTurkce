## Type Conversion - Coercion

JavaScript'te, "type conversion" (tür dönüşümü) ve "type coercion" (tür dönüşümü) terimleri, bir veri türünden başka bir veri türüne geçişi ifade etmek için kullanılır. Bu terimler sıklıkla karıştırılır, ancak farklı anlamlara gelirler.

## Type Conversion

Type conversion, bir veri değerini bir başka veri türüne dönüştürme işlemidir ve genellikle açıkça belirtilir. Bu işlem, değerin asıl türünü değiştirmez, sadece geçici olarak başka bir türe dönüşür. JavaScript, çeşitli veri türleri arasında dönüşüm yapmak için bazı yöntemler ve fonksiyonlar sağlar.

Örneğin:

```js
let strNumber = "42";
let numNumber = Number(strNumber);

let numValue = 42;
let strValue = String(numValue);

let boolValue = true;
let strBool = String(boolValue);
```

## Type Coercion

Type coercion ise, JavaScript'in ifade değerlerini farklı veri türlerine otomatik olarak dönüştürme yeteneğini ifade eder. Bu, bazen beklenmedik sonuçlara veya istenmeyen davranışlara neden olabilir. JavaScript, ifadelerin içinde farklı veri türleri bulunduğunda otomatik olarak bazı tür dönüşümleri yapar.

Örneğin:

```js
console.log("42" == 42); // true, "42" otomatik olarak 42'ye dönüştürülür
console.log("1" + 1); // "11", 1 sayısı stringe dönüştürülerek birleştirme işlemi yapılır
console.log(true + 1); // 2, true boolean değeri sayıya dönüştürülerek toplama yapılır
```