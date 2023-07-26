JavaScript'te bir fonksiyonun çalışma zamanını geciktirmek için `setTimeout` ve `setInterval` fonksiyonları kullanılır. Bu fonksiyonlar, bir fonksiyonu belirli bir süre sonra veya belirli aralıklarla çalıştırmak için kullanılır.

## setTimeout

`setTimeout` fonksiyonu, bir fonksiyonu belirli bir süre sonra çalıştırmak için kullanılır. Bu fonksiyon iki parametre alır. İlk parametre fonksiyon, ikinci parametre ise fonksiyonun kaç milisaniye sonra çalıştırılacağını belirtir.

```js
function sayHi() {
  alert("Merhaba");
}

setTimeout(sayHi, 1000); // 1 saniye sonra "Merhaba" mesajı gösterilir.
```

`setTimeout` fonksiyonu, fonksiyonu çalıştırmak için bir zamanlayıcı oluşturur ve zamanlayıcıyı döndürür. Bu zamanlayıcıyı kullanarak zamanlayıcıyı iptal edebiliriz.

```js
let timerId = setTimeout(() => alert("Merhaba"), 1000);
alert(timerId); // zamanlayıcı kimliği

clearTimeout(timerId); // zamanlayıcıyı iptal eder
alert(timerId); // iptal edildiğinden dolayı zamanlayıcı kimliği undefined olur
```

Argüman da geçebiliriz.

```js
function sayHi(who) {
  alert(`Merhaba, ${who}`);
}

setTimeout(sayHi, 1000, "Ziyaretçi"); // 1 saniye sonra "Merhaba, Ziyaretçi" mesajı gösterilir.
```

Burada setTimeout çalışıtırılacak fonkisyonun yalnızca referansını ister. Eğer parantezlerle setTimeout'ta çalıştırmaya çalışırsak fonksiyon hiçbir şey döndürmez:

```js
setTimeout(sayHi(), 1000);
```

## Nested setTimeout

Nested setTimeout işlevinin içerisinde başka bir setTimeout işlevinin kullanılması anlamına gelir. Bu teknik, bir işlemi belirli bir süre sonra veya belli aralıklarla tekrar etmek veya gecikmeli olarak gerçekleştirmek için kullanılır.

```js
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
```

Buradaki örnek, belirli bir süre (100 milisaniye) aralıklarla func işlevini ardışık olarak çağırır ve i değişkeninin değeri her seferinde bir artar. Bu, bir döngü yapısı gibi davranır, ancak gerçek bir döngü ifadesi veya döngü işlemcisi kullanılmadan, asenkron bir yapı ile tekrar eden işlemleri gerçekleştirmeye olanak tanır.


## setInterval

`setInterval` fonksiyonu, bir fonksiyonu belirli aralıklarla çalıştırmak için kullanılır. Bu fonksiyon iki parametre alır. İlk parametre fonksiyon, ikinci parametre ise fonksiyonun kaç milisaniyede bir çalıştırılacağını belirtir.

```js
function sayHi() {
  alert("Merhaba");
}

setInterval(sayHi, 1000); // 1 saniyede bir "Merhaba" mesajı gösterilir.
```

`setInterval` fonksiyonu, fonksiyonu çalıştırmak için bir zamanlayıcı oluşturur ve zamanlayıcıyı döndürür. Bu zamanlayıcıyı kullanarak zamanlayıcıyı iptal edebiliriz.

```js
let timerId = setInterval(() => alert("Merhaba"), 1000);
alert(timerId); // zamanlayıcı kimliği

clearInterval(timerId); // zamanlayıcıyı iptal eder
alert(timerId); // iptal edildiğinden dolayı zamanlayıcı kimliği undefined olur
```

## setTimeout - setInterval ve Garbage Collection

Burada setTimeout veya setInterval kullandığımızda clearInterval veya clearTimeout kullanılmadığı sürece bellekte tutulmaya devam eder ve garbage collection tarafından silinmez.
