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
