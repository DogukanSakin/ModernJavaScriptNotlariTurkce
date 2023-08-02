## Garbage Collection

Oluşturulan bir obje kullanılmadığında bellekten silinir. Bu işleme garbage collection denir. Bazı durumlarda ise silinemeyen objeler olabilir. Bunlar:

- Global scope'da tanımlanan objeler
- Yürütülen fonksiyonlar ve onun local değişkenleri, parametreleri
- Nested fonksiyonlar ve onun local değişkenleri, parametreleri


Garbage Collection basitçe bir yapıya erişim devam ettiği sürece objeyi bellekte tutar. O yapının herhangi bir yerinde erişim sona erdiğinde obje bellekten silinir.

```js
let user = {
  name: "John"
};

user = null; // bu satırda obje bellekten silinir
```

Eğer bir yapı başka bir değişkene kopyalanırsa mevcut yapı bellekte saklanmaya devam eder:

```js
let user = {
  name: "John"
};

let admin = user; // referans kopyalandı

user = null; // user null oldu ama admin hala objeye erişebilir

alert(admin.name); // John
```
