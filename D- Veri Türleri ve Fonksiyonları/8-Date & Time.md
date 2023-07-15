## Date & Time

JavaScript'te tarih ve saat, `Date` nesnesi kullanılarak temsil edilir. Date nesnesinde aylar sıfırdan başlar. Yani Ocak ayı 1 olarak değil 0 olarak temsil edilir. Günlerde benzer şekilde pazar gününden başlar ve pazar günü de 0 olarak temsil edilir.


```js
const now = new Date();
console.log(now); // 2020-12-01T12:00:00.000Z
```

Date içerisinde yer alan fonksiyonlar ile tarih ve saat ile ilgili işlemler yapabiliriz. Bu fonksiyonlar:

- `getFullYear()` - Yıl
- `getMonth()` - Ay
- `getDate()` - Gün
- `getHours()` - Saat
- `getMinutes()` - Dakika
- `getSeconds()` - Saniye
- `getMilliseconds()` - Milisaniye
- `getTime()` - Zaman Damgası
- `getDay()` - Haftanın Günü

Benzer şekilde tüm bu fonkisyonların `set` ile başlayan karşılıkları da bulunmaktadır.

Date nesnesini oluştururken autocorrect özelliği yanlış tarihlerin düzeltilmesini sağlar. Örneğin, 32 Aralık tarihi 1 Ocak'a dönüştürülür.

```js
const date = new Date(2013, 0, 32);
console.log(date); // 2013-01-01T12:00:00.000Z
```

## İki Tarih Arasındaki Farkı Bulmak

İki tarih arasındaki farkı bulmak için `getTime()` fonksiyonu kullanılır. Bu fonksiyon, 1970 yılından bu yana geçen milisaniye cinsinden zamanı döndürür. Bu sayede iki tarih arasındaki farkı bulabiliriz.

```js
const now = new Date();
const past = new Date(2020, 0, 1);

const diff = now.getTime() - past.getTime();
console.log(diff); // 31536000000
```

## Date.parse()

`Date.parse()` fonksiyonu, bir tarih dizesini milisaniye cinsinden zaman damgasına dönüştürür.

```js
const msec = Date.parse("March 21, 2012");
console.log(msec); // 1332288000000
```

## Tarih Formatlama

`toLocaleDateString()` fonksiyonu, tarihi yerel tarih biçimine dönüştürür.

```js
const date = new Date();
console.log(date.toLocaleDateString("tr-TR")); // 1.12.2020
```

