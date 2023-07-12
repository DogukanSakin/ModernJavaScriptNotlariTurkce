## Optional Chainig

JavaScript'te optional chaining, bir nesne zincirinde yer alan özelliklere ve yöntemlere erişirken, zincirin herhangi bir noktasında hata almaktan kaçınmayı sağlayan bir özelliktir. Bu, özellikle nesne zincirindeki bir veya daha fazla özelliğin veya alt nesnenin değeri null veya undefined olduğunda sık kullanılan bir yaklaşımdır.

```js
const user = {
  name: 'John',
  age: 30,
  address: {
    street: 'Main Street',
    city: 'New York'
  }
};
```

Eğer bu nesneye erişirken herhangi bir optional chaining kullanmazsak ve olmayan bir özelliğe erişmeye çalışırsak, hata alırız:

```js
console.log(user.address.country); // Uncaught TypeError: Cannot read property 'country' of undefined
```

Bu hatayı önlemek için, optional chaining kullanabiliriz:

```js
const array = [1,2,3,4,5,6]
console.log(array?.length) // 6
console.log(array?.[0]) // 1
console.log(array?.[10]) // undefined
```


Obje fonksiyonlarına da optional chaining uygulayabiliriz:

```js
let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)
```
