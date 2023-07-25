JavaScript'te Error'lerin tipleri mevcuttur. Bu tipleri instanceof ile kontrol edip işlemlerimizi buna göre yapabiliriz. Başlıca error tipleri:

## AggregateError

AggregateError, ECMAScript 2021 (ES12) ile tanıtılan ve birden fazla hata nesnesini birleştiren bir hata türüdür. Bunu, bir dizi farklı hata nesnesini tek bir AggregateError altında toplamak için kullanabilirsiniz. Böylece, bir dizi işlemde birden çok hatanın oluşması durumunda, tüm hataları tek bir yerde toplayarak daha etkili bir şekilde yönetebilirsiniz.

AggregateError, genellikle Promise.all() veya Promise.allSettled() gibi birden çok asenkron işlemin aynı anda çalıştırılması durumunda faydalıdır. Bu tür durumlarda, işlemlerden biri veya daha fazlası hatalı sonuçlanabilir ve tüm hataları toplamak için AggregateError kullanılabilir.

AggregateError nesnesi, errors adında bir dizi ve isteğe bağlı olarak bir message parametresi alır. errors dizisi, birden çok hata nesnesini içeren bir dizi olmalıdır. İsteğe bağlı message parametresi, AggregateError nesnesini oluştururken verilecek bir hata mesajını temsil eder.

```js
// Birden çok hata oluşturan işlemler
const promise1 = Promise.reject(new Error("Hata 1"));
const promise2 = Promise.reject(new Error("Hata 2"));

// Tüm hataları tek bir AggregateError altında topluyoruz
Promise.allSettled([promise1, promise2])
  .then((results) => {
    const errors = results.filter((result) => result.status === "rejected").map((result) => result.reason);
    if (errors.length > 0) {
      throw new AggregateError(errors, "Birden çok hata oluştu");
    }
    // Hatalar oluşmadıysa burada başarılı işlemleri işleyebilirsiniz
  })
  .catch((error) => {
    // AggregateError'u burada yakalayarak içindeki tüm hataları görebiliriz
    console.error("Toplam hata sayısı:", error.errors.length);
    error.errors.forEach((err, index) => {
      console.error(`Hata ${index + 1}:`, err.message);
    });
  });

// Çıktı:
// Toplam hata sayısı: 2
// Hata 1: Hata 1
// Hata 2: Hata 2
```

## InternalError

JavaScript'te InternalError, özel durumlarda oluşan ve genellikle geliştiricinin kontrolü dışındaki içsel hataları temsil eden bir hata türüdür. Bu tür hatalar, genellikle JavaScript motorunun veya çalışma zamanının beklenmedik bir şekilde çalışması sonucu ortaya çıkar. InternalError genellikle kod tarafından doğrudan oluşturulmaz, ancak dilin kendisi veya JavaScript motoru tarafından oluşabilir.

Örnek olarak, sınırlı bellek, işletim sistemi sorunları veya JavaScript motorundaki hatalı bir durum nedeniyle InternalError oluşabilir. Ancak, bu tür hatalar nadiren karşılaşılan hatalardır ve günlük geliştirme süreçlerinde tipik olarak karşılaşılmazlar.

```js
try {
  // Hata oluşturan bir işlem yapalım (örneğin, bellek sınırını aşan bir işlem)
  throw new InternalError("Bellek sınırı aşıldı");
} catch (error) {
  console.error("Hata:", error); // InternalError: Bellek sınırı aşıldı
}
```

## RangeError

JavaScript'te RangeError, bir fonksiyon veya metodun geçerli aralık dışında bir değerle çağrılması durumunda oluşan hataları temsil eden bir hata türüdür. Bu tür hatalar, geçerli aralık dışındaki bir değerin fonksiyona veya metoda argüman olarak verilmesi sonucu ortaya çıkar.

RangeError genellikle aşağıdaki senaryolarda ortaya çıkar:

