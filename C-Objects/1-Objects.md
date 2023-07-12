## Objects

JavaScript'teki 8 data türünün içerisinde primitive olmayan tek tür objelerdir. İçerisinde key value ilişkisine göre birden fazla değerler tutarlar.

Basitçe bir obje oluşturmak için: 

```js
const myObject = {
    key1: "value1",
    key2: 10,
    key3: true
};
```

Obje içerisine tanımlamadan sonra da bir değer ekleyebiliriz:

```js
myObject.key4 = "value4";
```

Benzer şekilde bir değeri silebiliriz:

```js
delete myObject.key4;
```

Objelerin key'i multi word olabilir:

```js
const myObject = {
    "multi word key": "value1",
    key2: 10,
    key3: true
};
```

Bu durumda objeye erişirken köşeli parantez kullanmamız gerekir:

```js
myObject["multi word key"] = "value4";
```

Objelerin içerisinde key ve value'ların değişken isimleri aynıysa aşağıdaki gibi kısaltabiliriz:

```js
const myObject = {
    key1, // key1: key1
    key2, // key2: key2
    key3 // key3: key3
};
```

## in operatörü

Bir objenin içerisinde bir key'in olup olmadığını kontrol etmek için `in` operatörünü kullanabiliriz:

```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

## for...in döngüsü

for...in döngüsü objenin içerisindeki key'leri döner:

```js
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}
```

Burada eğer key'ler bir sayıysa tam olarak tanımlama sırasını takip etmez. Örneğin:

```js
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}
```

Bu durumu önlemek için + operatörünü kullanabiliriz:

```js
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};

for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
}
```

+ Kullanmamızın sebebi JavaScript'in objeleri sıralarken stringleri sayılara çevirmesidir.

## Object ve this

Object içerisindeki bir method içerisinde this kullanarak objenin içerisindeki diğer değerlere erişebiliriz:

```js
let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert(this.name);
    }
};

user.sayHi(); // John
```



