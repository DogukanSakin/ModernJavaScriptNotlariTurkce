## This

this anahtar kelimesi, bir işlevin çalıştığı bağlamı temsil eder. İşlevin nasıl çağrıldığına ve nerede tanımlandığına bağlı olarak this farklı değerlere sahip olabilir. 

Özetle this:

- Tek başına kullanıldığında, this global bağlamı temsil eder.
- Bir fonksiyonun içinde kullanıldığında, this global object'i temsil eder.
- Bir event handler içinde kullanıldığında, this event'i tetikleyen element'i temsil eder.
- call(), apply() veya bind() yöntemleri ile kullanıldığında, this belirtilen bağlamı temsil eder.

## Global

```js
console.log(this); // Window
```

Global bir bağlamda, this anahtar kelimesi genellikle window nesnesini temsil eder. Bu örnekte, this window nesnesini ifade eder ve konsola yazdırılır.

## Object

```js
const obj = {
  name: "John",
  sayHello: function() {
    console.log("Hello, " + this.name);
  }
};

obj.sayHello(); // Hello, John
```

this, metodun çağrıldığı nesneyi temsil eder. Yukarıdaki örnekte, obj nesnesi üzerinde sayHello metodunu çağırdığımızda, this obj nesnesini ifade eder.

## Arrow Fonksiyonlar

```js
const obj = {
  name: "John",
  sayHello: () => {
    console.log("Hello, " + this.name);
  }
};

obj.sayHello(); // Hello, undefined
```

Arrow function'lar, this anahtar kelimesini kendi bağlamına sahip olmadığı için kullanılmamalıdır. Yukarıdaki örnekte, sayHello metodunu arrow function olarak tanımladığımızda, this anahtar kelimesi global bağlama sahip olur. Bu nedenle, this.name ifadesi undefined değerini döndürür.

## Fonksiyonlar

```js
function sayHello() {
  console.log("Hello, " + this.name);
}

const obj = {
  name: "John",
  sayHello: sayHello
};

obj.sayHello(); // Hello, John
```

Fonksiyonlar, this anahtar kelimesini kendi bağlamına sahip olduğu için kullanılmalıdır. Yukarıdaki örnekte, sayHello fonksiyonunu obj nesnesinin bir özelliği olarak tanımladığımızda, this anahtar kelimesi obj nesnesini ifade eder. Bu nedenle, this.name ifadesi John değerini döndürür.

## Call ve Apply

```js
function sayHello() {
  console.log("Hello, " + this.name);
}

const obj = {
  name: "John"
};

sayHello.call(obj); // Hello, John
sayHello.apply(obj); // Hello, John
```

call ve apply yöntemleri, bir fonksiyonun this anahtar kelimesini belirli bir bağlama ayarlamak için kullanılır. Yukarıdaki örnekte, sayHello fonksiyonunu obj nesnesinin bir özelliği olarak tanımlamadık. Bunun yerine, sayHello fonksiyonunu obj nesnesi üzerinde çağırdık. Bu nedenle, this anahtar kelimesi obj nesnesini ifade etmez. Ancak, call ve apply yöntemlerini kullanarak, sayHello fonksiyonunun this anahtar kelimesini obj nesnesine ayarlayabiliriz. Bu nedenle, this.name ifadesi John değerini döndürür.



