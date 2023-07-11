## While Loop

While döngüsü, belirli bir koşul sağlandığı sürece döngüyü çalıştırmaya devam eder. 

```js
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```

Burada herhangi bir koşul olmazsa sonsuz döngü oluşacaktır. 

## For Loop

Benzer şekilde for döngüsü de belirli bir koşul sağlandığı sürece döngüyü çalıştırmaya devam eder. Başlangıç, ilerleyiş miktarı ve bitiş koşullarını tanımlama esnasında belirleyebiliriz.

```js
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
```

Burada istediğimiz herhangi bir kısmı boş bırakabiliriz. Örneğin başlangıç noktasını belirlemeyebiliriz:

```js
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
```

## Break ve Continue

Döngü içerisinde break ifadesiyle döngüyü sonlandırabiliriz. 

```js

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

Benzer şekilde continue ifadesiyle döngüyü sonlandırmadan bir sonraki adıma geçebiliriz.

```js

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```


