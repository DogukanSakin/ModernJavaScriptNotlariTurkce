## Function Desturcturing

Fonksiyona gelenecek olan parametrelerin içerisindeki değerleri değişkenlere atamak için kullanılır. Bu, uzun fonksiyon parametrelerini daha okunabilir hale getirmek için kullanışlıdır.

Örneğin:

```js
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
```

Bu fonksiyonu çağırmak istesek şöyle bir kullanım yapabiliriz:

```js
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
```

Burada undefined vermek yerine function destructuring kullanarak daha okunabilir bir kullanım yapabiliriz:

```js
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // ...
}

showMenu({
  title: "My Menu",
  items: ["Item1", "Item2"]
})
```

Eğer tüm parametreleri default değerleriyle çağırmak istersek:

```js
showMenu({})
```


