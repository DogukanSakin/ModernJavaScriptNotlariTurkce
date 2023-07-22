## Hoisting

JavaScript hoisting, Türkçe olarak "kaldırma" veya "yükseleme" anlamına gelir ve JavaScript'in çalışma zamanındaki bir davranışıdır. Hoisting, JavaScript motorunun kodu nasıl yürüttüğüyle ilgili bir kavramdır ve genellikle değişkenlerin ve fonksiyonların tanımlanma süreciyle ilişkilidir.

Hoisting, iki şekilde etkisini gösterir:

## Değişken Hoisting

Hoisting, değişkenin tanımlanmasını veya açıklamasını, kodun ilgili kısmından önce gerçekleştiği gibi algılar. Bu, değişkenin var ya da let ile tanımlanmış olsa bile, kodun başında bir yükseltilmiş (hoisted) değişken olduğu anlamına gelir.

```js
console.log(x); // Çıktı: undefined
var x = 5;
console.log(x); // Çıktı: 5
```

## Fonksiyon Hoisting

Fonksiyon tanımları da değişken hoisting gibi yukarı taşınır. Yani, fonksiyonlar, kodun ilgili kısmından önce çağrılabilirler.

```js
foo(); // Çıktı: "Merhaba dünya!"

function foo() {
  console.log("Merhaba dünya!");
}
```