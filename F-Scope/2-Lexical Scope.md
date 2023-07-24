## Lexical Scope

JavaScript'teki "lexical scope" (lexical kapsam), bir değişkenin nereden erişilebileceğini belirleyen kapsam türüdür. Bu kapsam türü, değişkenin kodun hangi bölümünde tanımlandığına dayanır ve değişkenin kapsamı, tanımlandığı yeri çevreleyen kod yapısına göre belirlenir. Başka bir deyişle, lexical scope, değişkenin belirli bir kod bloğu veya fonksiyon içinde erişilebilir olacağı anlamına gelir.

JavaScript'te lexical scope, programcının kodu yazarken doğal olarak oluşturduğu kapsamı ifade eder. Değişkenler, tanımlandıkları blok veya fonksiyonun "scope"u içinde erişilebilir ve dışında erişilemezler.

```js
function outerFunction() {
  const outerVariable = 'Bu bir dış değişkendir';

  function innerFunction() {
    const innerVariable = 'Bu bir iç değişkendir';
    console.log(outerVariable); // Çıktı: "Bu bir dış değişkendir"
    console.log(innerVariable); // Çıktı: "Bu bir iç değişkendir"
  }

  innerFunction();
}

outerFunction();
console.log(outerVariable); // Hata: outerVariable tanımsız 
console.log(innerVariable); // Hata: innerVariable tanımsız
```

Lexical scope, bir fonksiyonun tanımlandığı yeri baz alır ve o fonksiyon nerede çağrılırsa çağrılsın, o tanımlanan yere göre kapsam belirlenir. Bu da kapsamın tahmin edilebilir ve mantıklı bir şekilde oluşturulmasını sağlar.

ES6 ile tanıtılan let ve const anahtar kelimeleri, block scope oluşturarak lexical scope konusunu daha da güçlendirmiştir. Böylece let ve const ile tanımlanan değişkenler sadece belirli bir kod bloğunda (blok kapsamında) geçerlidir ve dışarıdaki kod bu değişkenlere erişemez. Ancak var anahtar kelimesi function scope oluşturur ve lexical scope kurallarına uymaz.