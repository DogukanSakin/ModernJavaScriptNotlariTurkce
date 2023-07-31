## Private & Public Properties

Object Oriented Programming için gerçekleştirme ayrıntılarını saklamak önemlidir. Bu yüzden, JavaScript'te private ve protected property'ler tanımlayabiliriz.

İki tür access modifier vardır:

- Private: Sadece class içerisinde erişilebilir.
- Public: Class dışında da erişilebilir.

Örneğin:

```js
class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    alert( `Created a coffee-machine, power: ${power}` );
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;
```

Burada `waterAmount` public bir property'dir. Bu yüzden, class dışında erişilebilir. Ancak bir kahve makinesinin su miktarını değiştirmek mantıklı değildir. Bu yüzden, bu property'i private yapmalıyız.

```js
class CoffeeMachine {
  #waterAmount = 0; // private property

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;

alert(machine.#waterAmount); // Error
```

Benzer şekilde getter/setter ile de erişimi kontrol edebiliriz. Örneğin sadece getter tanımlarsak bir property'e bir değer atamak mümkün olmaz.

```js
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)
```

'#' ile gizlenmiş bir property'i inheritence ile aktaramayız. Ancak, getter/setter ile aktarabiliriz.

```js
class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}
```







