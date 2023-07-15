Map ve Set'ten farklı olarak WeakMap ve WeakSet, WeakMap ve WeakSet nesneleri için özel bir bellek yönetimi sağlar. WeakMap ve WeakSet nesneleri, WeakMap ve WeakSet nesneleri dışında başka bir referans olmadığında bellekten silinir.

## WeakMap

Map'ten farkı key'ler obje olmalıdır. Yani map'teki gibi string olamaz. WeakMap'te key'lerin referansı tutulur. Eğer key'in referansı başka bir yerde tutulmuyorsa, WeakMap'ten silinir.

```js
let obj = { name: 'John' };

const map = new WeakMap();
map.set(obj, 'John Doe');

obj = null;
```

WeakMap'ler iterable değildir. Dolayısıyla yalnızca şu fonkisyonlara sahiptir:

- `get(key)`: WeakMap içerisindeki bir key'in değerini döner.
- `set(key, value)`: WeakMap içerisine yeni bir key-value çifti ekler.
- `has(key)`: WeakMap içerisinde bir key'in bulunup bulunmadığını kontrol eder. Eğer key, WeakMap içerisinde bulunuyorsa, `true` değeri döner. Eğer key, WeakMap içerisinde bulunmuyorsa, `false` değeri döner.
- `delete(key)`: WeakMap içerisinde bir key'i siler. Eğer key, WeakMap içerisinde bulunuyorsa, `true` değeri döner. Eğer key, WeakMap içerisinde bulunmuyorsa, `false` değeri döner.

## WeakSet

Set'ten farkı elemanlar obje olmalıdır. Yani set'teki gibi string olamaz. WeakSet'te elemanların referansı tutulur. Eğer elemanın referansı başka bir yerde tutulmuyorsa, WeakSet'ten silinir.

```js
let obj = { name: 'John' };

const set = new WeakSet();
set.add(obj);

obj = null;
```
