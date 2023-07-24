## Parametre Kapsamı

Fonksiyonlara parametre gönderildiğinde fonksiyonun kapsamı içerisinde geçerli olur ve yerel değişkenlere kopyalanır.

```js
function showMessage(from, text) {

  from = '*' + from + '*'; 

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

alert( from ); // Ann
```

## Default Parametreler

Modern JavaScript'te gönderilmeden parametreleri nullish ile veya diğer kontrol yapılarıyla kontrol edebiliriz.

```js
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

## Higher-Order Functions

Higher-Order Functions (HOF), fonksiyonları parametre olarak alan veya fonksiyon döndüren fonksiyonlardır.

```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}



ask("Do you agree?", showOk, showCancel);
```