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
