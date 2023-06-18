## Döngü İsimlendirme (Tag'leme)

JavaScript'te her döngüye bir etiket, isim verebiliriz ve bu isimleri break/continue ile kullanabiliriz.

```js
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');


    if (!input) break outer; // <--


  }
}

alert('Done!');
```

Bu etiketler herhangi bir yere atlamaya izin vermezler.

```js
break label; 

label: for (...)
```
