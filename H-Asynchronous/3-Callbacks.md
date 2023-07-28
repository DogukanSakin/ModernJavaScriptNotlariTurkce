## Callbacks

JavaScript'te "callback" terimi, işlevlerin diğer işlevlere argüman olarak geçirilebildiği ve ardından bir işlem tamamlandığında çağrılabilen işlevlerdir. JavaScript, asenkron programlama yapısına uygun olarak çalıştığından, callback fonksiyonları özellikle asenkron işlemlerde yaygın olarak kullanılır.

Callback fonksiyonları, JavaScript'te "first-class functions" olarak kabul edilen bir özellik sayesinde mümkün olur. Bu, fonksiyonların bir değişkene atanabileceği, diğer fonksiyonların içinde tanımlanabileceği ve diğer fonksiyonlara argüman olarak geçirilebileceği anlamına gelir.

## Asenkron İşlemlerde Callback

JavaScript, asenkron işlemleri gerçekleştiren fonksiyonların sonucunu hemen döndürmek yerine, işlem tamamlandığında bir callback fonksiyonunu çağırarak sonucu işlemek için kullanır. Bu, ağ istekleri, dosya okuma/yazma işlemleri, zamanlayıcılar ve diğer asenkron görevler gibi durumlar için kullanışlıdır.

Örnek olarak, Node.js ortamında dosya okuma işlemini gerçekleştiren bir fonksiyonu ele alalım:

```js
const fs = require('fs');

fs.readFile('dosya.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Dosya okuma hatası:', err);
  } else {
    console.log('Dosya içeriği:', data);
  }
});
```

## Senkron işlemler ile Callback'lerin Kullanımı

Senkron işlemler, bir sonraki işleme geçmeden önce tamamlanmalıdır. Bununla birlikte, bazen senkron işlem yapmanın beklenen sonucunu başka bir işlem tamamlanınca kullanmak isteyebilirsiniz. Bu durumda, callback'leri senkron işlemlerle kullanabilirsiniz.

Örnek olarak, senkron bir işlemi yapan bir fonksiyona bir callback fonksiyonu geçelim:

```js
function senkronIslem(param, callback) {
  // Senkron işlem yapılır
  // ...

  // İşlem tamamlandığında callback'i çağır
  callback();
}

// Fonksiyonu kullanırken callback'i geçelim
senkronIslem('veri', function() {
  console.log('Senkron işlem tamamlandı, callback çalıştı!');
});

```

## Error Handling

Callback'lerin en yaygın kullanımı, bir işlem sırasında oluşabilecek hataları ele almak için kullanılır. Örneğin, bir dosya okuma işlemi sırasında bir hata oluşursa, bu hatayı ele almak için bir callback fonksiyonu kullanabilirsiniz.

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

## Callback Hell

Callback'lerin kullanımı, birçok işlemi sırayla gerçekleştirmek için kullanılabilir. Ancak, birçok işlemi sırayla gerçekleştirmek için birçok callback fonksiyonu kullanırsanız, kodunuz okunması zor bir hale gelebilir. Bu duruma "callback hell" denir.


```js
loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});
```

