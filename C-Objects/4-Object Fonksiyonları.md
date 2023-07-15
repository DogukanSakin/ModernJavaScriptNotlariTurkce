## Object.keys()

Object.keys(obj) fonksiyonu objenin key'lerini array olarak döner.

```js
let user = {
    name: "John",
    age: 30
};

alert( Object.keys(user) ); // [name, age]
```

## Object.values()

Object.values(obj) fonksiyonu objenin value'larını array olarak döner.

```js
let user = {
    name: "John",
    age: 30
};

alert( Object.values(user) ); // [John, 30]
```

## Object.entries()

Object.entries(obj) fonksiyonu objenin key-value çiftlerini array olarak döner.

```js
let user = {
    name: "John",
    age: 30
};

alert( Object.entries(user) ); //[ [ 'name', 'John' ], [ 'age', 30 ] ]
```

## Object.entries()

Object.entries(obj) fonksiyonu objenin key-value çiftlerini array olarak döner.

```js
let user = {
    name: "John",
    age: 30
};

alert( Object.entries(user) ); //[ [ 'name', 'John' ], [ 'age', 30 ] ]
```

## Object.fromEntries()

Object.fromEntries() bir dizi veya iterable nesne içindeki key-value çiftlerini kullanarak yeni bir nesne oluşturmak için kullanılır. Object.fromEntries() yöntemi, genellikle Object.entries() yöntemi ile elde edilen veriyi işlemek veya nesne oluşturmak için kullanılır. Object.entries() yöntemi bir nesnenin key-value çiftlerini içeren bir dizi döndürürken, Object.fromEntries() yöntemi bu diziyi kullanarak yeni bir nesne oluşturur.


```js
var entries = [['name', 'John'], ['age', 30], ['city', 'New York']];
var obj = Object.fromEntries(entries);

console.log(obj);
// Çıktı: { name: 'John', age: 30, city: 'New York' }
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




