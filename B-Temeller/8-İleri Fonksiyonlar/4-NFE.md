## NFE

NFE yani Named Function Expression, fonksiyonları değişkenlere atamak için kullanılır. 

```js

let sayHi = function func(who) {
  if (who) {
    alert(`Merhaba, ${who}`);
  } else {
    func("Ziyaretçi"); // func, fonksiyonun kendisine referans verir.
  }
};

sayHi(); // Merhaba, Ziyaretçi
```

JavaScript'te fonksiyonlar birer objedir. Bu yüzden objelerdeki gibi property'lerine erişebiliriz. 

## name özelliği

Fonksiyonun name özelliği fonksiyonun adını döndürür. 

```js
function sayHi() {
  alert("Merhaba");
}

alert(sayHi.name); // sayHi
```

## length özelliği

Fonksiyonun length özelliği fonksiyonun parametre sayısını döndürür. 

```js
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```
