## Map

Map: Key-Value çiftlerini tutan bir veri yapısıdır. Key-Value çiftleri, birbirinden farklı key'ler ile temsil edilir. Key'ler, Map içerisinde benzersiz olmalıdır. Bir key, Map içerisinde sadece bir kez bulunabilir. Bir key, Map içerisinde bulunmuyorsa, Map içerisindeki bir değere erişmeye çalıştığımızda `undefined` değeri döner.

```js
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('age', 31);
```

Map fonksiyonları:

- `set(key, value)`: Map içerisine yeni bir key-value çifti ekler. Eğer key, Map içerisinde bulunuyorsa, value değeri güncellenir.
- `get(key)`: Map içerisindeki bir key'e karşılık gelen value değerini döner. Eğer key, Map içerisinde bulunmuyorsa, `undefined` değeri döner.
- `has(key)`: Map içerisinde bir key'in bulunup bulunmadığını kontrol eder. Eğer key, Map içerisinde bulunuyorsa, `true` değeri döner. Eğer key, Map içerisinde bulunmuyorsa, `false` değeri döner.
- `delete(key)`: Map içerisinde bir key-value çiftini siler. Eğer key, Map içerisinde bulunuyorsa, `true` değeri döner. Eğer key, Map içerisinde bulunmuyorsa, `false` değeri döner.
- `clear()`: Map içerisindeki tüm key-value çiftlerini siler.
- `size`: Map içerisindeki key-value çiftlerinin sayısını döner.

Map'lerde objelerdeki gibi map[key] gibi bir yapı kullanılabilir. Ancak bunu kullanmak yerine `get()` ve `set()` fonksiyonları kullanılmalıdır.

Map'te iterasyon için şu fonksiyonlar kullanılabilir:

- `map.keys()` : Map içerisindeki tüm key'leri döner.
- `map.values()` : Map içerisindeki tüm value'ları döner.
- `map.entries()` : Map içerisindeki tüm key-value çiftlerini döner.

Bir objeden Map oluşturmak için `Object.entries()` fonksiyonu kullanılabilir.

```js
const obj = {
  name: 'John',
  age: 30
};

const map = new Map(Object.entries(obj));
```

Map'ten obje oluşturmak için `Object.fromEntries()` fonksiyonu kullanılabilir.

```js
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

const obj = Object.fromEntries(map);
```

## Set

Set: Benzersiz elemanları tutan bir veri yapısıdır. Set içerisindeki elemanlar, Set içerisinde benzersiz olmalıdır. Bir eleman, Set içerisinde sadece bir kez bulunabilir.

```js
const set = new Set();
set.add(1);
set.add(2);
set.add(2);
```

Set fonksiyonları:

- `add(value)`: Set içerisine yeni bir eleman ekler. Eğer eleman, Set içerisinde bulunuyorsa, Set içerisine eklenmez.
- `has(value)`: Set içerisinde bir elemanın bulunup bulunmadığını kontrol eder. Eğer eleman, Set içerisinde bulunuyorsa, `true` değeri döner. Eğer eleman, Set içerisinde bulunmuyorsa, `false` değeri döner.
- `delete(value)`: Set içerisinde bir elemanı siler. Eğer eleman, Set içerisinde bulunuyorsa, `true` değeri döner. Eğer eleman, Set içerisinde bulunmuyorsa, `false` değeri döner.
- `clear()`: Set içerisindeki tüm elemanları siler.
- `size`: Set içerisindeki elemanların sayısını döner.

Set'te iterasyon için şu fonksiyonlar kullanılabilir:

- `set.keys()` : Set içerisindeki tüm elemanları döner.
- `set.values()` : Set içerisindeki tüm elemanları döner.
- `set.entries()` : Set içerisindeki tüm elemanları döner.




