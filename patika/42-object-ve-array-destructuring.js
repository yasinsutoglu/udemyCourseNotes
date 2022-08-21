//Object Destructuring ve Array Destructuring Nasil Kullanilir??
//Destructuring: bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.


let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

//Object Destructuring

//***Obje icindeki bilgilerin tek seferde cikarilmasi***

//let userName = settings.userName  //Yöntemlerden Biri ama Uzun yol; tek tek ugrasmak gerekir
//console.log(userName)

//Rename && Destructuring
let {userName: user, password, isActive, ip:serverIP, serverName} = settings //tek seferde tüm degiskenlere ulastık, atadık. Bu arada, "userName: user" diyerek "userName" bilgisini artık "user" olarak kullan demek istedik.
console.log(user, password, isActive, serverIP, serverName)
console.log(user) //artik tek basina kullanabiliyoruz

//***Obje icindeki bazi bilgilerin cikarilmasi***

let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings //ilk ücünü degiskenlere aldık, kalanini newSettings adlı yeni object icine attik
console.log(userName2, password2, isActive2, newSettings)

//eger yukarıda rename yapmasaydık alttaki gibi yazmaliydik;
//let {userName, password, isActive, ...newSettings} = settings 

//***Objenin Destructuring ile Kopyalanmasi***

//HATALI KULLANIM
// let settings2 = settings

// settings2.userName = "degisen bilgi" //burada settings'deki userName'i de degistirir
// console.log("settings:" , settings)
// console.log("settings2:" , settings2)

//DOGRU KULLANIM
let settings2 = {...settings}

settings2.userName = "degisen bilgi"
console.log("settings:" , settings)
console.log("settings2:" , settings2)

//***Array'lerin Destructuring ile Kopyalanmasi***

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore]  = score
console.log(score1,score2,otherScore)

//object kopyalama ile aynı; ORN: let settings2 = {...settings}
let copyOfScore = [...score] //score arrayinin tamamını kopyaladık
console.log(copyOfScore)

//Destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. Yani fonksiyona parametre girerken de destructuring yapabiliriz;

const cikarma = ( {sayi1, sayi2} ) => { 
    return sayi1 - sayi2;
} //Cıkarma fonksiyonunun parametresine dikkat edin. orada süslü parantezler {} bir objeyi temsil etmez, destructuring işlemini temsil eder. Yani çıkarma fonksiyonuna gelen sayılar objesinin içinde sayi1 ve sayi2 property'leri bulunup parçalanıp fonksiyon içinde kullanılabilir hale gelecektir. Destructuring işlemi sırasında sıralama önemsizdir

const sayilar = {
    sayi1: 5,
    sayi2: 3
}

console.log("cikarma sonucu: ", cikarma(sayilar))

//REST OPERATORU KULLANIMI, Orn: (...args)

//YANLIS KULLANIM
//Örneğin fonksiyonumuz ikiden fazla değer alması gerekiyor ise ne olacak? Örneğin bir toplama fonksiyonumuz var bu fonksiyon 5 sayıyı toplayacak.

const toplama = ({ sayi1, sayi2 }) => { 
    // dikkat sadece 2 sayi
    return sayi1 + sayi2 + sayi3 + sayi4 + sayi5;
    }
    const sayilarim = {
     sayi1: 8,
     sayi2: 4,
     sayi3: 7,
     sayi4: 9,
     sayi5: 11
    }
    toplama(sayilarim); //ReferenceError: sayi3 is not defined

//Ama Rest Operator ile diyebiliriz ki sayi1 ve sayi2'yi destructure yap. Bu sefer de diğer sayıları kaybederiz. Bu durumda spreading operator ile diyebiliriz ki tamam destructuring yap ama geri kalan diğer sayıları da bana ver.

//DOGRU KULLANIM

const sum = ( {n1, n2, ...args} ) => {
    let sonuc = s1 + s2;
    for(let sayi in args){
        sonuc += args[sayi]
    }
    return sonuc
}

const numbers = {
    n1: 8,
    n2: 4,
    n3: 7,
    n4: 9,
    n5: 11
   }

   sum(numbers) //39 doner
