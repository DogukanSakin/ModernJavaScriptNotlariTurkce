## Objeler Referans Tiplidir

Diğer primitive tiplerinin aksine objeler referanslarıyla birlikte saklanır. Bu yüzden objeleri bir değişkene atadığımızda aslında objenin kendisi değil, objenin referansı değişkene atanır.

```js
let user = { name: "John" };

let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

## Object.assign

`Object.assign` fonksiyonu objeleri birleştirmek için kullanılır. Bu fonksiyonun ilk parametresi hedef objedir. Diğer parametreler ise kaynak objelerdir.

```js
let user = { name: "John" };

let permissions1 = { canView: true };

let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user

Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```

Object.assign ile objelerin klonlarını da oluşturabiliriz:

```js

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```

## structuredClone

Normalde objeler referans tipli olduğu için ana objede yapılan bir değişiklik klon objeyi de etkiler:

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

let clone = Object.assign({}, user);

alert( clone.sizes === user.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place

alert(clone.sizes.width); // 51, see the result from the other one
```

Burada eğer structedClone kullanırsak klon obje ana objeden bağımsız olur:

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

let clone = structedClone(user);

alert( clone.sizes === user.sizes ); // false, not same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place

alert(clone.sizes.width); // 50, see the result from the other one
```
```