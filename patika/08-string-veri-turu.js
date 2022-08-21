/* STRING VERİ TIPI  ISLEMLERI */
let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

//string karakter sayisi bulma --> length kullanimi
console.log(email.length)

//Ilk Karakteri Bulmak --> [0] : 0. index
console.log(firstName[0])
console.log(firstName.charAt(0)) //charAt()--> index numarasına gore karakter bulmaya yarar

console.log(firstName.charCodeAt(1)) //charCodeAt – Index Numarasına Göre Karakterin Unicode Değerini Bulma

//buyuk-kucuk harfe cevirmek
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String icinde istedigimiz bilgiyi aramak ve YERINI bulmak --> SEARCH kullanımı
//ndexOf ile aynı sonuçlara ulaşırız genel olarak "Regular Expressions" işlemleri için çok kullanılan bir metottur.
console.log( email.search("@") )
//console.log(email[15])
console.log(email.search("olmayanbisey")) //string icinde yoksa aradıgım -1 dondurur

//Belli bir yere arası- belli bir yere kadar- belli bir yerden sonrasını almak --> SLICE kullanımı
//Negatif parametre kullanırsak index numarası sondan başa doğru sayılarak hesaplanır.
console.log(email.slice(0,10)) // 0. ve 10.index arasını aldı. (0 dahil 10 haric)
console.log(email.slice(15))    //15. index(dahil) sonrasını aldı

let DOMAIN = email.slice(email.search("@") + 1) //email'de @'i bulduktan bir sonrasından itibaren aldı
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf('.')) // indexOf--> Metnin içinde aramak istediğimiz değerin index numarasını bize verir. Search metodunun muadilidir.
) 

//bilgiyi degistirme --> replace kullanımı
email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//Istedigim bilgi var mı? --> includes kullanimi
console.log(email.includes('asfasfa')) //false doner
console.log(email.includes('@'))  //true doner

//istedigim bilgiyle basladı, bitti mi? --> endsWith(), startsWith() kullanımı
console.log(email.endsWith('kodluyoruz.org')) //true doner
console.log(email.startsWith('@')) //false doner

//Ilk harflerini buyuk yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` 
// burada "Hakan Yalcinkaya" seklinde yazdırdık;  ilk harfleri büyüterek sonraki harfleri kuculterek yapan template literal'li kodu yazmıs olduk.
console.log(fullName)

//lastIndexOf -->indexOf ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür.
var isim = "Yasin Sutoglu"
console.log(isim.lastIndexOf('u'))

//concat kullanımı
let ad = 'Yasin'
let soyad = 'Sutoglu'
console.log(ad.concat(' ve ',soyad,'++')) 

// Split Kullanımı --> Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.
let name = 'Oguz,Kamer'
let names = name.split(',')
console.log(names)

//Ornek
let url = "www.kodluyoruz.org"
let language = "Java"

language = language.replace("Java","EcmaScript")
console.log(language)

domain = url.slice(url.indexOf('.')+1)
console.log(domain)