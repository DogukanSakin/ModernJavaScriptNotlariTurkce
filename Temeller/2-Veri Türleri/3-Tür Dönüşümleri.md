## Tür Dönüşümleri

Bazen elimizdeki değişkenin türünü işlem yapabilmemiz için değiştirmek gerekebilir. Böyle bir durumda tür dönüşümlerine ihtiyaç duyarız.

### String Dönüşümü

String() fonksiyonu ile değişkenin değeri string türüne dönüştürülebilir.

```
let value = true;
alert(typeof value); // boolean

value = String(value); // string "true"
alert(typeof value); // string
```

### Number Dönüşümü

Number() fonksiyonu ile değişkenin değeri number türüne dönüştürülebilir.

```
let str = "123";
alert(typeof str); // string

let num = Number(str); // string "123" -> number 123
alert(typeof num); // number
```

Eğer gelen değer number türüne dönüştürülemezse NaN (Not a Number) sonucu döner.

```
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

Boolean'lar 0 ve 1 değerlerine dönüştürülebilir.

```
alert( Number(true) ); // 1
alert( Number(false) ); // 0
```

Number dönüşümlerde ek olarak:

Number(undefined) -> NaN
Number(null) -> 0
Number(true) -> 1
Number(false) -> 0

### Boolean Dönüşümü

Boolean() fonksiyonu ile değişkenin değeri boolean türüne dönüştürülebilir.

```
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
```

Boolean dönüşümünde 0, null, undefined, uzunluğu sıfır olan string, NaN değerleri false olarak dönüşür. Diğer tüm değerler true olarak dönüşür.

```
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // true çünkü boşlukta sayılır.
alert( Boolean("") );  // false, uzunluğu 0
```


```
