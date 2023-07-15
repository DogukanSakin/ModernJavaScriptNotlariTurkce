## Arrays

JavaScript'te diziler, bir değişkenin içinde birden fazla değer tutmak için kullanılır.

```js
const cars = ["Saab", "Volvo", "BMW"];
```

## push() ve pop() Metotları

push() yöntemi, bir dizinin sonuna bir veya daha fazla öğe ekler:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi"); // ["Banana", "Orange", "Apple", "Kiwi"]
```

pop() yöntemi, bir dizinin sonundaki son öğeyi kaldırır:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop(); // ["Banana", "Orange"]
```

pop ile kaldırılan öğeyi bir değişkene atayabiliriz:

```js
const fruits = ["Banana", "Orange", "Apple"];
const x = fruits.pop(); // x = "Apple"
```

push ve pop, shift ve unshift'e göre daha hızlı çalışır.

## shift() ve unshift() Metotları

shift() yöntemi, bir dizinin başındaki ilk öğeyi kaldırır:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.shift(); // ["Orange", "Apple"]
```

unshift() yöntemi, bir dizinin başına bir veya daha fazla öğe ekler:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.unshift("Lemon"); // ["Lemon", "Banana", "Orange", "Apple"]
```

## Array'de Kopyalama

JavaScript'te array'lerde referans tipli oldukları için kopyalama işlemi yaparken dikkatli olmalıyız. Aşağıdaki örnekte `arr2`'yi `arr1`'e eşitlediğimizde `arr1`'deki değişiklikler `arr2`'yi de etkileyecektir.

```js
const arr1 = ["a", "b", "c"];
const arr2 = arr1;

arr1.push("d");
console.log(arr2); // ["a", "b", "c", "d"]
```

## Array'de İterasyon

for..of döngüsü, bir nesnenin değerlerini yinelemek için kullanılır:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "";
for (let x of fruits) {
  text += x;
}
console.log(text); // BananaOrangeAppleMango
```


for..in döngüsü, bir nesnenin özelliklerini (anahtarlarını) yinelemek için kullanılır:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "";
for (let x in fruits) {
  text += fruits[x];
}
console.log(text); // BananaOrangeAppleMango
```

Teknik olarak for..in kullanmak array'ler için kötü bir fikirdir. Çünkü for..in döngüsü, dizinin özelliklerini yinelediği için, dizinin prototipindeki eklenen özellikleri de yineleyecektir. Ayrıca for..in generic objeler için optimize edilmiştir. Bu yüzden array'ler için for..of kullanmak daha iyi bir fikirdir.


## toString()

toString() yöntemi, bir diziyi bir dizeye dönüştürür ve dizinin öğelerini virgülle ayırır.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
```

## Arrayler == İle Karşılaştırılmamalıdır

JavaScript'te, iki array'i karşılaştırmak için `==` veya `===` kullanırsanız, sonuç her zaman `false` olacaktır.

```js
const arr1 = ["a", "b", "c"];
const arr2 = ["a", "b", "c"];
console.log(arr1 == arr2); // false
```

Bunun yerine döngü kullanıp elemanları tek tek karşılaştırmalıyız.

```js
const arr1 = ["a", "b", "c"];
const arr2 = ["a", "b", "c"];
let isEqual = true;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    isEqual = false;
    break;
  }
}
```
## Destrukturizasyon

Destructuring, bir nesnenin veya array'in öğelerini ayırma işlemidir.

```js
const arr = ["a", "b", "c"];
const [x, y, z] = arr;
console.log(x); // a
console.log(y); // b
console.log(z); // c
```

Burada istenmeyen öğeleri atlayabiliriz:

```js
const arr = ["a", "b", "c"];
const [x, , z] = arr;
console.log(x); // a
console.log(z); // c
```

Default değerler de verebiliriz:

```js
const arr = ["a", "b"];
const [x, y, z = "c"] = arr;
console.log(x); // a
console.log(y); // b
console.log(z); // c
```



