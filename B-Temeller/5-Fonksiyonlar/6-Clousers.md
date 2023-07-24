## Clousers

JavaScript'te "closure" (kapanım), bir fonksiyonun dışarıdan bağımsız bir şekilde kendi kapsamındaki değişkenlere erişebilmesi ve bu değişkenlerin yaşam döngüsünün fonksiyonunun çalışması süresince korunmasıdır. Bu, fonksiyonların içerisindeki değişkenleri, o fonksiyon çalıştıktan sonra bile hafızada tutmasını ve sonraki çağrılarda erişilebilir kılmasını sağlar.

Closures, fonksiyonları daha güçlü ve esnek hale getiren önemli bir özelliktir ve iyi anlaşılması gereken bir konudur. Bir closure oluşması için şu koşulların sağlanması gereklidir:

- Bir iç fonksiyonun, bir dış fonksiyonun içinde tanımlanması.
- İç fonksiyonun, dış fonksiyonun bir değerini referans alması (yani yakalaması).

```js
function outerFunction() {
  const outerVariable = 'Bu bir dış değişkendir';

  function innerFunction() {
    console.log(outerVariable); // Closure: outerVariable'e erişiyor
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Çıktı: "Bu bir dış değişkendir"
```

innerFunction, outerFunction içinde tanımlanmış ve outerVariable adlı değişkeni referans almıştır. innerFunction fonksiyonu, outerFunction fonksiyonunun çalışması tamamlandıktan sonra bile hala outerVariable değişkenine erişebilir ve değeri korunur. Bu durum, closure özelliği sayesinde gerçekleşir.

Closure'lar, genellikle fonksiyon fabrikaları (function factory) oluşturmak veya özel durumları yönetmek gibi durumlarda kullanışlıdır. Özellikle event yönetimi ve asenkron işlemler gibi alanlarda sıkça rastlanır.

Aşağıda closure kullanarak basit bir counter (sayaç) fonksiyonu örneği verilmiştir:

```js
function createCounter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  return increment;
}

const counter = createCounter();

console.log(counter()); // Çıktı: 1
console.log(counter()); // Çıktı: 2
console.log(counter()); // Çıktı: 3
```