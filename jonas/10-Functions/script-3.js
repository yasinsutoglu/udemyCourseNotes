'use strict'

// THE CALL and APPLY METHODS & BIND METHOD

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function(){} yerine asagidaki gibi yazabiliyorduk.
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        
        this.bookings.push( {flight: `${this.iataCode}${flightNum}` , name} )
    },
}

//yukaridaki obje'nin methodunu kullanalim
lufthansa.book(239 , 'yasin sutoglu') //"yasin sutoglu booked a seat on Lufthansa flight LH239" doner
lufthansa.book(635 , 'jonas schmedtmann')

const myBook = lufthansa.book; //baska objelerde de kullanabilmek icin lufthansa methodunu bir genel fonksiyon haline getirdik.

//yeni bir obje tanımlayalım
const eurowings = {
    airline : 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

//alttaki kodu herhangi bir obje icin kullanmak istersek calismaz.Cunku ana/ilk obje icinde this keywordu gecmektedir. this keywordunun baska bir objede gecerli olması icin ihtiyacımız olan sey CALL METHODU.
//myBook.apply(23, 'sarah williams')

//CALL Method -->Parantez icine ilk verilen parametre kullanılmak istenen obje ismidir. Geri kalan parametreler ana obje ile aynı sıralıdır.
myBook.call(eurowings, 23 ,'sarah williams') //"sarah williams booked a seat on Eurowings flight EW23" cıktısı verdi.
console.log(eurowings)

myBook.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

//Yeni bir obje daha tanımlayalım; dikkat edersek objelerin tüm property isimleri aynıdır. Farklılık olsa call isimize yaramaz.
const swiss = {
    airline : 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

myBook.call(swiss, 583, 'George Cooper') //"George Cooper booked a seat on Swiss Air Lines flight LX583" cıktısı verdi

//APPLY METHOD --> call methodun aynısı fakat parametre olarak objeden sonra array kabul ediyor olmasıdır. Pek kullanılmaz.Cunku call ile de yazılabilir. Alltaki ornege bak!
const flightData = [583 , 'Mark Cooper']
myBook.apply(swiss , flightData)
console.log(swiss)

//apply yerine call ile yazım
myBook.call(swiss, ...flightData)

//---------------------------------------------------------------------------------

//BIND METHOD
//Call method'dan farklı olarak fonksiyon döndürür. Donen bu fonksiyonla yeni fonksiyon olustururuz. Bu yeni fonksiyon bind() icerisine parametre olarak gecilen object'in default yazılmıs fonksyionu(methodu) gibi olur.Alttaki kodları inceleyelim

const bookEW = myBook.bind(eurowings)
bookEW(46, 'Steven Williams') // "Steven Williams booked a seat on Eurowings flight EW46" cıktısı verdi.

//diger objeler icin de ayrı fonksiyon/method olusturalim
const bookLH = myBook.bind(lufthansa)
const bookLX = myBook.bind(swiss)

//yukarıdaki bind durumunu biraz daha gelistirip "partial application" ile kullanabiliriz.
//Partial Application means that a part of the arguments of the original function are already applied(already set)

const bookEW23 = myBook.bind(eurowings , 23) //burada iki parametreden ilkini(23) onceden set etmis olduk.Artık fonksiyonu cagırırken tek parametre gecmek yeterli olacak.
bookEW23('yasin mahmutoglu') // "yasin mahmutoglu booked a seat on Eurowings flight EW23" cıktısı verdi.

//BIND() with EVENTLISTENER
//Bind methodunun diger güzel bir kullanımı EventListener ile'dir.
lufthansa.planes = 300; //lufthansa'ya property atadık.

//lufthansa objesine yeni method tanımlayalım
lufthansa.buyPlane = function(){
    console.log(this) //bind kullanmadıgımızda button'u isaret eder.Cunku eventlistener'da this ilgili elementi isaret eder. Bind kullanınca ilgili objeyi isaret eder artık.
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))//burada bind kullanarak lufthansa objesini yine obje icin tanımlanan methoda/fonksyiona bagladık. Dolayısıyla obje scopu'nda gecen this keywordu artık o objeyi isaret eder.

//PARTIAL APPLICATION'da -Bind- kullanımı
const addTax = (rate, value) => value + value * rate ;
console.log(addTax(0.1 , 200))

//partial application uygulamak icin bind kullanarak yeni fonksiyon olusturabiliriz.
const addVAT = addTax.bind(null,0.23) // burada null: this beklenmesinden oturu yerine yazılmıstır. Cunku bind bizden this keywordunu karsılayacak parametre bekler. Burada "rate=0.23" default verilmis oldu. 
//bu yeni tanımlanan fonksiyon aslında sudur;
//addVAT = value => value + value * 0.23;

console.log(addVAT(100))

//Üstteki islevi; function return function ile soyle yaparız.
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

console.log(addTaxRate(0.23)(200))

//yada
const addVAT2 = addTaxRate(0.23) //'rate' parametre verilerek yeni fonksiyon tanımlandı
console.log(addVAT2(200)) // yeni fonksiyona 'value' parametre olarak verildi