## Typed Arrays

JavaScript'teki Typed Array, düşük seviyeli veri depolama ve manipülasyonu için kullanılan özel bir veri türüdür. Tipik JavaScript dizilerinden (Array) farklı olarak, Typed Array'ler belirli bir veri türünde (örneğin, sayılar veya baytlar) sabit uzunluğa sahip bir bellek alanıdır. Bu nedenle, Typed Array'ler daha az bellek tüketir ve veri işlemlerini daha hızlı hale getirir. Bu veri türleri, web tarayıcılarında ve Node.js gibi JavaScript çalıştırma ortamlarında bulunur.

JavaScript'te beş farklı türde Typed Array bulunmaktadır:

- Int8Array: 8-bit işaretli tam sayılar
- Uint8Array: 8-bit işaretsiz tam sayılar
- Int16Array: 16-bit işaretli tam sayılar
- Uint16Array: 16-bit işaretsiz tam sayılar
- Float32Array: 32-bit kayan noktalı sayılar

Bunlar, sayılarla çalışmak için kullanışlıdır ancak özel durumlar için tek başına yeterli değillerdir. Dolayısıyla, ECMAScript 2015 (ES6) ile birlikte Typed Array'leri destekleyen ve daha fazla esneklik sunan bir diğer veri türü de eklenmiştir:

- Uint8ClampedArray: 8-bit işaretsiz tam sayılar (0 ile 255 arasında) - Genellikle görüntü işleme ile ilgili kullanılır.
Typed Array'lerin kullanımı, ArrayBuffer adı verilen bir bellek alanında verileri saklayarak gerçekleştirilir. ArrayBuffer, sabit uzunlukta bellek bloklarının temelini oluşturur ve Typed Array'ler bu bellek bloklarının üzerinde çalışır. Bu, veri kopyalamayı önleyerek ve bellek kullanımını optimize ederek veri işlemlerini hızlandırır.

```js
const typedArray = new Uint8Array(10);

for (let i = 0; i < typedArray.length; i++) {
  typedArray[i] = i * 2;
}


for (let i = 0; i < typedArray.length; i++) {
  console.log(typedArray[i]);
}
```
