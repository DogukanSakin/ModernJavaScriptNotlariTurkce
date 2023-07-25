## Function Borrowing

JavaScript'te "Function Borrowing", bir nesnenin diğer bir nesnenin metodunu kullanabilmesine olanak sağlayan bir programlama kavramıdır. Bu, nesneler arasında fonksiyonları paylaşma ve yeniden kullanma yeteneği sunar ve kod tekrarını azaltır. Function Borrowing, özellikle JavaScript'te nesne tabanlı programlama ve fonksiyonel programlama uygulamalarında sıkça kullanılan bir tekniktir.

```js
const person1 = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const person2 = {
  name: "Alice",
  age: 25
};

// person1 nesnesinin sayHello metodu, person2 nesnesi tarafından ödünç alınıyor
person1.sayHello.call(person2);

// Hello, my name is Alice.
```

Yukarıdaki örnekte, person1 ve person2 adında iki ayrı nesne tanımlanmıştır. person1 nesnesinde bir sayHello metodu bulunmaktadır. Ancak, person2 nesnesinde böyle bir metot yoktur. Bu durumda call metodunu kullanarak person1 nesnesinin sayHello metodunu person2 nesnesine ödünç veriyoruz. call metodu, bir fonksiyonu belirli bir bağlamda (this değeri) çalıştırmak için kullanılır. İlk argüman olarak geçtiğimiz nesne, this anahtar kelimesinin referansını oluşturacaktır.

Sonuç olarak, person2 nesnesi, person1 nesnesinin sayHello metodunu kullanarak "Hello, my name is Alice." mesajını konsola yazdıracaktır.

Bu şekilde, JavaScript'te Function Borrowing kullanarak bir nesnenin başka bir nesnenin metodlarını kullanabilmesi, kodun daha esnek ve tekrar kullanılabilir olmasını sağlar.