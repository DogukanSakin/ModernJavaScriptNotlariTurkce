## Export - Import

Tanımlamalardan önce export yapabiliriz:

```js
export const pi = 3.14159265359;

export function square(x) {
  return x * x;
}
```

Burada noktali virgül kullanmak çoğu JavaScript style guids tarafından önerilmez. 

`import *` ile tüm fonksiyonları ve değişkenleri içeri aktarabiliriz:

```js
import * as utils from './utils.js';

console.log(utils.square(5)); // Çıktı: 25

console.log(utils.pi); // Çıktı: 3.14159265359
```

`import as` ile fonksiyonları ve değişkenleri yeniden adlandırabiliriz:

```js
import { square as kare, pi as PI } from './utils.js';

console.log(kare(5)); // Çıktı: 25

console.log(PI); // Çıktı: 3.14159265359
```

`export as ` ile fonksiyonları ve değişkenleri yeniden adlandırabiliriz:

```js
function square(x) {
  return x * x;
}

const pi = 3.14159265359;

export { square as kare, pi as PI };
```

`export default` ile bir modülün varsayılan değerini dışa aktarabiliriz:

```js
// utils.js

export default function(x) {
  return x * x;
}
```

```js

// main.js

import square from './utils.js';

console.log(square(5)); // Çıktı: 25
```

Bir dosyanın yalnızca bir default export'u olabilir.


## Re-export

re-export bir modülün içindeki belirli bir içeriği başka bir modülde tekrar kullanılabilir hale getirme işlemidir.

Çeşitleri:

- export [default] class/function/variable
- export {x [as y], ...}.
- export * from ... [as y].
- export {default [as y]} from "module"