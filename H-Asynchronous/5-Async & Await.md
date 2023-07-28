## Async-Await

JavaScript'te "async/await", asenkron işlemleri yönetmek ve daha okunabilir, senkron tarzda kod yazmak için kullanılan bir özelliktir. "async" ve "await" anahtar kelimeleri ile birlikte kullanılırlar ve altında yatan mekanizma olarak Promise'ları kullanırlar. Asenkron işlemleri Promise zincirlerinden ve callback fonksiyonlarından kurtararak, kodu daha basit ve anlaşılır hale getirir.

async: async anahtar kelimesi, bir fonksiyonun asenkron bir fonksiyon olduğunu belirtmek için kullanılır. Bir fonksiyon "async" olarak tanımlandığında, bu fonksiyon otomatik olarak bir Promise döner. Bu sayede içerisindeki asenkron işlemleri await anahtar kelimesi ile yönetebiliriz.

await: await anahtar kelimesi, sadece "async" fonksiyonların içinde kullanılabilir ve bir Promise'in sonucunu beklemek için kullanılır. Bir fonksiyon içinde await kullanıldığında, JavaScript işlemi o noktada durdurur ve bekleyen Promise sonuçlandığında devam eder. Bu, asenkron kodları sanki senkron bir şekilde çalışıyormuş gibi yazmamıza olanak tanır.

```js
// Asenkron bir işlemi async/await ile yönetme
function simulateAsyncAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("İşlem başarılı!");
    }, 1000);
  });
}

async function myFunction() {
  try {
    console.log("İşlem başladı.");
    const result = await simulateAsyncAPI();
    console.log(result);
    console.log("İşlem tamamlandı.");
  } catch (error) {
    console.error("Hata:", error.message);
  }
}

myFunction();
```

## Error Handling

async/await ile asenkron işlemleri yönetirken, Promise zincirlerinde olduğu gibi hata yönetimini de unutmamalıyız. async/await ile hata yönetimi, try-catch blokları ile yapılır. Bir async fonksiyonu çağırdığımızda, bu fonksiyon otomatik olarak bir Promise döner. Bu nedenle, async fonksiyonları try-catch blokları içinde çağırmalıyız. Örneğin:

```js
async function myFunction() {
  try {
    const result = await simulateAsyncAPI();
    console.log(result);
  } catch (error) {
    console.error("Hata:", error.message);
  }
}
```


