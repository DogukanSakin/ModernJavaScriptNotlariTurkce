## XMLHttpRequest

XMLHttpRequest, tarayıcı tabanlı web uygulamalarında kullanılan bir JavaScript nesnesidir ve sunucuyla iletişim kurmak için kullanılır. Bu nesne, AJAX (Asenkron JavaScript ve XML) teknolojisinin temelini oluşturur ve web sayfalarının dinamik olarak veri alışverişi yapmasına ve sayfa yenileme olmaksızın içeriği güncellemesine izin verir.

XMLHttpRequest nesnesi, sunucudan veri almak veya sunucuya veri göndermek için HTTP veya HTTPS protokollerini kullanır. Bu, veri alışverişi için özellikle uygun olan asenkron bir yapıya sahiptir, bu sayede sayfanın diğer işlemlerini bloke etmeden veri alışverişi yapabilir.

Örnek kullanım:

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.responseType = 'json';
xhr.onload = () => {
  console.log(xhr.response);
};

xhr.send();
```

Önemli Not: XMLHttpRequest nesnesi modern tarayıcılarda hala kullanılabilir olsa da, daha yeni ve gelişmiş bir alternatif olan "Fetch API" ve "axios" gibi kütüphaneler daha yaygın olarak tercih edilmektedir. Bu kütüphaneler, daha kolay kullanım ve daha güvenli işlem gibi avantajlar sağlar.

XMLHttpRequest üç durumda kullanılabilir:

- Eski browser'ları desteklemek için
- Mevcut script'lerde XMLHttpRequest kullanıldığı için
- XMLHttpRequest'in sağladığı özelliklerin Fetch API'de bulunmaması (örneğin upload progess tracking için)
