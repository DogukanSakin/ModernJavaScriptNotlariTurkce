## Try & Catch

try-catch blokları, programın çalışması sırasında oluşabilecek hataların önüne geçmek için kullanılır. Bu bloklar sayesinde programın çalışması sırasında oluşabilecek hataların önüne geçilir ve programın çalışması durdurulmaz. 

```js
try {
  // Hata oluşabilecek kodlar
} catch (error) {
  // Hata olduğunda çalışacak kodlar
}finally {
  // Opsiyonel: Her durumda çalışmasını istediğiniz kod bloğu
}
```

Örneğin:

```js
try {
  // Kullanıcıdan bir sayı girmesini isteyelim
  const sayi = Number(prompt("Bir sayı girin:"));

  // Girdiği sayıyı 2'ye bölelim
  const sonuc = sayi / 2;

  // Eğer girdiği değer bir sayı değilse veya NaN (Not-a-Number) ise bir hata oluşacaktır
  if (isNaN(sonuc)) {
    throw new Error("Geçersiz sayı");
  }

  console.log("Sonuç:", sonuc);
} catch (hata) {
  // Hata durumunda bu blok çalışır
  console.error("Hata oluştu:", hata.message);
} finally {
  // Her durumda çalışacak kodlar burada yer alır
  console.log("İşlem tamamlandı.");
}
```
