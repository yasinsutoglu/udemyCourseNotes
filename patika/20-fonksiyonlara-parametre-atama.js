/*Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak*/

//Fonksiyonlar, parametreli veya parametresiz fonksiyonlar, değer döndüren veya değer döndürmeyen fonksiyonlar olarak farklı şekillerde oluşturulabilir. Hangi fonksiyon tipini kullanacağımız, yazmak istediğimiz algoritmanın ihtiyacına göre değişmektedir.



//Temel kurallar:
//1. Bir fonksiyon bir veya birden fazla parametre alabilir veya hic almayabilir
//2. Bir fonksiyon dısari bilgi gonderebilir(return ile) veya gondermeyebilir
//3.Mumkunse fonksiyonun bagımlılıklarını azaltmak gerekir

/*Fonksiyonlarda return komutunun 2 önemli işlevi vardır.
1.Fonksiyonun geri dönüş değerini oluşturur.
2.Fonksiyonu sonlandırır.
Return komutundan sonra işlem, değişken veya sabit yazılabilir.*/

let firstName="Lorem"

function greetings(firstName="", lastName=""){ //default parametre alıyor
    //console.log(`Merhaba ${firstName ? firstName : ""}`)
    //console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName) //degiskeni yazdırabildik. Global degisken Fonksiyon içindeki islemlerde kullanılır biter ama tekrar global alana yansıtılmaz. Code block'lar arası konusudur. 
greetings() //fonksiyona parametre gondermeden cagırdık
greetings("parametre1", "parametre2") //parametre degerlerini vererek fonksiyonu cagırdık

//DISARI BILGI DONMEK
function greetings2(firstName,lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingInfo = greetings2("ad", "soyad") // fonksiyon return ile deger donduruyorsa onu yakalayıp atama yapmalıyız
console.log(greetingInfo)


//FONKSIYON KULLANARAK DOM'a YAZI YAZDIRMA
function domIdWriteInfo(id , info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('greeting', greetings2("yaso","sut") ) //fonksiyonu parametre vererek cagırdık

let htmlInfo= `<span style="color:red"> Yeni Yazi</span>`//fonksiyona parametre olarak gecmek icin degisken tanımladık
domIdWriteInfo('greeting',htmlInfo)


//DEGİSİK ORNEKLER
const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama (r) // Fonksiyonumuz, r parametresini alıyor.
{
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.


//KISA YONTEM
// function daireAlaniHesaplama (r, PI = 3.14) 
// { 
//     return PI*r*r;		
// }
// var donenSonuc = daireAlaniHesaplama(3); 
// console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.