- Bir dizi veya dize üzerinde geçerli olmayan bir indeksle erişme veya kesme işlemi yapma.
- Bir matematiksel fonksiyona geçerli olmayan bir sayısal argüman verme.
- Bir fonksiyonun geçerli kabul edilmeyen parametrelerle çağrılması.

```js
// Örnek 1: Dizi indeksi geçerli aralıkta değil
const arr = [1, 2, 3];
console.log(arr[5]); // RangeError: Index out of range

// Örnek 2: Slice metodu geçerli aralıkta değil
const str = "Hello";
console.log(str.slice(-10)); // RangeError: Index out of range

// Örnek 3: toPrecision metodu geçerli aralıkta değil
const num = 12345.6789;
console.log(num.toPrecision(100)); // RangeError: Precision is out of range

// Örnek 4: Stack Overflow hatası (recursive fonksiyon)
function recursiveFunction() {
  recursiveFunction(); // Fonksiyon kendini sonsuz döngü içinde çağırıyor
}
recursiveFunction(); // RangeError: Maximum call stack size exceeded
```

## ReferenceError

JavaScript'te ReferenceError, tanımsız bir değişkeni veya nesneye erişmeye çalıştığınızda oluşan hataları temsil eden bir hata türüdür. Bu tür hatalar, mevcut olmayan bir değişkeni kullanma, tanımlanmamış bir fonksiyonu çağırma veya mevcut olmayan bir nesneye erişme gibi durumlarda ortaya çıkar.

ReferenceError genellikle şu durumlarda ortaya çıkar:

- Bir değişkeni veya fonksiyonu tanımlamadan kullanmaya çalışma.
- Bir değişkeni tanımlamak yerine yanlış bir adı kullanma.
- Bir değişkenin kapsam dışında kullanma.

```js
// Örnek 1: Tanımlanmamış değişken kullanma
console.log(a); // ReferenceError: a is not defined

// Örnek 2: Tanımlanmamış fonksiyon çağırma
foo(); // ReferenceError: foo is not defined

// Örnek 3: Yanlış değişken adı kullanma
const x = 10;
console.log(y); // ReferenceError: y is not defined

// Örnek 4: Kapsam dışında değişkene erişme
function exampleFunction() {
  const z = 5;
}
console.log(z); // ReferenceError: z is not defined
```

## SyntaxError

SyntaxError, kodun yanlış sözdizimine (syntax) sahip olduğunda oluşan hataları temsil eden bir hata türüdür. Bu tür hatalar, JavaScript kodu yazarken dilin gerektirdiği doğru sözdizimini kullanmadığınızda ortaya çıkar. Yani, SyntaxError hatası, kodun düzgün bir şekilde çözümlenemediği durumlarda meydana gelir.

SyntaxError hataları genellikle şu durumlarda ortaya çıkar:

- Parantezlerin eksik veya yanlış kullanımı.
- Noktalı virgül veya virgül kullanım hatası.
- Fonksiyon veya değişken tanımlarken hatalı adlandırma.
- Operatörlerin yanlış sırası veya kullanımı.
- If, for, while gibi kontrol yapılarının doğru biçimde yazılmaması.
- Object veya array literallerinde hatalı yazım.

```js
// Örnek 1: Parantez hatası
console.log("Merhaba"; // SyntaxError: Unexpected token ';'

// Örnek 2: Yanlış kullanım hatası
const x = 5
console.log(x,) // SyntaxError: Unexpected token ','

// Örnek 3: Yanlış değişken adı
console.log(y); // ReferenceError: y is not defined

// Örnek 4: Operatör hatası
const a = 10;
console.log(a + * 2); // SyntaxError: Unexpected token '*'

// Örnek 5: If yapısı hatası
if (x === 5 // SyntaxError: Unexpected token '{'

// Örnek 6: Object literal hatası
const person = {name: "John", age: 30; } // SyntaxError: Unexpected token ';'
```