## Promises

JavaScript Promise, JavaScript dilinde asenkron işlemleri yönetmek ve daha okunabilir, düzenli kod yazmak için kullanılan bir yapıdır. Asenkron işlemler, genellikle ağ istekleri, dosya okuma/yazma, veritabanı sorguları gibi işlemlerdir ve bu tür işlemler genellikle zaman alabilirler. Promise'lar, bu tür asenkron işlemleri daha etkili bir şekilde yönetmeyi sağlar.

Promise, gelecekte tamamlanacak bir işlemi temsil eden bir nesnedir. Bir işlem başlatıldığında, o işlemin sonucu henüz bilinmeyebilir, ancak Promise, işlemin başarılı bir şekilde tamamlandığından veya bir hata ile sonuçlandığından bağımsız olarak, sonuç hakkında bir bilgi sunar. Bu, callback işlevlerine göre daha düzenli ve anlaşılır bir kod yazmamıza olanak tanır.

Promise'ın üç temel durumu vardır:

- "pending" (Beklemede): Promise henüz tamamlanmamış durumda.
- "fulfilled" (Gerçekleşmiş): Promise, başarıyla sonuçlandı ve sonuç değeri mevcut.
- "rejected" (Reddedilmiş): Promise, bir hata nedeniyle başarısız oldu ve hata nedeni mevcut.

Promise, iki argüman alan bir yapıya sahiptir: bir yürütme işlevi (executor) ve iki geri çağırma işlevi (resolve ve reject). Executor işlevi, Promise oluşturulduğunda otomatik olarak çalıştırılır ve genellikle asenkron bir işlemi başlatır.

```js
// Basit bir asenkron işlemi temsil eden bir Promise oluşturma
const myPromise = new Promise((resolve, reject) => {
  // Asenkron işlemi burada başlatırız
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // İşlem başarılı
    } else {
      reject(new Error("Bir hata oluştu")); // İşlem başarısız
    }
  }, 1000);
});

// Promise sonuçlarını işleme
myPromise
  .then(result => {
    console.log("Sonuç:", result); // İşlem başarılı olduğunda çalışır
  })
  .catch(error => {
    console.error("Hata:", error.message); // İşlem başarısız olduğunda çalışır
  });
```