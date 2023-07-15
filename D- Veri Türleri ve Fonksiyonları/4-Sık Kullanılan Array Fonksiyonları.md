Bu başlık altında JavaScript'te en sık kullanılan array fonksiyonlarının kullanım şekilleri incelenecektir.

## forEach() Metodu

forEach() metodu, bir dizideki her bir öğe için bir fonksiyon çağırır.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(index + ":" + item);
}
```

## map() Metodu

map() metodu, bir dizideki her bir öğe için bir fonksiyon çağırır ve sonuçları yeni bir diziye yerleştirir.

```js
const numbers = [4, 9, 16, 25];
const x = numbers.map(Math.sqrt);
console.log(x); // [2, 3, 4, 5]
```

## concat() Metodu

concat() metodu, bir veya daha fazla dizi birleştirir.

```js
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concat(arr2);
console.log(arr3); // ["a", "b", "c", "d", "e", "f"]
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

## splice() Metodu

splice() metodu, bir dizideki öğeleri değiştirmek için kullanılır:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
```

## slice() Metodu

slice() metodu, bir dizinin bir kısmını seçmek için kullanılır ve seçilen öğeleri yeni bir diziye yerleştirir:

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Lemon"]
```

## shift() ve unshift() Metotları

shift() yöntemi, bir dizinin başındaki ilk öğeyi kaldırır:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.shift(); // ["Orange", "Apple"]
```

unshift() yöntemi, bir dizinin başına bir veya daha fazla öğe ekler:

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits.unshift("Lemon", "Pineapple"); // ["Lemon", "Pineapple", "Banana", "Orange", "Apple"]
```

## join() Metodu

join() metodu, bir dizinin tüm öğelerini bir diziye birleştirir.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const energy = fruits.join();
console.log(energy); // Banana,Orange,Apple,Mango
```

## every() Metodu

every() metodu, bir dizideki tüm öğeler için bir test işlevi çağırır. Eğer tüm öğeler testi geçerse true, aksi takdirde false döndürür.

```js
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.every(checkAdult)); // false
```

## filter() Metodu

filter() metodu, bir dizideki öğeler için bir test işlevi çağırır ve true olan öğeleri yeni bir diziye yerleştirir.

```js
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult)); // [32, 33, 40]
```

## indexOf() Metodu

indexOf() metodu, bir dizideki bir öğenin ilk bulunduğu dizin numarasını döndürür. Eğer öğe bulunamazsa -1 döndürür.

```js
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple")); // 0
```

## reduce() Metodu

reduce() metodu, bir dizideki öğeler için bir test işlevi çağırır ve true olan öğeleri yeni bir diziye yerleştirir.

```js
const numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc)); // 100

function myFunc(total, num) {
  return total - num;
}
```

## reverse() Metodu

reverse() metodu, bir dizinin öğelerini tersine çevirir.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse()); // ["Mango", "Apple", "Orange", "Banana"]
```

## sort() Metodu

sort() metodu, bir dizinin öğelerini sıralar.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]
```

## toString() Metodu

toString() metodu, bir dizinin öğelerini bir dizeye dönüştürür.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
```

## at() Metodu

at() metodu, bir dizinin belirtilen konumundaki öğeyi döndürür.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(2)); // Apple
```

## find() Metodu

find() metodu, bir dizideki ilk öğeyi bulur ve değerini döndürür.

```js
const ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.find(checkAdult)); // 18
```

## some() Metodu

some() metodu, bir dizideki öğeler için bir test işlevi çağırır. Eğer en az bir öğe testi geçerse true, aksi takdirde false döndürür.

```js
const ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.some(checkAdult)); // true
```

## includes() Metodu

includes() metodu, bir dizide belirli bir değerin olup olmadığını kontrol eder. Eğer varsa true, aksi takdirde false döndürür.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); // true
```

## findIndex() Metodu

findIndex() metodu, bir dizideki ilk öğenin dizin numarasını döndürür.

```js
const ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.findIndex(checkAdult)); // 2
```

## fill() Metodu

fill() metodu, bir dizinin belirtilen dizinlerini bir değerle doldurur.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi", 2, 4)); // ["Banana", "Orange", "Kiwi", "Kiwi"]
```


