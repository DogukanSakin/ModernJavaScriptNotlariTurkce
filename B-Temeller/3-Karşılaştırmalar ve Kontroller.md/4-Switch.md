## Switch

Switch, bir değişkenin değerine göre farklı işlemler yapabilir. Bu yönüyle if kontrolüne benzer.

```js
let age = 18;

switch (age) {
  case 18:
    alert("Yaşınız 18");
    break;
  case 19:
    alert("Yaşınız 19");
    break;
  default:
    alert("Yaşınız 18 veya 19 değil");
}
```

## Switch ve If Arasındaki Farklar

if ifadesi, belirli bir koşulun doğru veya yanlış olmasına bağlı olarak farklı kod bloklarının çalıştırılmasını sağlar. Yani, bir koşulun doğru olduğu durumlarda belirli bir kod bloğunu çalıştırabilirsiniz. Ayrıca else if ve else ifadeleriyle daha karmaşık kontrol yapısı oluşturabilirsiniz. İşte basit bir örnek:

```js
let sayi = 5;

if (sayi > 0) {
    console.log("Sayı pozitif.");
} else if (sayi < 0) {
    console.log("Sayı negatif.");
} else {
    console.log("Sayı sıfır.");
}

// Çıktı: Sayı pozitif.
```

Öte yandan, switch ifadesi, bir değişkenin farklı değerlerine bağlı olarak farklı işlemleri gerçekleştirmek için kullanılır. switch ifadesi, bir veya daha fazla case ifadesiyle değerleri karşılaştırır ve eşleşen bir case bulduğunda ilgili kod bloğunu çalıştırır. İşte basit bir örnek:
    
```js
Copy code
var meyve = "elma";

switch (meyve) {
    case "elma":
        console.log("Bu bir elmadır.");
        break;
    case "armut":
        console.log("Bu bir armuttur.");
        break;
    default:
        console.log("Bu bir meyve değildir.");
        break;
}
```

Genel olarak, if ifadesi daha esnek bir kontrol yapısıdır ve karmaşık koşulları değerlendirmek için kullanılabilir. switch ifadesi ise daha çok belirli değerlere dayalı kararlar vermek için kullanılır ve bazen daha okunabilir ve düzenli bir yapı sağlar. Seçim yapısı daha karmaşık olduğunda if ifadesi tercih edilebilirken, daha sınırlı seçenekler varsa veya daha düzenli bir yapı gerekiyorsa switch ifadesi kullanılabilir. Her iki ifade de JavaScript'te yaygın olarak kullanılan kontrol yapılarıdır ve kullanım tercihi genellikle duruma ve kişisel tercihlere bağlıdır.





