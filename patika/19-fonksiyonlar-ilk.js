/*
FONKSIYON --> Fonksiyonlar adından anlaşılacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapılardır. Koda işlevsellik katmak için bunu sık sık kullanırız.

Fonksiyonun Kullanimi;

* İlk olarak function ibaresinden sonra fonksiyon adı yazılır. Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar (Regular/Named Functions) deriz.
* Burada önemli olan kodun okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmaktır, dahası bu bir işlevi belirttiği için fonksiyon adımız bir eylem olmalıdır. Bunun için bazı ön ekler kullanabiliriz.
* Örneğin değer almak istediğimiz bir fonksiyon adında ön ek olarak get kullanabiliriz.
* Bununla birlikte şunu da unutmamalıyız istendiğinde adı olmayan anonim bir fonksiyon da kullanılabilir.
* Sonrasında parantezler içinde alacağı parametreler belirlenir. Parametre olması zorunlu olmadığı gibi fazla parametre geçmek kodun okunurluğunu bozabilir.
* Parametre alan fonksiyonları kullandığımız zaman o parametrelere kendimiz bir değer atarız. Atanan bu değere "argüman" adı verilir.
* Son olarak da süslü parantezleri açarak içine çalışmasını istediğimiz JavaScript kodunu eklenir. Bu JavaScript koduna fonksiyonun gövdesi- body denir.
--------------------
function anahtar kelimesini takiben fonksiyon ismi ve parantez içerisinde parametreler(virgülle ayrılacak şekilde) ve son olarak da süslü parantez içerisinde fonksiyonun içereceği kod(ki bu bölüme fonksiyonun gövdesi(body) denir.) sırasıyla fonksiyonu oluşturur.
*/

/*
* Yukarıda fonksiyonu adlandırmadan da kullanabileceğimizden bahsetmiştik: Anonim fonksiyonların (Anonymous Functions) bir adı yoktur ve bir değişkene atanarak yeri geldiğinde kullanılırlar.
* Değişken adı kullanılarak çağrıldıkları için birden çok anonim fonksiyonu aynı dizide kullanabilirsiniz.
* Dahası bir değişkene atandıklarından bu değişkeni başka bir fonksiyonun parametresine koyarak callback (geri arama) yapabilirsiniz.
*/

/*
Değer Döndüren Fonksiyonlar;

Bazen fonksiyonun geriye göndereceği değeri ekrana çıktı vermek yerine bir değişken ya da başka bir fonksiyonda daha sonra kullanmamız gerekebilir. Bu gibi durumlarda fonksiyon gövdesinde return ifadesini kullanırız.
*/

/*
Fonksiyon Kapsamı;

JavaScript'de fonksiyon içinde tanımlamış olduğunuz değişkene fonksiyon dışındaki herhangi bir yerden erişemezsiniz. Çünkü o değişken tanımlandığı fonksiyonun kapsamındadır. Bu sebeple değişkenimiz o fonksiyon içinde kullanılan bir lokal değişkendir. Fakat tanımlanan fonksiyon tanımlandığı kapsamdaki diğer değişkenlere erişebilir. Yani fonksiyon kendi dışında tanımlanan fakat aynı kapsamda bulunduğu global değişkenlere de erişebilir.
*/

/*
Callback Fonksiyonlar ve Asenkron Çalışma;

Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez. Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman ala veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir. JavaScript asenkron yapıdaki bir programlama dilidir.

Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır. Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur. 
*/



//ilk fonksiyonumuzu yazalim
let myName = prompt("isminizi giriniz: ")
 function helloWorld() {
     console.log("Hello World"+myName)
 }

 function merhaba(){
     console.log("Merhaba")
     helloWorld()     //fonksiyon icinde baska bir fonksiyon cagirdik
 }

 merhaba()

 //Fonksiyon İfadeleri (Function Expressions)
//JavaScript bir değişkene fonksiyon atanmasına ve daha sonra bu değişkenin fonksiyon olarak kullanılmasına izin verir. Buna fonksiyon ifadeleri denir.

/*
Arrow Functions
Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.

                    let func = (param1, param2, param3) => expression;

Yukarıdaki kod bloğu basitçe, bir param1,param2,param3 parametrelerini alan ve sağ taraftaki ifadeyi değerlendirip sonucunu döndüren bir fonksiyon oluşturur.
*/

//Ornek
//const carpim = (sayi1,sayi2) => sayi1*sayi2;
//console.log(carpim(3,5));

//Ornek
//const karesiniAl = (sayi) => sayi*sayi;

//Ornek
//const hello = () => console.log('Hello Dunya');

//Ornek
let experience = prompt("kac yillik tecrübeniz var", 2);

const developer = experience < 5 ? () => alert("az biliyorum") : () => alert("cok biliyorum")

developer()

//Bir satıra sığabilecek basitlikte olmayan fonksiyonlarımız için çok satırlı arrow function'ı şu şekilde yazabiliriz.
let toplam = (a, b) => {
    let result = a + b;
    return result;
  };

 console.log(toplam(3,7))
