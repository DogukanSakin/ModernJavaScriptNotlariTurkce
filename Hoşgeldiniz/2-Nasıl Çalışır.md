## JavaScript Nasıl Çalışır?

JavaScript'in kullanım alanlarının artmasıyla günümüzde yalnızca web tarayıcısı ile çalıştırılmakla kalmayıp bugün çeşitli ve modern JavaScript motorları yani JavaScript Engine'ler mevcuttur. Peki nedir bu JavaScript Engine?

## JavaScript Engine

JavaScript motoru (JavaScript engine), JavaScript programlarını çalıştıran ve JavaScript dilinin kodlarını yorumlayan bir yazılım bileşenidir. JavaScript motorları, JavaScript kodunu alır ve bunu bilgisayarın anlayabileceği bir formata çevirir. Bu işlem genellikle iki aşamada gerçekleşir: yorumlama (interpretation) ve/veya derleme (compilation). Bazı JavaScript motorları yalnızca yorumlama yaparken, bazıları ise yorumlama ve derleme işlemlerini birleştirir.

Birkaç JavaScript Engine'e göz atacak olursak:

- V8: Google tarafından geliştirilen ve Chromium tabanlı tarayıcıların yanı sıra Node.js gibi ortamlarda da kullanılan bir JavaScript motorudur.

- SpiderMonkey: Mozilla Firefox tarayıcısının JavaScript motorudur. Mozilla topluluğu tarafından geliştirilmektedir.

- JavaScriptCore: Apple'ın Safari tarayıcısı için geliştirilen JavaScript motorudur.

- Chakra: Microsoft Edge tarayıcısı için geliştirilen JavaScript motorudur. Daha sonra Chromium tabanlı Edge'e geçildi ve V8 kullanılmaya başlandı.

## Çalışma Adımları

Bu başlık altında bir web tarayıcısı seneryosunda JavaScript kodunun çalışıtırması sürecinde gerçekleşen adımları inceleyelim:

- HTML ile entegrasyon: JavaScript kodu, HTML belgesi içerisinde <script> etiketleri arasına veya harici bir JavaScript dosyasına yerleştirilerek kullanılır. Tarayıcı, HTML'i işlerken <script> etiketini görünce JavaScript kodunu çalıştırmak için bir adım atar.

- Kod yüklenmesi: Tarayıcı, JavaScript kodunu yükler ve çalıştırmak için bir JavaScript motoruna (JavaScript engine) gönderir. Her tarayıcının kendi yerleşik JavaScript motoru vardır (örneğin, V8, SpiderMonkey, JavaScriptCore).

- Çalışma zamanı: JavaScript motoru, yorumlama veya derleme sonrası JavaScript kodunu çalıştırır. Bu aşamada değişkenler tanımlanır, fonksiyonlar çağrılır, döngüler çalışır ve diğer işlemler gerçekleştirilir.

