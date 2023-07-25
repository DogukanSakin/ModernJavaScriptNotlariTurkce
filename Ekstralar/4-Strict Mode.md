## Strict Mode

"strict mode" (katı kip) kod yazımında yapılan hataları yakalamayı ve bazı özellikleri devre dışı bırakarak daha güvenli bir kodlama deneyimi sunmayı amaçlayan bir özelliktir. "use strict" ifadesi ile etkinleştirilir ve aşağıdaki şekilde kodun başına eklenir:

```js
"use strict";

// Kodunuz buraya gelecek
```

Artık bu ifadeyi kullanarak yazılan kod, katı kipin sağladığı kurallara uymak zorundadır. Peki, katı kipin sunduğu avantajlar ve uygulamaları nelerdir? İşte bazı temel konular:

- Hata Yakalama: Katı kip, yazım hatalarını ve potansiyel sorunları daha erken aşamalarda tespit etmenize yardımcı olur. Örneğin, tanımlanmamış değişkenler kullanma veya değiştirilemez (const) olarak tanımlanan bir değişkene yeni bir değer atama gibi hatalar derleme sırasında fark edilir.

- Deklarasyonları Zorunlu Kılma: Katı kip, değişkenlerin tanımlanmasını, fonksiyonların argümanlarını ve nesne özelliklerini oluşturmadan önce onları açıkça bildirme zorunluluğunu getirir. Bu, yanlışlıkla global değişkenler oluşturma riskini azaltır ve kodun daha anlaşılır olmasına yardımcı olur.

- Global Kapsamda Güvenlik: Katı kip, kodun global kapsama düşmesini sınırlandırır ve güvenliğe katkıda bulunur. "use strict" ifadesi, kodun birden çok dosyada çalıştığı büyük projelerde, global kapsamda çakışmaları önlemek için kullanışlıdır.

- Eval ve Arguments Kısıtlamaları: Katı kip, "eval" ve "arguments" gibi potansiyel güvenlik açıklarına sahip olan özellikleri sınırlar. Özellikle "eval" kullanımı güvenlik riskleri oluşturabilir, bu nedenle katı kip bu tür kullanımları engelleyerek güvenliğinizi artırır.

- Silme Kısıtlamaları: Katı kipte, değişkenlerin veya fonksiyonların "delete" operatörü ile silinmesi engellenir. Bu, önemli verilerin yanlışlıkla silinmesini önler ve programın tutarlılığını artırır.

- Octal Sayıların Kısıtlanması: Katı kip, oktal sayıları kullanmanın (örneğin, 010 veya 0o10) önüne geçer ve bu tür sayılar artık syntax hatası olarak kabul edilir.