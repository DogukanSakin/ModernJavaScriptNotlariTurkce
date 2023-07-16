## Lexical Environment

Lexical Environment, kodun çalışma zamanında değişkenlerin ve fonksiyonların nasıl tanımlandığı ve erişildiği hakkında önemli bir kavramdır. Bu kavram, JavaScript dilinin çalışma mantığının temelini oluşturur ve kodun doğru bir şekilde çalışmasını sağlamak için oldukça önemlidir.

Lexical Environment, bir kod bloğu (genellikle bir fonksiyon) içindeki değişkenlerin ve fonksiyonların tanımlandığı yerdir ve bu kod bloğu içindeki değişkenlere ve fonksiyonlara erişimi belirler. Bir fonksiyonun çalışma zamanında, bu fonksiyonun lexical environment'ı fonksiyonun tanımlandığı anın çevresi olarak kabul edilir. Bu, fonksiyonun dışarıdan veya içeriden nasıl erişebileceği ve hangi değişkenleri ve fonksiyonları görebileceği konusunda önemli bir rol oynar.

Lexical Environment, iki bileşenden oluşur:

- Environment Record: İçinde tanımlanan tüm değişkenlerin ve fonksiyonların gerçek değerlerinin ve referanslarının saklandığı bir kayıttır. Bir değişkenin değeri, environment record içinde ilgili isimle ilişkilendirilir ve kod çalıştırıldığında bu değerlere erişilebilir hale gelir.

- Outer Environment Reference: Bu, bir fonksiyonun lexical enviroment'ına erişim sağlamak için başka bir lexical environment' referansı gösterir. Bir fonksiyon, kapsayıcı (üst) bir fonksiyon içinde tanımlandığında, içteki fonksiyonun lexical environment'i, dıştaki fonksiyonun lexical environment'ına referansla bağlanır. Bu şekilde, içteki fonksiyon, dıştaki fonksiyonun değişkenlerine ve fonksiyonlarına erişebilir.

Örneğin:

```js
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    let innerVariable = 'I am inside!';
    console.log(outerVariable); // innerFunction, outerFunction'ın leksikal çevresine erişebilir
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // 'I am outside!' yazdırır, innerFunction outerFunction'ın leksikal çevresine erişebilir
```