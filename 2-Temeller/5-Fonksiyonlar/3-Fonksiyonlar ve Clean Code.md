## Fonksiyonlar ve Clean Code

JavaScript'te fonksiyonların clean code (temiz kod) prensiplerine uygun bir şekilde isimlendirilmesi ve kullanılması, kodun okunabilirliğini artırır ve bakımını kolaylaştırır. 

Anlamlı İsimlendirme: Fonksiyonlara açıklayıcı ve anlamlı isimler vermek önemlidir. Fonksiyonun amacını ve ne yaptığını açık bir şekilde ifade etmesi gerekir. Bu sayede kodu okuyan diğer geliştiriciler, fonksiyonu kullanırken amacını anlayabilir. 

Kötü: 

```
function f(){

}
```

İyi:

```js
function calculateSum(numbers) {
  // Numbers dizisindeki sayıların toplamını hesaplar.
  // ...
}
```

Tek Sorumluluk İlkesi: Fonksiyonlar tek bir işlevi yerine getirmelidir. Fonksiyonlar, kod parçacıklarını mantıksal olarak bölerek daha anlaşılır hale getirir. Bir fonksiyonun tek bir işlevi olması, hataları bulmayı, kodu anlamayı ve bakımı kolaylaştırır. 

Kötü: 

```js
function calculateSumAndAverage(numbers) {
  // Numbers dizisindeki sayıların toplamını ve ortalamasını hesaplar.
  // ...
}
```

İyi:

```js
function calculateSum(numbers) {
  // Numbers dizisindeki sayıların toplamını hesaplar.
  // ...
}
```


DRY (Don't Repeat Yourself) İlkesi: Kod tekrarından kaçınılmalıdır. Aynı veya benzer işlemleri yapan kod parçacıkları, ayrı bir fonksiyona taşınmalıdır. Bu şekilde kod tekrarı azalır, bakım kolaylaşır ve hataların önüne geçilir.

Kötü:
    
```js
function calculateAreaOfSquare(sideLength) { ... }
function calculateAreaOfRectangle(width, height) { ... }
```

İyi:

```js
function calculateArea(length, width) {
  // Çeşitli şekillerin alanını hesaplar.
  // ...
}
```

İyi Dökümantasyon: Fonksiyonların nasıl kullanılacağı ve ne yapacağı ile ilgili açıklamalar içeren dökümantasyon yazılmalıdır. Bu, fonksiyonun kullanımı hakkında bilgi verir ve diğer geliştiricilere rehberlik eder.

```js
/**
 * İki sayının toplamını hesaplar.
 * @param {number} a - İlk sayı.
 * @param {number} b - İkinci sayı.
 * @returns {number} İki sayının toplamı.
 */
function calculateSum(a, b) {
  return a + b;
}
```
