## Modules

avaScript'te modüller, kodunuzu bağımsız, yeniden kullanılabilir ve düzenli bir şekilde organize etmenizi sağlayan bir yapıdır. Modüller, kod tabanınızın büyümesi ve yönetimi sırasında oldukça faydalıdır. ES6 (ECMAScript 2015) ile birlikte JavaScript diline eklenen "import" ve "export" anahtar kelimeleri sayesinde modüller kullanımı daha kolay ve standart hale gelmiştir.

Modüllerin temel amacı, kodu parçalara ayırmak ve her parçayı kendi dosyasında saklamaktır. Modüller başlıca olarak şunları sağlar:

- Kodun Düzenlenmesi ve Bakımı: Modüller, kodu parçalara ayırarak, kod tabanının daha düzenli ve sürdürülebilir olmasını sağlar. Böylece kodun anlaşılması, değiştirilmesi ve bakımı daha kolay hale gelir.

- Tekrar Kullanılabilirlik: Modüller, işlevselliği belirli bir amaca hizmet edecek şekilde düzenlediğiniz için, bu modülleri başka projelerde veya farklı bölümlerde yeniden kullanabilirsiniz.

- Kapsülleme: Modüller, içindeki kodu diğer kısımlardan gizleyerek, kodunuzun başka parçalarla çakışmasını önler ve istenmeyen etkileşimleri azaltır.

- Çakışmaları Önleme: Modüllerdeki fonksiyon ve değişken isimleri, modül içinde kapsüllendiği için, diğer modüllerle çakışma riski düşer.

- Performans: Modüller, sadece ihtiyaç duyulduğunda yüklenir ve çalıştırılır, bu sayede gereksiz yüklemelerden kaçınılır ve performans artırılır.


Modüllerde kullandığımız iki keyword vardır:

- import: Başka bir modülü içe aktarmak için kullanılır.
- export: Bir modülü dışa aktarmak için kullanılır.

```js
// utils.js

// Fonksiyon tanımlama
function square(x) {
  return x * x;
}

// Değişken tanımlama
const pi = 3.14159265359;

// Fonksiyonları veya değişkenleri dışarı aktarma
export { square, pi };
```

Başka bir dosyada bu modülü kullanmak için, import keyword'ünü kullanırız.

```js
// main.js

// "utils.js" modülünü içeri aktarma
import { square, pi } from './utils.js';

// Fonksiyon ve değişkenleri kullanma
console.log(square(5)); // Çıktı: 25
console.log(pi); // Çıktı: 3.14159265359
```

Bir dosyada birden fazla şeyi dışa aktarmak isterseniz, "export" ifadesini nesne olarak kullanabilirsiniz:

```js
// utils.js

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

const pi = 3.14159265359;

export { add, subtract, pi };
```



