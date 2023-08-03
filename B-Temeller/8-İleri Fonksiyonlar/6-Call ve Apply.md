
JavaScript'te call ve apply gibi fonksiyonlar, işlevleri çağırmak ve bu işlevleri belirli bir bağlam veya argümanlarla çağırmak için kullanılır. Her iki fonksiyon da işlevlerin çalışma zamanında nasıl çağrılacağı ve çalıştırılacağı konusunda daha fazla esneklik sağlar.


##  Call

call() yöntemi, belirli bir işlevi belirli bir bağlam (this değeri) ile çağırmak için kullanılır. Genellikle fonksiyonlar nesnelere bağlı olduğunda, o nesne üzerinde bir işlevi çağırmak istediğimizde kullanılır. call() fonksiyonu, işlevin çalışma zamanında this değerini belirlememize olanak tanır. 

```js
const person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const anotherPerson = {
  name: 'Alice'
};

person.sayHello(); // Output: Hello, my name is John.
person.sayHello.call(anotherPerson); // Output: Hello, my name is Alice.
```

call() yöntemi, işlevin argümanlarını, işlevin parametre listesi olarak iletebilir:

```js
function saySomething(greeting) {
  console.log(`${greeting}, my name is ${this.name}.`);
}

saySomething.call(anotherPerson, 'Hi'); // Output: Hi, my name is Alice.
```

##  Apply

apply() yöntemi, call() ile benzerdir, ancak argümanları bir dizi olarak kabul eder. apply() genellikle, işlevin argümanlarını bir dizi içinde almak veya işlevin parametre listesine uygun olmayan bir dizi argümanı olan işlevleri çağırmak için kullanılır. Örnek kullanım:

```js
function greet(names) {
  console.log(`Hello, ${names.join(' and ')}.`);
}

const namesArray = ['Alice', 'Bob', 'Carol'];
greet.apply(null, namesArray); // Output: Hello, Alice and Bob and Carol.
```

Not: ECMAScript 6 ile gelen yaygın bir diğer yöntem de bind() fonksiyonudur. bind(), bir işlevin bağlamını kalıcı olarak değiştirirken, call() ve apply() işlevleri yalnızca işlevin çağrıldığı sırada bağlamı değiştirir. bind() işlevi ile yapılan bağlama işlemi sonucu yeni bir fonksiyon elde edilir.

```js
const person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const anotherPerson = {
  name: 'Alice'
};

const boundSayHello = person.sayHello.bind(anotherPerson);

boundSayHello(); // Output: Hello, my name is Alice.
```
