## Class Inheritence

Class'lar arası kalıtım yapmak için extends anahtar kelimesi kullanılır. 

```js
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.

rabbit.hide(); // White Rabbit hides!
```

Extends, ile prototype zincirindeki tüm fonksiyonlar ve özellikler kalıtılır. Eğer kalıtımlanmış bir class içerisinde çağırılan bir property yoksa JavaScript, prototype zincirini kullanarak bu property'i arar. Zincirde ilk bulduğu class'tan çağırılan property'i alır.

```js
class A{
    hello(){
        console.log('this is A');
    }
}

class B extends A{
    hello(){
        console.log('this is B');
    }
}

class C extends B{
    
}

const c = new C();

c.hello(); // this is B
```

Extends ile her şey kalıtımlanabilir. Yani sadece class'lar arası geçerli bir durum değildir:

```js
function f(phrase) {
  return class {
    sayHi() { alert(phrase); }
  };
}

class User extends f("Hello") {}

new User().sayHi(); // Hello
```

## Overriding

Bir class'ı kalıtımlarken, kalıtımlanacak class'ın fonksiyonlarını override edebiliriz. 

```js
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White Rabbit hides!
```

burada super ile parent class'ın fonksiyonunu çağırıyoruz. İstediğimiz zaman parent class'tan gelen bir fonksiyonu child class'ta genişletebiliriz.

Arrow fonksiyonlarında super kullanılamaz. Çünkü arrow fonksiyonlarında this, parent class'ı değil, parent scope'u gösterir. 

```js
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1s
  }
}
```

## Overriding constructor

Bir class'ı kalıtımlarken, constructor'ı override etmek için super() fonksiyonunu kullanırız. 

```js
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}
```







