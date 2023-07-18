## Object Property Flags

Objelerin üç temel flag'i vardır:

- Enumerable : true ise loop ile listelenebilir.
- Configurable : true ise property silinebilir, property'nin attribute'ları değiştirilebilir.
- Writable : true ise property'nin değeri değiştirilebilir.

```js
const obj = {
    a: 1,
    b: 2
};

Object.defineProperty(obj, "c", {
    value: 3,
    writable: false,
    enumerable: false,
    configurable: false
});

obj.c = 4;

console.log(obj.c); // 3
```

Bir obje tanımlandığında bu flag'lerin hepsi default true olarak atanır.

Bir objenin sahip olduğu flag'leri görebilmek için:

```js
const obj = {
    a: 1,
    b: 2
};

Object.getOwnPropertyDescriptor(obj, "a");
// { value: 1, writable: true, enumerable: true, configurable: true }
```

## Non-Writable Property

```js
const user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
```

Not: Hatalar yalnızca strict modda gösterilir. Normal modda hata gösterilmez. Ama işlem gerçekleşmez.

## Non-enumerable

```js
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Now our toString disappears:
for (let key in user) alert(key); // name
```

## Non-configurable

```js
let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
```

## Flag'ler İçin Object Methods

- Object.preventExtensions(obj) : Yeni property eklenmesini engeller.
- Object.seal(obj) : Yeni property eklenmesini engeller ve mevcut property'lerin configurable flag'ini false yapar.
- Object.freeze(obj) : Yeni property eklenmesini engeller, mevcut property'lerin configurable flag'ini false yapar ve mevcut property'lerin writable flag'ini false yapar.
- Object.isExtensible(obj) : Yeni property eklenip eklenemeyeceğini kontrol eder.
- Object.isSealed(obj) : Yeni property eklenip eklenemeyeceğini ve configurable flag'inin true olup olmadığını kontrol eder.
- Object.isFrozen(obj) : Yeni property eklenip eklenemeyeceğini, configurable flag'inin true olup olmadığını ve writable flag'inin true olup olmadığını kontrol eder.


