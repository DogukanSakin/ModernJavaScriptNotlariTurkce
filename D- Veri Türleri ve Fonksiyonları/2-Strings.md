## Strings

String'ler metinleri temsil eder. String'ler tek tırnak veya çift tırnak içinde tanımlanabilir.

```js
let firstName = 'John';
let lastName = "Smith";
```

Multi-line string'ler şu şekilde tanımlanabilir:

```js

let message = `Hello World!
This is a multi-line string.
I hope you like it!
`;
```

String'lere indexlerle erişilebilir. String'in ilk karakteri 0. index'tir.

```js
let firstName = 'John';
console.log(firstName[0]); // J
```

String'ler üzerinde iterasyon yapılabilir.

```js
let firstName = 'John';

for (let i = 0; i < firstName.length; i++) {
    console.log(firstName[i]);
}
```

String'ler index atamalarıyla değiştirilemez.

```js
let firstName = 'John';

firstName[0] = 'S'; // Bu satır çalışmayacaktır.
```

## toUpperCase() ve toLowerCase()

`toUpperCase()` fonksiyonu string'in tüm karakterlerini büyük harfe çevirir. Örneğin:

```js
let firstName = 'John';
let upperFirstName = firstName.toUpperCase();
console.log(upperFirstName); // JOHN
```

`toLowerCase()` fonksiyonu string'in tüm karakterlerini küçük harfe çevirir. Örneğin:

```js
let firstName = 'John';
let lowerFirstName = firstName.toLowerCase();
console.log(lowerFirstName); // john
```

## indexOf()

`indexOf()` fonksiyonu string'in içindeki bir karakterin index'ini döndürür. Hiçbir şey bulunmazsa -1 döndürür. Örneğin:

```js
let firstName = 'John';
let index = firstName.indexOf('o');
console.log(index); // 1
```

`indexOf()` döngüyle de kullanılabilir. Bir string'teki aranan karakterin her pozisyonu sırasiyla bulunabilir. Örneğin:

```js
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` ); // Found at 7, found at 17, found at 27
  pos = foundPos + 1; // continue the search from the next position
}
```

## lastIndexOf()

`lastIndexOf()` fonksiyonu string'in içindeki bir karakterin son bulunduğu index'i döndürür. Hiçbir şey bulunmazsa -1 döndürür. Örneğin:

```js
let firstName = 'John';
let index = firstName.lastIndexOf('o');
console.log(index); // 2
```

## includes()

`includes()` fonksiyonu string'in içindeki bir karakterin bulunup bulunmadığını döndürür. Örneğin:

```js
let firstName = 'John';
let result = firstName.includes('o');
console.log(result); // true
```

## startsWith()

`startsWith()` fonksiyonu string'in başlangıcının aranan karakterle başlayıp başlamadığını döndürür. Örneğin:

```js
let firstName = 'John';
let result = firstName.startsWith('J');
console.log(result); // true
```

## endsWith()

`endsWith()` fonksiyonu string'in sonunun aranan karakterle bitip bitmediğini döndürür. Örneğin:

```js
let firstName = 'John';
let result = firstName.endsWith('n');
console.log(result); // true
```

## slice()

`slice()` fonksiyonu string'in bir kısmını alır. İkinci parametre verilmezse string'in geri kalanı alınır. Örneğin:

```js
let firstName = 'John';
let result = firstName.slice(1, 3);
console.log(result); // oh
```

## substring()

`substring()` fonksiyonu string'in bir kısmını alır. Örneğin:

```js
let firstName = 'John';
let result = firstName.substring(1, 3);
console.log(result); // oh
```

## substr()

`substr()` fonksiyonu string'in bir kısmını alır. Örneğin:

```js
let firstName = 'John';
let result = firstName.substr(1, 3);
console.log(result); // ohn
```

## localeCompare()

`localeCompare()` fonksiyonu iki string'i karşılaştırır. Bu fonksiyon karşılaştırma dilini bilir. Örneğin:

```js
let firstName = 'John';
let result = firstName.localeCompare('John');
console.log(result); // 0
```

