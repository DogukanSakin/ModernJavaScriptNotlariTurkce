## Class

Class, object orienter programming için sıkça kullanılan bir terimdir. Class'lar, birbirine benzeyen nesneleri oluşturmak için kullanılır. Örneğin, bir araba class'ı oluşturduğumuzda, bu class'ı kullanarak birçok araba nesnesi oluşturabiliriz. Class'lar, birçok özelliği ve fonksiyonu içinde barındırabilir. 

```js
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi(); 
```

JavaScript'te her class bir fonksiyondur.

## Class getter/setter

Class'lar, getter ve setter fonksiyonlarını da içerebilir. Bu fonksiyonlar, class'ın özelliklerine erişmek için kullanılır. 

```js
class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");

alert(user.name); // John

user = new User(""); // Name is too short.
```