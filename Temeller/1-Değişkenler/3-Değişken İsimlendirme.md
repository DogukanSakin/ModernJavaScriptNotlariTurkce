## Değişken İsimlendirmeleri ve Sınırlamalar

JavaScript'te değişken isimlendirirken sadece iki sınırlama vardır:

- Değişken adı yalnızca harf, rakam veya $ ve _ simgelerini içermelidir.
- Değişken adının ilk karakteri rakam olmamalıdır.

JavaScript'te bir değişken yalnızca $ veya _ içerebilir:

```
let $ = 1; 
let _ = 2; 

alert($ + _); // 3

```
Yanlış isimlendirme örnekleri:

```
let 1a; 

let my-name; 
```

Bir değişken isminin büyük harflerle yazılışı farklı bir değişkene işaret eder.

```
let apple;
let APPLE;
```
Örneğin burada tanımlanan iki değişkende birbirinden farklıdır.

Dilin kendisine özgü diğer anahtar kelimeleri değişken ismi olarak belirleyemezsiniz. Bunlar tamamen hatalıdır:

```
let let = 5; 
let return = 5;
```


## Camel Case Kavramı

Camel case, değişken veya fonksiyon adlarının yazılırken kullanılan bir yazım stili veya kavramdır. Bu stilde, birden fazla kelimenin birleştiği bir ifade yazılırken, her kelimenin baş harfi küçük, ilk harf haricindeki kelimelerin baş harfleri ise büyük harfle yazılır. JavaScript'te camel case kullanımı oldukça yaygındır ve genellikle değişken, fonksiyon veya nesne adları için tercih edilir.

Örneğin:

```
let firstName = "John";
let lastName = "Doe";

function getFullName() {
  return firstName + " " + lastName;
}
```
Camel case yazım stili, isimlendirme tutarlılığı sağlar ve okunabilirliği artırır. Ayrıca, JavaScript'te camel case kullanımı, genellikle standart kodlama pratiklerine uygundur ve topluluk tarafından yaygın olarak kabul edilir.

## const

const anahtar kelimesi, sabit bir değer atanması gereken değişkenlerin tanımlanması için kullanılır. Bir kez değer atandıktan sonra, const ile tanımlanan değişkenlerin değeri değiştirilemez ve yeniden atanamaz. const değişkenleri, değişmeyen veya sabit değerlere referans sağlamak için tercih edilir. Örneğin PI sayısını düşünün 3,14.. gibi bir değere sahip. Bu sayıyı tanımlarsınız ve değişmesini istemezsiniz. Çünkü sabittir. :)

```
const PI = 3.14159;
const MAX_SIZE = 100;

```

Sabitler yani const'lar bir programın çalıştırılmadan önce de bilinen değerleri için kullanılırlar ve genelde _ ile isimlendirilirler.

Örneğin:

```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
```


## const Nasıl İsimlendirilir?

Burada aslında bu sabit değerin daha önceden bilinip bilinmediği önemlidir. Örneğin yukarıda renkleri belirledir ve bu renkleri bir uygulama boyunca kullanacağımızı hayal edelim. Dolayısıyla bu değerlerin isimlerini hepsini büyük ve _ kullanarak isimlendirmeliyiz. Zorunlu değildir elbet ancak bunu yapmak kodu daha okunabilir hale getirir.

Benzer şekilde başlangıçta bilinmeyen ancak uygulama çalıştığında hesaplanıp sabit olacak bir değeri yukarıda bahsettiğim camel case'e uyumlu olarak yazabiliriz.

Örneğin bir sayfanın yüklenme süresi başta belli değildir. Ancak uygulama çalıştıktan sonra belirlenip sabit olacaktır.

```
const pageLoadTime = ...
```


