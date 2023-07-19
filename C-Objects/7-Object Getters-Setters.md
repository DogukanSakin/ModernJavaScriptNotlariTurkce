## Object Getters-Setters

Accessor Properties olarak bilinen getter ve setter'lar, obje property'lerine erişimde kullanılır. Bu property'lerin değerleri fonksiyonlardır. Bu fonksiyonlar obje property'lerine erişimde kullanılır.

```js
const user = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};
```

Burada getter objenin bir property'si okunurken, setter ise bir property'ye değer atanırken çalışır.

Bir objeye daha sonrasında defineProperty ile getter ve setter ekleyebiliriz.

```js
const user = {
    firstName: "John",
    lastName: "Doe"
};

Object.defineProperty(user, "fullName", {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
});
```


