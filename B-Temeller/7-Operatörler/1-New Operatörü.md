## New Operatörü

new keyword'ü ile bir yapının instance'ı oluşturulabilir. Örneğin bir fonksiyondan instance oluşturulabilir.

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

Bu örnek için fonksiyonun instance'ı new ile oluşturulduğunda aşağıdaki işlemler gerçekleşir:

- Yeni bir boş obje oluşturulur ve this bu objeyi referans eder.
- Fonksiyon içeriği yürütülür, this genellikle yeni oluşturulan objeyi değiştirir.
- this objesi otomatik olarak döndürülür.

```js
