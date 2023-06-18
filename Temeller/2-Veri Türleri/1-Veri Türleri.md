## Değişkenlerde Veri Türleri

Bu başlık altında basitçe JavaScript'in hangi veri türlerine sahip olduğunu inceleyelim. Temel olarak 8 adet veri türü vardır. Bunlar:

- **String**: Metinsel ifadeleri temsil eder. Örneğin: "Merhaba Dünya", "JavaScript", "123" gibi.
- **Number**: Sayısal ifadeleri temsil eder. Örneğin: 123, 3.14, 0.5 gibi. Bazı dillerde pek çok number türü vardır. Ancak JavaScript'te sadece bir tane number türü vardır: 64 bitlik bir float türü.
- **Boolean**: Mantıksal ifadeleri temsil eder. Örneğin: true, false gibi.
- **Undefined**: Değer atanmamış değişkenleri temsil eder. Örneğin: var x; gibi.
- **Null**: Değerin boş olduğunu temsil eder. Örneğin: var x = null; gibi.
- **Object**: Nesneleri temsil eder. Örneğin: var x = {name: "JavaScript", version: "ES6"} gibi.
- **Array**: Dizileri temsil eder. Örneğin: var x = [1, 2, 3, 4, 5] gibi.
- **Function**: Fonksiyonları temsil eder. Örneğin: function x() { return 5; } gibi.

## Bir Değişkenin Veri Türü Nasıl Öğrenilir?

Bir değişkenin veri türünü öğrenmek için `typeof` anahtar kelimesini kullanabilirsiniz. Örneğin:

```
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

Ek bilgi: typeof null'ın object olarak resmi olarak bilinen bir typeof hatasıdır. Bu hata, JavaScript'in ilk sürümlerinden beri var olan bir hatadır ve geriye dönük uyumluluk nedeniyle düzeltilmemiştir. 

## Null ve Undefined Farklılıkları

JavaScript'te null ve undefined arasında bazı farklar vardır:

- Tanımlanmamış Değerler: undefined, bir değişkenin değerinin atanmadığı veya tanımlanmadığı anlamına gelir. Bir değişkeni tanımladığınızda, ancak değer atamadığınızda varsayılan olarak undefined değeri alır. Örneğin:

```
let x;
console.log(x); // Çıktı: undefined
```

- Eksik Parametreler: Fonksiyonlara parametre olarak geçirilmemiş argümanlar, fonksiyon içinde undefined olarak değerlendirilir. Örneğin:

```
function foo(x) {
  console.log(x); // Çıktı: undefined
}

foo();
```

- Belirli Olmayan Bir Durumu Temsil Etme: null, bir değişkenin bilinçli olarak bir değere sahip olmadığını veya geçerli olmayan bir değeri temsil ettiğini gösterir. Örneğin:

```
let y = null;
console.log(y); // Çıktı: null
```

- Tür: Hem null hem de undefined, JavaScript'te farklı türlerde değerlendirilir. null, özel bir değerdir ve object türündedir. undefined ise tür olarak undefined'dır.

```
console.log(typeof null); // Çıktı: object
console.log(typeof undefined); // Çıktı: undefined
```

- Atama: null, bir değişkene bilinçli olarak atanırken, undefined genellikle bir değişkenin varsayılan değeri olarak kullanılır veya değişkene atanmadığı durumda varsayılan değer olarak kabul edilir.

```
let z = null;
console.log(z); // Çıktı: null

let a;
console.log(a); // Çıktı: undefined
```



