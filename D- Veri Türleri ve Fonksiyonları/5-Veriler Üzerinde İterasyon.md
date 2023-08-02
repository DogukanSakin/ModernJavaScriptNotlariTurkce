## Veriler Üzerinde İterasyon

JavaScript'te veriler üzerinde iterasyon yaparken genellikle döngüler (loops) veya for...of döngüsü gibi yapılarla kullanılır. Bir döngü kullanarak Iterable nesnenin her bir elemanına erişebilir ve üzerinde işlemler gerçekleştirebilirsiniz.

Iterable nesnelerin, Symbol.iterator adında bir özel bir metodu vardır. Bu metod, Iterable nesnenin bir iterator'ü döndürmelidir. Iterator, koleksiyonun her bir elemanına sırasıyla erişmek için kullanılan bir nesnedir.

Örneğin, aşağıdaki örnek bir dizinin üzerinde döngü kullanarak her bir elemanını yazdırır:

```js
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}
```


Iterables, JavaScript'te kullanılan bir kavramdır ve bir veri koleksiyonunu temsil etmek için kullanılır. Bir Iterable, ardışıl bir şekilde erişilebilen (yani elemanlarına sırasıyla erişilebilen) bir nesnedir. Örneğin, diziler (arrays), karakter dizileri (strings) ve Set ve Map gibi bazı koleksiyonlar Iterable özelliklidir.

Iterables, genellikle döngüler (loops) veya for...of döngüsü gibi yapılarla kullanılır. Bir döngü kullanarak Iterable nesnenin her bir elemanına erişebilir ve üzerinde işlemler gerçekleştirebilirsiniz.

İterable nesnelerin, Symbol.iterator adında bir özel bir metodu vardır. Bu metod, Iterable nesnenin bir iterator'ü döndürmelidir. Iterator, koleksiyonun her bir elemanına sırasıyla erişmek için kullanılan bir nesnedir.

Örneğin, aşağıdaki örnek bir dizinin üzerinde döngü kullanarak her bir elemanını yazdırır:


```js
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}
```

Bu örnekte, array dizisi Iterable özelliğe sahiptir ve for...of döngüsü kullanılarak dizinin her bir elemanına erişilir. Her döngü adımında element değişkenine bir sonraki eleman atanır ve console.log ile ekrana yazdırılır.

Iterables aynı zamanda spread operatörü (...) veya Array.from() gibi yöntemlerle de kullanılabilir. Bu yöntemler, Iterable nesneyi kullanarak yeni bir dizi oluşturmanıza olanak tanır. Örneğin:

```js
const string = 'Hello';
const arrayFromIterable = Array.from(string);
console.log(arrayFromIterable); // ['H', 'e', 'l', 'l', 'o']
```

JavaScript'te bazı yerleşik iterables vardır, ancak kendi iterables'ınızı da oluşturabilirsiniz. Kendi iterables'ınızı oluşturmak için, Symbol.iterator metodunu kullanmanız gerekir. Bu metod, bir iterator nesnesi döndüren bir fonksiyonu referans eder: 

```js
const customIterable = {
  [Symbol.iterator]() {
    let count = 0;

    return {
      next() {
        if (count < 5) {
          count++;
          return { value: count, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const element of customIterable) {
  console.log(element);
}
```
