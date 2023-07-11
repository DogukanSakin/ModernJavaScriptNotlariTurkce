## Değişkenler nedir? Neden İhtiyaç Duyulur?

Değişkenler, yazılım geliştirme sürecinde bilgileri saklamak ve işlemek için kullanılan temel yapısal unsurlardır. Peki onlara neden ihtiyaç duyarız?

- Bilgilerin saklanması: Değişkenler, programın çalışması sırasında kullanılacak olan verileri saklamak için kullanılır. Örneğin, bir kullanıcının adını veya bir ürünün fiyatını saklamak için değişkenler kullanılabilir. Bu şekilde, programın farklı noktalarında aynı veriye erişebilirsiniz.

- Verilerin işlenmesi: Değişkenler, programın çalışma sırasında verileri işlemek için kullanılır. Matematiksel hesaplamalar, mantıksal kararlar ve döngüler gibi işlemler, değişkenler üzerinde gerçekleştirilir. Örneğin, iki sayının toplamını bulmak için değişkenler kullanabilirsiniz.

- Esneklik: Değişkenler, programların esnek olmasını sağlar. Bir değişkenin değeri programın çalışması sırasında değiştirilebilir. Bu, kullanıcıdan alınan girişlere, hesaplamaların sonuçlarına veya başka veri kaynaklarına bağlı olarak değişkenlerin değerlerini güncellemenizi sağlar.

- Bellek yönetimi: Değişkenler, bilgisayar belleğinde yer ayırmak için kullanılır. Programlar çalışırken, verileri saklamak için bellekte yer ayırılması gerekir. Değişkenler bu bellek ayırma işlemini yönetir ve programın bellek kullanımını optimize etmeye yardımcı olur.

- Verilerin taşınması: Değişkenler, verileri farklı parçalar arasında taşımak için kullanılabilir. Örneğin, bir fonksiyondan diğerine veri aktarırken değişkenler kullanılır. Bu, verilerin farklı program bileşenleri arasında etkileşimde bulunmasını sağlar.

## Değişkenler İçin Type Safety - Non Type Safety Kavramları

Type safety (tip güvenliği) ve non-type safety (tip güvensizliği), programlama dilleri veya ortamlarında kullanılan iki farklı yaklaşımı ifade eder. 

Type safety, bir programlama dilinin veya ortamının, tip uyumsuzluklarından kaynaklanan hataları en aza indirmek veya tamamen ortadan kaldırmak için tasarlandığı bir özelliktir. Bu yaklaşım, tip uyumunun sıkı bir şekilde kontrol edildiği ve hatalı tiplerin kullanımının önlenmeye çalışıldığı bir sistem sağlar.

Örneğin, C#, Java ve TypeScript gibi diller, tip güvenliği konusunda sıkı denetimler yaparlar. Bu dillerde, bir değişkenin tipi tanımlandıktan sonra değiştirilemez ve tür uyumlu olmayan bir işlem yapmaya çalışmak hata oluşturur.

Non-type safety, bir programlama dilinin veya ortamının, tip uyumsuzluklarını veya hatalarını daha az denetleyen veya hiç denetlemeyen bir yaklaşımı ifade eder. Bu yaklaşım, programcıya daha fazla esneklik sağlar, ancak aynı zamanda tür uyumsuzluğundan kaynaklanabilecek hatalara da açık hale gelir.

Örneğin, JavaScript ve PHP gibi diller, tip güvenliği konusunda daha az denetim yapar ve tür uyumsuzluğuna daha fazla izin verir. Bu dillerde, bir değişkenin tipi dinamik olarak değiştirilebilir ve farklı türler arasında otomatik dönüşümler gerçekleşebilir.

Tip güvenliği ve tip güvensizliği arasındaki tercih, bir programlama dilinin veya ortamının tasarım felsefesine ve kullanım senaryolarına bağlıdır. Tip güvenliği, daha güvenli ve hata düşük bir kod yazma deneyimi sağlarken, tip güvensizliği daha esneklik ve hızlı prototipleme imkanı sunabilir. Programcıların ihtiyaçlarına ve tercihlerine bağlı olarak, her bir yaklaşımın avantajları ve dezavantajları bulunmaktadır.



## JavaScript'te Değişken Tanımladığımızda Bellekte Neler Oluyor?

Bir değişken tanımladığımızda bellek açısından sırasıyla:

- Bellek Ayırma: Değişkenin tutacağı veri için bellekte uygun miktarda yer ayrılır. Bu aşamada, değişkenin türüne bağlı olarak uygun bellek boyutu tahsis edilir. Örneğin, bir sayıyı tutmak için daha az bellek kullanılırken, bir dizi veya nesneyi tutmak için daha fazla bellek kullanılabilir.

- Değer Atama: Değişkene bir değer atandığında, bellekteki ayrılan alana bu değer yazılır. Değer, değişkenin türüne bağlı olarak uygun formatta depolanır. Örneğin, bir sayı değişkeni için, sayı değeri doğrudan bellekte depolanırken, bir dizi veya nesne değişkeni için referans değeri depolanır ve ilgili veri yapısının bellekteki konumunu gösterir.

- Değişkenin İsmi ve Referansı: Değişkenin tanımlandığı anda bir isim atanır. Bu isim, bellekteki değişkenin konumunu temsil eder ve değişkene erişmek için kullanılır. Ayrıca, değişkenin bellekteki konumunu işaret eden bir referans oluşturulur. Bu referans, değişkenin bellekteki adresini içerir ve programın değişkenle etkileşimde bulunmasını sağlar.

- Erişilebilirlik: Değişken, tanımlandığı kapsam içerisinde erişilebilir hale gelir. Tanımlandığı blok, fonksiyon, sınıf veya programın genel kapsamı gibi belirli bir etki alanına sahip olabilir. Değişkenin bu kapsam içinde erişilebilir olması, programın farklı noktalarında değişkene erişebilmenizi sağlar.

- Ömür ve Bellek Yönetimi: Değişkenin ömrü, tanımlandığı kapsamın ömrüyle ilişkilidir. Değişkenin kapsamı sona erdiğinde, bellekte ayrılan alan serbest bırakılır ve bu alan yeniden kullanılabilir hale gelir. Bu, bellek yönetiminin bir parçasıdır ve gereksiz bellek tüketimini önlemeye yardımcı olur.