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

Dönen sonucun body'sini almak için ek metod çağrıları yapmamız gerekir. Bu metodlar:

- response.json() - JSON formatında dönen verileri almak için kullanılır.
- response.text() - Text formatında dönen verileri almak için kullanılır.
- response.formData() - Form verilerini almak için kullanılır.
- response.blob() - Binary verileri almak için kullanılır.
- response.arrayBuffer() - ArrayBuffer verileri almak için kullanılır.
- response.body - ReadableStream verileri almak için kullanılır.

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

Burada yalnızca bir tane body-reading metod seçmemiz gerekir. Birden fazla kullanım hata verecektir.

## Post Request

Post request yapmak için fetch metodunun ikinci parametresini kullanmamız gerekir. Bu parametre bir obje alır ve bu obje içerisinde request ayarları yapılır.

```js
const data = {
  username: 'example',
  password: 'example'
};
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

```





