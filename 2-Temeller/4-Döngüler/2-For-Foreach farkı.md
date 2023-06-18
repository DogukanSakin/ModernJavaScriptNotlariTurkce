## For - Foreach Farkı

JavaScript'te for ve forEach döngü yapıları, farklı senaryolarda tercih edilir ve bazı farklara sahiptir.

For:

- Genel amaçlı bir döngü yapısıdır ve çeşitli durumlar için uygundur.
- Döngünün her bir adımında, kontrol değişkeni üzerinden koşul kontrolü yapılır ve döngü bloğu çalıştırılır.
- Kontrol değişkeni, başlangıç değeri, bitiş koşulu ve adım değeri belirtilerek kontrol edilir.
- break ifadesiyle döngü erken sonlandırılabilir veya continue ifadesiyle bir adım atlanabilir.
- Döngüdeki her bir elemana erişim sağlamak için indeks kullanılabilir.

Örneğin:

```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}    
```

forEach:

- Dizi üzerinde gezinmek için özel olarak tasarlanmış bir döngü yapısıdır.
- Dizi elemanlarına erişim sağlamak için daha kolay ve okunabilir bir yol sunar.
- Dizi üzerinde gezinirken her eleman için belirtilen bir fonksiyonu çalıştırır.
- Dizi elemanlarının sırasını korur ve indekslere gerek duyulmadan erişim sağlar.
- break veya continue ifadeleri kullanılamaz.

Örneğin:

```js
array.forEach(function(element) {
  console.log(element);
});
```

Farklılıklar:

- for döngüsü, daha genel amaçlıdır ve her türlü döngü senaryosuna uygundur. forEach ise özellikle bir dizi üzerinde gezinmek için kullanılır.
- for döngüsü, indeks tabanlı erişim sağlar ve indeksleri kontrol ederek dizi üzerinde gezinir. forEach ise her eleman için belirtilen bir fonksiyonu çalıştırarak diziye erişir.
- for döngüsü, break veya continue ifadeleriyle kontrol akışını değiştirebilirken, forEach bu imkanı sağlamaz.
- forEach, daha okunabilir bir sözdizimi sunar ve daha az kod yazmanızı sağlar, ancak bazı durumlarda performans açısından for döngüsü tercih edilebilir.