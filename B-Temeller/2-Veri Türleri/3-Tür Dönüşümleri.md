## Tür Dönüşümleri

Bazen elimizdeki değişkenin türünü işlem yapabilmemiz için değiştirmek gerekebilir. Böyle bir durumda tür dönüşümlerine ihtiyaç duyarız.

## String Dönüşümü

String() fonksiyonu ile değişkenin değeri string türüne dönüştürülebilir.

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // string "true"
alert(typeof value); // string
```

### Number Dönüşümü

Number() fonksiyonu ile değişkenin değeri number türüne dönüştürülebilir.

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // string "123" -> number 123
alert(typeof num); // number
```

Eğer gelen değer number türüne dönüştürülemezse NaN (Not a Number) sonucu döner.

```js
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

Boolean'lar 0 ve 1 değerlerine dönüştürülebilir.

```js
alert( Number(true) ); // 1
alert( Number(false) ); // 0
```

Number dönüşümlerde ek olarak:

Number(undefined) -> NaN
Number(null) -> 0
Number(true) -> 1
Number(false) -> 0

## Boolean Dönüşümü

Boolean() fonksiyonu ile değişkenin değeri boolean türüne dönüştürülebilir.

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
```

Boolean dönüşümünde 0, null, undefined, uzunluğu sıfır olan string, NaN değerleri false olarak dönüşür. Diğer tüm değerler true olarak dönüşür.

```js
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // true çünkü boşlukta sayılır.
alert( Boolean("") );  // false, uzunluğu 0
```

## parseInt ve parseFloat

parseInt ve parseFloat fonksiyonları string değerleri number değerlerine dönüştürür.

```js
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
```


## toString
toString fonksiyonu ile number değerleri string değerlerine dönüştürülebilir.

```js
let num = 123;
alert( num.toString() ); // "123"

alert( 123456..toString() ); // "123456", 123456.. şeklinde yazılmalıdır.
```




