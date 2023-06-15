## JavaScript'in Söz Dizimi

Belki daha önce bir programlama diliyle ilgilendiyseniz kod bloklarının sonuna noktalı virgül kullanımının zorunlu olduğuna şahit olmuşsunuzdur. Ancak JavaScript'te bu iş böyle değil dilerseniz koymayabilirsiniz. 

Ancak okunabilirlik açısından şunu incelediğimizde şu kullanım yerine:

```
alert('Hello'); alert('World');
```

Bu kullanımın daha okunabilir olduğunu görmek mümkün:

```
alert('Hello');
alert('World');
```

## Noktalı Virgül

Her ne kadar yukarıda noktalı virgülün kullanımının zorunlu olmadığını belirtsemde bazı durumlarda gerçekten zorunlu olabiliyor. Örneğin:

```
alert("Hello");

[1, 2].forEach(alert);
```

Şöyle bir kod önce Hello ardından sırasıyla 1 ve 2'yi gösterir. Ancak şunu inceleyelim:

```
alert("Hello")

[1, 2].forEach(alert);
```

Burada tek fark alert'te noktalı virgül olmaması. JavaScript Bu kodu şu hale getirerek yorumlar:

```
alert("Hello")[1, 2].forEach(alert);
```
Bu ise beklediğimiz sonucu bize göstermez. alert("Hello")[1, 2] sözdizimi alert'ten dönen değerleri okumaya çalışmaktır. Ancak alert bir değer döndürmez. Dolayısıyla kod hata verir.

