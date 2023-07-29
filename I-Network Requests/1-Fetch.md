## Fetch 

JavaScript'te fetch, web tarayıcıları ve Node.js gibi ortamlarda HTTP talepleri göndermek için kullanılan bir API'dir. fetch, modern tarayıcılarda ve Node.js'de yaygın olarak desteklenir ve asenkron (promise tabanlı) bir yapıya sahiptir.

Bu API, sunucu tarafından sağlanan verilere, API'lere ve diğer internet kaynaklarına erişmek için kullanılabilir. Genellikle JSON verileri, XML, HTML veya diğer metin tabanlı veri formatları gibi verileri almak için kullanılır.

fetch kullanımı, XMLHttpRequest veya diğer HTTP talep yöntemlerine kıyasla daha modern ve kolaydır. Çünkü fetch, promiselerle çalışır ve verileri çekmek ve kullanmak için daha tutarlı bir yapı sunar.

```js
fetch('https://api.example.com/data')
  .then(response => response.json()) // Gelen yanıtı JSON formatına çevir
  .then(data => {
    // İşlemler
    console.log(data);
  })
  .catch(error => {
    // Hata yönetimi
    console.error('Hata:', error);
  });
```

## Fetch ile Response Body



