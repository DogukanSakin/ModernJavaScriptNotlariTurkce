## Operatörler

Matematikten aşina olduğumuz işlem önceliği ve temel işlem operatörleri benzer şekilde JavaScript'te mevcuttur. Bu başlık altında farklı türlerdeki değişkenler için çeşitli operatörler kullandığımızda JavaScript'in davranışlarını inceliyor olacağız.

string+string=string

```js
let s = "my" + "string";
alert(s); // mystring
```

string+number=string

```js
alert( '1' + 2 ); // "12"
```

number+string=string

```js
alert(2 + '1'); // "21"
```

number+number=number

```js
alert(2 + 2); // 4
``` 

number+boolean=number

```js
alert(2 + true); // 3
```

boolean+boolean=number

```js
alert(true + false); // 1
```

boolean+string=string

```js
alert(true + '1'); // "true1"
```

boolean+number=number

```js
alert(true + 1); // 2
```

Eğer ilk işlenen string olursa diğer number değişkenlerle birleşir:

```js
alert('1' + 2 + 2); // "122" olacaktır 14 değil.
```

Tam tersi:

```js
alert(2 + 2 + '1' ); // "41" olacaktır "221" olmaz.
```

Önemli: yalnızca + operatörü string'ler için birleştirme işlemi yapar. Diğer operatörlerde string'ler number'a dönüştürülür.

```js
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3
```

## + Operatörünün Dönüştürücü Özelliği

+ operatörü tek başına kullanıldığında sayıları değiştirmez:

```js
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2
```

Ancak yanındaki ifade number değilse onları number'a dönüştürür:

```js
alert( +true ); // 1
alert( +"" );   // 0
```

## = Operatörü 

= Her Zaman Bir Değer Döndürür.

x = value işlemi, değeri x'e yazar ve onu döndürür.

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

Zincirleme atamada işlem sağdan sola doğru yapılır:

```js
let a, b, c;
a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

## ++ ve -- Operatörleri

Birer artırma ve azaltma yöntemleridir. Bu operatörler yalnızca bir değişkenin varlığında çalışırlar. 5++ gibi bir şey yazmak hata verecektir.

Number++ ile ++Number arasındaki fark:

number++ (Postfix Artırma): Bu ifade, sayıyı önce kullanır ve ardından artırır. Yani, değeri kullanılır ve daha sonra bir birim artırılır. Örneğin:

```js
let number = 5;
let result = number++;
console.log(result); // Çıktı: 5
console.log(number); // Çıktı: 6
```

++number (Prefix Artırma): Bu ifade, sayıyı önce artırır ve ardından kullanır. Yani, değeri bir birim artırılır ve daha sonra kullanılır. Örneğin:

```js
let number = 5;
let result = ++number;
console.log(result); // Çıktı: 6
console.log(number); // Çıktı: 6
```

## Virgül Operatörü

Virgül operatörü, birkaç ifadeyi virgülle bölerek değerlendirmemize izin verir. Her biri değerlendirilir ancak yalnızca sonuncusunun sonucu döndürülür.

```js
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```