## Object Destructuring

Object Destructuring, bir objenin key'lerini değişkenlere atamak için kullanılır.

```js
let user = {
    name: "John",
    age: 30
};

// objenin key'lerini değişkenlere atıyoruz
let {name, age} = user;

alert(name); // John
alert(age); // 30
```