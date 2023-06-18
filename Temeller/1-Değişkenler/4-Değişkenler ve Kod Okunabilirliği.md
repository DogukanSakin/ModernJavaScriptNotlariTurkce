## Değişkenler ve Kod Okulabilirliği

JavaScript'te clean code (temiz kod) yazmak için değişkenlerin doğru kullanımı ve isimlendirilmesi önemlidir. Programlama dilinden bağımsız olarak şu söylenebilir ki sadece değişken isimlerine bakarak kdou geliştiren kişinin seviyesini ölçebilirsiniz. :)

Açık ve Anlaşılır İsimler: Değişkenlerin isimleri, neyi temsil ettiklerini anlamak için açık ve anlaşılır olmalıdır. İsimlendirme yaparken, değişkenin amacını, içeriğini veya kullanımını yansıtan anlamlı isimler seçilmelidir. Bu, kodun okunabilirliğini artırır.

Kötü:

```
let a = 5; // Ne anlama geldiği belirsiz
let s = calculateSum(); // Fonksiyonun amacı belirsiz
```

İyi:

```
let numberOfStudents = 5; // Öğrenci sayısını temsil ediyor
let totalSum = calculateSum(); // Toplamı hesaplayan bir fonksiyonu temsil ediyor
```
Kısa ve Öz: İsimler kısa ve öz olmalıdır, gereksiz uzunluklardan kaçınılmalıdır. Ancak, anlamsız veya anlaşılmaz kısaltmalar yerine açıklayıcı kısaltmalar kullanılmalıdır.

Kötü:

```
let numStu = 5; // Anlamı belirsiz kısaltma
let calcSum = calculateSum(); // Fonksiyonun amacı belirsiz kısaltma
```

İyi:

```
let stuCount = 5; // Öğrenci sayısını temsil ediyor
let sum = calculateSum(); // Toplamı hesaplayan bir fonksiyonu temsil ediyor
```

Dil Kurallarına Uygunluk: JavaScript dil kurallarına uygun değişken isimleri kullanılmalıdır. Değişken isimleri harfle (A-Z veya a-z), alt çizgi (_) veya rakamla (0-9) başlayabilir, boşluk veya özel karakterler içeremez. Aynı zamanda, anahtar kelimelerle (if, for, while, vb.) çakışmayan isimler tercih edilmelidir.

Kötü:

```
let 1stNumber = 5; // Rakamla başlayan geçersiz bir isim
let my variable = "Hello"; // Boşluk içeren geçersiz bir isim
let if = true; // Anahtar kelime ile çakışan geçersiz bir isim
```

İyi:

```
let firstNumber = 5; // Geçerli bir isim
let myVariable = "Hello"; // Geçerli bir isim
let isAvailable = true; // Geçerli bir isim
```

Tek Bir Anlamı Olan İsimler: Değişken isimleri, tek bir anlama sahip olmalıdır. Birden fazla anlam taşıyan veya birden fazla amaca hizmet eden değişken isimlerinden kaçınılmalıdır. Böylece, kodun anlaşılması ve sürdürülebilirliği kolaylaşır.

Kötü:

```
let data = "John"; // Data neyi temsil ediyor? Öğrenci adı mı, kullanıcı adı mı?
let result = process(); // Result, sonuç mu, hata mesajı mı?
```

İyi:

```
let studentName = "John"; // Öğrenci adını temsil ediyor
let processedData = process(); // İşlenmiş veriyi temsil ediyor
```

Tek Harfli Değişkenlerden Kaçının: Tek harfli değişken isimleri genellikle anlaşılmaz olabilir ve kodun okunurluğunu düşürebilir. Tek harfli isimler yalnızca belirli durumlarda (genellikle döngülerde veya matematiksel hesaplamalarda) tercih edilebilir.

Kötü:

```
let x = 5; // Anlamı belirsiz tek harfli isim
let y = calculateValue(); // Anlamı belirsiz tek harfli fonksiyon adı

```

İyi:

```
let value = 5; // Anlamlı bir isim
let calculatedValue = calculate(); // Anlamlı bir fonksiyon adı
```

const, değişmeyen değerlere anlamlı isimler vererek kodun okunurluğunu artırır. Diğer programcılar veya sizin kendiniz kodu okuduğunuzda, const ile tanımlanan bir değişkenin sabit olduğunu ve değerinin değiştirilemeyeceğini anlarsınız.

```
const MAX_ATTEMPTS = 3;
const DEFAULT_USERNAME = "guest";
```
