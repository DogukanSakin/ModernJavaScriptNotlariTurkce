## CommonJS

CommonJS, JavaScript için bir modül sistemi olup, dildeki modüllerin yazılıp yüklenmesini standartlaştırmayı amaçlar. Başlıca olarak sunucu tarafı JavaScript uygulamaları için tasarlanmış olup, Node.js adlı açık kaynaklı sunucu tarafı JavaScript çalışma zamanında yaygın bir şekilde kullanılmıştır.

CommonJS'in temel fikri, JavaScript kodunu küçük, tekrar kullanılabilir modüllere bölmek ve büyük kod tabanlarını yönetmek ve bakımını yapmayı kolaylaştırmaktır. Her bir modül kendi kapsamına sahip olabilir ve modülden belirli fonksiyonlar, nesneler veya değişkenler başka kısımlarda kullanılmak üzere dışa aktarılabilir (export). Diğer modüller de bu dışa aktarılan öğeleri içe aktararak (import) temiz bir sorumluluk ayrımı oluştururlar.

```js
// math.js
exports.topla = function(a, b) {
  return a + b;
};

exports.cikar = function(a, b) {
  return a - b;
};
```

```js
// app.js - math.js modülünü içe aktaran ve kullanarak işlem yapan bir CommonJS modülü
const matematik = require('./math');

console.log(matematik.topla(5, 3)); // Çıktı: 8
console.log(matematik.cikar(10, 2)); // Çıktı: 8
```
