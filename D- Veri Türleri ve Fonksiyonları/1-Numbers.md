## Numbers 

JavaScript'te iki türlü sayı vardır:

- **Number**: 64 bitlik bir sayıdır. 2^53-1 ile -2^53 arasında değer alabilir.
- **BigInt**: 64 bitlik bir sayıdan daha büyük sayıları temsil etmek için kullanılır.

Değişken tanımlarken okunabilirlik için _ (underscore) kullanılabilir. Örneğin:

```js
let myNumber = 1_000_000;
```


## Numbers to String

Bir sayıyı string'e çevirmek için `toString()` fonksiyonu kullanılır. Örneğin:

```js
let myNumber = 123;
let myString = myNumber.toString();
console.log(myString); // Çıktı: "123"
```

## toFixed()

`toFixed()` fonksiyonu, sayının ondalık kısmını belirtilen sayıda yuvarlar. Örneğin:

```js
let myNumber = 123.456;
let myString = myNumber.toFixed(2);
console.log(myString); // Çıktı: "123.46"
```

Burada toFixed aynı zamanda bir sayıyı string'e çevirir.

## Rounding

JavaScript'te sayıları yuvarlamak için 4 fonksiyon vardır:

`Math.round()`: Sayıyı en yakın tam sayıya yuvarlar. Örneğin:

```js
Math.round(4.7); // Çıktı: 5
Math.round(4.4); // Çıktı: 4
```

`Math.ceil()`: Sayıyı yukarı yuvarlar. Örneğin:

```js
Math.ceil(4.7); // Çıktı: 5
Math.ceil(4.4); // Çıktı: 5
```

`Math.floor()`: Sayıyı aşağı yuvarlar. Örneğin:

```js
Math.floor(4.7); // Çıktı: 4
Math.floor(4.4); // Çıktı: 4
```

`Math.trunc()`: Sayının ondalık kısmını atar. Örneğin:

```js
Math.trunc(4.7); // Çıktı: 4
Math.trunc(4.4); // Çıktı: 4
```


## isNaN() ve isFinite()

isNaN() fonksiyonu, bir değerin sayı olup olmadığını kontrol eder. Örneğin:

```js
isNaN(123); // Çıktı: false
isNaN("123"); // Çıktı: false
isNaN("123a"); // Çıktı: true
```

isFinite() fonksiyonu, bir değerin sonsuz olup olmadığını kontrol eder. Örneğin:

```js
isFinite(123); // Çıktı: true
isFinite(Infinity); // Çıktı: false
```

## parseInt() ve parseFloat()

parseInt() fonksiyonu, bir string'i integer'a çevirir. Örneğin:

```js
parseInt("123"); // Çıktı: 123
parseInt("123.456"); // Çıktı: 123
```

parseFloat() fonksiyonu, bir string'i float'a çevirir. Örneğin:

```js
parseFloat("123"); // Çıktı: 123
parseFloat("123.456"); // Çıktı: 123.456
```

## Math

Math, JavaScript'in matematiksel fonksiyonlarını içeren bir nesnedir. 

Math.random() : 0 ile 1 arasında rastgele bir sayı üretir. Örneğin:

```js
Math.random(); // Çıktı: 0.123456789
```

Kendimiz bir aralık vermek istersek:

```js
Math.random() * 10; // Çıktı: 1.23456789
```

Bir aralık vermek ve tam sayı istemek istersek:

```js
Math.floor(Math.random() * 10); // Çıktı: 1
```

Math.min() : Verilen sayıların en küçüğünü döndürür. Örneğin:

```js
Math.min(1, 2, 3); // Çıktı: 1
```

Math.max() : Verilen sayıların en büyüğünü döndürür. Örneğin:

```js
Math.max(1, 2, 3); // Çıktı: 3
```

Math.abs() : Verilen sayının mutlak değerini döndürür. Örneğin:

```js
Math.abs(-1); // Çıktı: 1
```

Math.pow() : Bir sayının üssünü alır. Örneğin:

```js
Math.pow(2, 3); // Çıktı: 8
```

