## Static Properties

Static property'ler instance ile doğrudan ilişkili olmayan property'lerdir. 

```js
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

Burada this User class'ını gösterir.

## Static Properties and Inheritance

Static property'ler kalıtımla aktarılabilir. 

```js
class Animal {
  static planet = "Earth";
}

class User extends Animal {}

alert(User.planet); // Earth
```
