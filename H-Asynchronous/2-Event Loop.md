## Event Loop

JavaScript'te "event loop" (olay döngüsü), asenkron işlemleri yönetmek ve kodun nasıl çalıştığını düzenlemek için kullanılan önemli bir kavramdır. JavaScript, tek bir iş parçacığı (thread) üzerinde çalışan bir dildir ve bu nedenle zaman alıcı veya yoğun işlemler, diğer kodları ve kullanıcı arayüzünü bloke edebilir. Asenkron programlama, işlemlerin bu blokajlara neden olmadan sırayla yürütülmesini sağlar.

Event loop, JavaScript çalışma zamanının bir parçasıdır ve aşağıdaki işlevlere sahiptir:

- Call Stack (Çağrı Yığını): Kod çalıştığında, işlevler ve yapılar bir çağrı yığını içinde sırayla yürütülür. Bir işlev çağrıldığında, çalıştırılması tamamlandığında yığından çıkar. İşlem, yığın boşalana kadar devam eder.

- Callback Queue (Geri Çağırma Sırası): Asenkron işlemler (örneğin zamanlayıcılar, dosya okuma işlemleri, ağ istekleri) tamamlandığında veya belirli olaylar gerçekleştiğinde, ilgili geri çağırmalar (callback fonksiyonları) bu sıraya eklenir.

- Event Loop (Olay Döngüsü): JavaScript çalışma zamanı, sürekli olarak çağrı yığınında bekleyen işlemleri ve geri çağırma sırasında biriken işlemleri takip eder. Eğer çağrı yığını boş ise, event loop, geri çağırma sırasından bir işlevi çağırarak işlem sırasını sürdürür. Bu işlem, sürekli olarak tekrarlar ve asenkron işlemlerin uygun zamanlarda çalıştırılmasını sağlar.

- Microtask Queue (Mikro Görev Sırası): Callback Queue'a benzer şekilde, mikro görev sırası da bulunur. Ancak, mikro görevler, daha öncelikli olarak işlenir ve her tamamlanan macrotask (büyük işlem) ardından kontrol edilir. Bu, mikro görevlerin önceliğini ve anında cevap gerektiren işlemleri yönetmeye yardımcı olur.

## Event Loop Örneği

Aşağıdaki örnekte, bir zamanlayıcı (setTimeout) kullanarak bir asenkron işlem oluşturulur. Bu işlem, 3 saniye sonra gerçekleşir ve bir mesajı konsola yazdırır. Bu işlem, event loop tarafından yönetilir ve çağrı yığını boş olduğunda çalıştırılır.

```js
console.log('1');

setTimeout(() => {
  console.log('2');
}, 3000);

console.log('3');
```

Yukarıdaki kod, aşağıdaki çıktıyı üretir:


1
3
2

## Event Loop Çalışma Prensibi

- Öncelikle, Call Stack'teki (Çağrı Yığını) işlemler yukarıdan aşağıya doğru gerçekleştirilir.
- Eğer Call Stack'teki bir işlem, asenkron bir işlem (örneğin: setTimeout, fetch gibi) içeriyorsa, bu işlem Web APIs tarafına yönlendirilir ve burada işlem gerçekleştirilir.
- Asenkron işlem tamamlandığında, bu işlem Task Queue'ya (Görev Kuyruğu) eklenir.
- Event Loop, sürekli olarak Call Stack'in boş olup olmadığını kontrol eder. Eğer Call Stack boş ise, Event Loop, Task Queue'daki işlemleri Call Stack'e aktarır ve bu işlemler gerçekleştirilir.





