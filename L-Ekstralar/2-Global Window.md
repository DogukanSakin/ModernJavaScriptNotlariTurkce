## Window

JavaScrip'te window global bir nesnedir. Bu nesne, JavaScript'te tanımlanan tüm değişken ve fonksiyonları içerir. Bu nedenle, window nesnesi, JavaScript'te tanımlanan tüm değişken ve fonksiyonlara erişmek için kullanılabilir.

```js
console.log(window); // window nesnesini yazdırır
```

Örneğin tanımlanmış bir değişkene veya fonksiyona başka bir yerden erişmek istediğimizde, window'u kullanabiliriz:

```js
// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};

// somewhere else in code
alert(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John
```




