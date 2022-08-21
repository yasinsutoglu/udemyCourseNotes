//Object icine metot ekleme

let user1 = {
    firstName: "Bilgin",
    lastName : "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    //shortName, fonksiyon olarak yazılınca artık bu object'in bir metotu haline gelmistir.
    shortName: function(){
        return `${this.firstName[0].toUpperCase()}.${this.lastName} `
    }//burada this, user1'i tanımlamaktadir.
}

//ARROW FUNCTION ile gosterim
// arrow functionlar this erişimine sahip olmadıgından asagida "person" object name'i kullandik.
var person = {
    name: "Rumeysa",
    surname: "Turgut",
    age:23,
    city: "istanbul",
    introduce: () => {
        return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`
    }
}

//Onceden olusturulmus object'e metot ekleme
//burada metodun sahip olabileceği yapı değişmiyor yani function() anahtar kelimesi veya arrow function söz dizimi kullanılarak oluşturulabilir. Yukardaki örnek üzerinden devam edecek olursak person nesnemize myCity adında yeni bir metot ekleyelim ve bize kişinin yaşadığı şehri göstersin.
person.myCity = function(){
    return `I live in ${this.city}`
}

console.log(person.myCity())

//ornek
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
}

birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));

/*
Fonksiyonlar JavaScript dilinde, Function sınıfının birer objeleridir. Nasıl yani? Evet fonksiyon diye diye bağrımıza bastığımız yapılar da aslında bir sınıfın objeleridir. Hatta bu sınıfın detaylarına ve özelliklerine buradan ulaşabilirsiniz. Ama durun daha bitmedi. Üstelik bu sınıfın bir kurucusu(constructor) ve diğer bütün objeler gibi inherit ettiği bir prototype bile var. Hatta bu prototype yardımıyla fonksiyonun adına bile ulaşabiliriz. Örnek :

const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"
Yukarıdaki örnekte basit bir fonksiyon tanımladık ve bu fonksiyonun adını "." operatörüyle eriştik. console.log(fonksiyonAdi.name) kodunu çalıştırdıktan sonra "Merhaba Kodluyoruz" çıktısının gelmediğine dikkat edin. Burada fonksiyonu execute etmedik. Yalnızca bu objenin bir özelliğine eriştik.

Öyleyse JavaScript'te fonksiyonların da birer obje olduğunu öğrendik.

---------------------

function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}
Yukarıda gördüğünüz yapının adı "JavaScript Object Constructor". Daha önce bir değişken yardımıyla obje tanımlamıştık. Class keyword'ünü kullanarak da bir sınıf tanımlayabiliyorduk. Yukarıdaki yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır. Bu şekilde bir obje mutable(mutasyona uğrayabilir yani özellikleri değiştirilebilir) bir Sınıf tanımlamış oluyoruz. Sınıf ile obje arasındaki farkı nesneye yönelik programlama konusunda daha detaylı öğrenebilirsiniz ancak burada bir obje şablonu oluşturduğumuzu söyleyebiliriz. Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz.

const ali = new Insan("ali",21);
console.log(ali.yas);
// 21

Böylece artık "ali" isminde bir objemiz hazırlanmış oldu. Peki bu fonksiyon yöntemini kullanarak bir obje hazırladığımızı düşünelim. Bu objeye sonradan ekstra bir fonksiyon eklemek istersek? Kafanız karışmasın fonksiyon kurucu yardımıyla hazırladığımız bir sınıf var ve bu Sınıfı kullanarak "new" anahtar kelimesiyle bir obje oluşturduk. Ancak zaman değişti ve artık bu sınıfta kullanmak üzere fazladan bir fonksiyon tanımlamak istiyoruz. Bu fonksiyonu/özelliği öyle bir şekilde eklemeliyiz ki olmayan bir fonksiyon/özellik eklemek istiyoruz. Objelere özellik eklemek konusunda bir problemimiz yok çünkü bunun mutable olduğunu biliyoruz .

ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik);
// "Sonradan eklenmiş bir özellik"
---------------------------
Prototype, sınıflara JavaScript tarafından otomatik olarak eklenen bir objedir. Eklenmek burada çok doğru bir tabir değil. Aslında bütün objeler tarafından miras alınan bir özelliktir. Bu özelliği de "proto" key'i ile ekler. Bu prototype alanı içinde hem o objeyi kurduğumuz Sınıfın kurucu fonksiyonuna hem de proto objesine erişebiliriz. Bu prototype özelliğini kullanarak hem sınıfa hem objeye ihtiyacımız olan fonksiyonu ekleyebiliriz. Bu kısımların detayları JavaScript'te nesneye yönelik programlama konusuna ait olduğu için kapsamı genişletmeden birkaç örnek vererek konuyu tamamlayalım :

***Sınıfa Prototype yardımıyla fonksiyon eklemek :

Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"

***Objeye prototype yardımıyla fonksiyon eklemek :

ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"

Bu tarz bir kullanıma özellikle büyük projelerde ihtiyacımız olabilir. Prototype özelliğini kullanarak da objelere ve sınıflara sonradan fonksiyonlar hatta farklı özellikler ekleyebiliriz.
*/

