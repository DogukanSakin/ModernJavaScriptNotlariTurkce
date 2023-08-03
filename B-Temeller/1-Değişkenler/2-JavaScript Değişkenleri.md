## JavaScript'te Değişken Tanımlamaları

JavaScript'te değişken tanımlayabilmenin 3 farklı yolu vardır. Bu yollar için anahtar kelimeler:

- let 
- var
- const

## let ve var

let, ECMAScript 6 (ES6) olarak da bilinen ECMAScript 2015 standardıyla birlikte JavaScript'e tanıtılmıştır. Bu standardın yayın tarihi Haziran 2015'tir.

ES6 öncesinde, JavaScript'te değişken tanımlamak için var anahtar kelimesi kullanılıyordu. Ancak var anahtar kelimesi, bazı kapsam ve ömür yönetimi problemlerine neden olabiliyordu. ES6 ile birlikte let anahtar kelimesi tanıtılarak bu problemler giderildi ve daha güçlü bir değişken tanımlama mekanizması sağlandı.

let anahtar kelimesi ile tanımlanan değişkenler, blok kapsamlıdır. Yani, değişken sadece tanımlandığı blok içinde erişilebilir ve dışarıda kullanılamaz. 

Örnek tanımlama:

```js
let count = 10;
```

Bunu var ile yazarsak:

```js
var count = 10;
```

## let ve var farklılıkları

- Kapsam: let ile tanımlanan değişkenler, blok kapsamlıdır. Yani, değişken sadece tanımlandığı blok içinde erişilebilir ve dışarıda kullanılamaz. Öte yandan, var ile tanımlanan değişkenler fonksiyon kapsamlıdır. Yani, değişken tanımlandığı fonksiyon içinde erişilebilir ve fonksiyon dışında da erişilebilir.

```js
  {
    let x = 10;
    var y = 20;
  }
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // 20
```

- Ömür: let ile tanımlanan değişkenlerin ömrü, tanımlandığı blok içindedir ve blok dışında kullanılamazlar. Bu nedenle, blok sona erdiğinde bellekten otomatik olarak silinirler. var ile tanımlanan değişkenlerin ömrü ise, tanımlandığı fonksiyonun ömrüyle aynıdır. Fonksiyon sona erdiğinde veya program tamamlandığında bellekten silinirler. Bu yüzden bellek sağlığı için let kullanımı daha sağlıklı olabilir.

- Değişken Hissesi (Hoisting): let ile tanımlanan değişkenler, tanımlandıkları yerdeki kapsamın başına kadar hissedilmezler. Bu, değişkenin tanımlanmasından önce erişilmeye çalışıldığında hata alınmasını sağlar. Öte yandan, var ile tanımlanan değişkenler, değişkenin tanımlanmasından önce bile erişilebilirler. Bu durum, değişkenin yukarı kaldırılması anlamına gelir (hoisting).

```js
console.log(x); // undefined
console.log(y); // ReferenceError: y is not defined

var x = 10;
let y = 20;
```

- İkili Bildirimsel Kısıtlama (Duplicate Declaration Restriction): let ile aynı isimle birden fazla değişken tanımlamak aynı kapsam içinde hata oluşturur. Yani, aynı blok içinde aynı isme sahip birden fazla let değişkeni tanımlanamaz. Öte yandan, var ile aynı isimle birden fazla değişken tanımlamak mümkündür, ancak bu durum genellikle hatalara neden olabilir.

```js
let x = 10;
let x = 20; // SyntaxError: Identifier 'x' has already been declared

var y = 10;
var y = 20; // No error
```
## Ne Zaman Var, Let, Const Kullanmalıyız?

- Değerin değiştirilmemesi gerekiyorsa her zaman const kullanılmalı.
- Tür değiştirilmeyecekse her zaman const kullanılmalı. (Array'ler ve Object'ler)
- let'i yalnızca const kullanamıyorsak kullanmalıyız.
- Var'ı yalnızca eski tarayıcıları desteklemek ZORUNLU ise kullanmalıyız.


