## Prototype Inheritence

Bazı nesneleri diğer nesnelerden türetmek isteyebiliriz. Bu durumda, bir nesnenin prototipini başka bir nesne olarak ayarlayabiliriz. Bu, bir nesnenin özelliklerini başka bir nesneden miras almasını sağlar. JavaScript'te object'lerin gizli bir özelliği vardır. Bu özellik, nesnenin prototipini tutar. Bir nesnenin prototipi, nesnenin özelliklerini miras aldığı nesnedir. 

```js
const person = {
    name: "John",
    age: 30,
    getDetails: function() {
        return this.name + " is " + this.age + " years old.";
    }
};

const employee = {
    salary: 50000
};

employee.__proto__ = person;

console.log(employee.getDetails()); // John is 30 years old.
```

Bu şekilde bir nesnenin prototipini başka bir nesne olarak ayarlayabiliriz. Bu durumda, employee nesnesi person nesnesinden miras alır. 

Prototype Inheritence zinciri de yapabiliriz:

```js
const animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

const rabbit = {
  jumps: true,
  __proto__: animal
};

const longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)
```

Burada iki kısıtlama mevcuttur:

- Inheritence cycle oluşmaması gerekir.
- Proto ya bir object ya da null atanabilir. Diğer türler kabul edilemez.

Proto günümüzde sık kullanılmaz. Bunun yerine Object.getPrototypeOf/Object.setPrototypeOf kullanılır.

Prototype yalnızca reading aksiyonları içindir. Writing aksiyonları için kullanılamaz. 

## prototype keyword

JavaScript'te her nesne, bir "prototype" adında bir özelliğe sahiptir. Bu "prototype" özelliği, bir nesnenin sahip olduğu özellik ve metodların, miras aldığı üst nesne olan prototip nesnesini referans eder. Eğer bir nesnede aradığımız bir özellik veya metot yoksa, JavaScript otomatik olarak prototip zincirini takip ederek üst prototip nesnelerine bakar ve aranan öğeyi bulmaya çalışır.

```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```






