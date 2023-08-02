JavaScript'te generator ve iterator kavramları, fonksiyonların çalışma mantığını değiştiren ve döngüleri, dizi işlemlerini vb. işlemleri daha kolay ve etkili hale getiren güçlü özelliklerdir.

## Iterator

Iterator, bir nesneyi üzerinde gezinmeye (iterate etmeye) yarayan bir arayüzdür. JavaScript'te, birçok veri yapısına (örneğin, diziler, setler, haritalar) ve veri kaynağına (örneğin, dosya okuma, ağ istekleri) sahip nesneler üzerinde gezinmek için kullanılabilirler.

Iterator'un temel yapısı, next() adında bir yönteme sahip bir nesnedir. Bu yöntem çağrıldığında, nesnenin mevcut durumu hakkında bilgi içeren bir nesne döndürür. Bu nesnenin anahtarları genellikle şunlardır:

value: Gezinti sırasındaki şu anki değeri taşır.
done: Bir boolean değerdir ve nesne üzerinde gezinmenin tamamlandığını gösterir (true) veya daha fazla elemanın kaldığını gösterir (false).
Iterator örneği oluşturmak için genellikle veri yapısının Symbol.iterator özelliğini kullanırız. Bu özellik, bir nesneye ait iteratorü döndüren bir fonksiyondur.

```js
const myArray = [1, 2, 3];
const iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

## Generator

Generator, işlevlerin çalışmasını durdurabilen ve daha sonra devam edebilen özel bir işlev türüdür. "Generator" fonksiyonları, function* anahtar kelimesiyle tanımlanır ve bir veya birden fazla yield ifadesi içerebilir.

yield ifadesi, bir generator fonksiyonunun çalışmasını geçici olarak duraklatır ve bir değeri döndürür. Daha sonra, generator fonksiyonu tekrar çağrıldığında durakladığı yerden devam eder. Generatorler, iterator oluşturmak ve bu iteratorlerin gezinme mantığını kolayca yazmak için kullanılır.

```js
function* sampleGenerator() {
  yield 'Merhaba';
  yield 'Dünya';
  yield 'Generatorler harika!';
}

const iterator = sampleGenerator();
console.log(iterator.next()); // { value: 'Merhaba', done: false }
console.log(iterator.next()); // { value: 'Dünya', done: false }
console.log(iterator.next()); // { value: 'Generatorler harika!', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Generatorler iterable'dır:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, then 2
}
```

Burada 3'ü görmememizin sebebi, for..of döngüsünün sadece done: false olan değerleri almasıdır. return ifadesi, done: true olan bir değer döndürür. Düzeltmek için:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
```
`yield*` kullanarak başka bir generator çağırabiliriz:

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

Generatorlerin en güzel yanlarından biri, bellekte büyük veri kümesi veya döngü işlemleri gibi büyük miktarda veriyle çalışırken performansı artırabilmesidir. Çünkü değerleri talep ettiğinizde, ihtiyacınız olan değerleri üretirler, böylece gereksiz bellek kullanımını önlemiş olursunuz.

Generatorler ve iteratorler, JavaScript'te veri işleme ve asenkron programlamada çok kullanışlı ve güçlü bir araç setidir. Bu özellikleri kullanarak daha temiz ve daha düzenli kodlar yazabilir ve performansı artırabilirsiniz.







