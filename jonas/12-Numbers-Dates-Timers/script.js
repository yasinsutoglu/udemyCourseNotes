'use strict';

/////////////////////////////////////////////////
// LECTURES

/*
//NUMBERS
console.log(23 === 23.0) // true doner

//JS, 10'luk sistemden binary'ye donup isleme yaparken sıkıntı cekmezken ondalıklı sayılarda(floating numbers) sorun yasamaktadır.
console.log(0.1 + 0.2) // 0.30000000000000004 gibi garip bir sayı donmektedir
console.log( 0.1 + 0.2 === 0.3) //false doner

//Conversion
console.log(Number('23')) //23 doner
console.log(+'23') // 23 doner cunku type coercion var

//Parsing
console.log(Number.parseInt('30px' , 10)) // 30 doner. Burada 10 ile belirtilen decimal sayı sistemidir,  binary icin 2 yazardık.
console.log(Number.parseInt('e23', 10)) //NaN doner. Cunku parseInt() tespit edebilmesi icin stringimiz sayı ile baslamalıdır.
console.log(Number.parseInt(' 2.5rem ')) // 2 doner bize. Ondalık kısmı da almak icin parseFloat kullanılır.
console.log(Number.parseFloat(' 2.5rem ')) // 2.5 doner bize. String ifade de on ve arkadaki bosluklar dıkkate alınmaz parsing yaparken.


//Checking if value is a NaN
console.log(Number.isNaN(20)) //false doner. Cunku number'dır.
console.log(Number.isNaN('20')) //false doner
console.log(Number.isNaN(+'20X')) //true doner. cunku NaN'dır.
console.log(Number.isNaN(20 / 0)) //false doner. cunku infinity NaN degildir.

//Best way of checking if value is number
console.log(Number.isFinite(20)) // true doner. Cunku number.
console.log(Number.isFinite('20')) // fasle doner. Cunku string.
console.log(Number.isFinite(+'20X')) // fasle doner. Cunku string.
console.log(Number.isFinite(20 / 0)) // fasle doner. Cunku infinity.

//Integer olup olmadıgına bakma
console.log(Number.isInteger(23)) // true
console.log(Number.isInteger(23.0)) //true
console.log(Number.isInteger(23 / 0)) //false
*/

///////////////////////////////////////////////

//MATHEMATICAL OPS and ROUNDING

/*
//Remainder Operator
console.log(5 % 2) // kalan: 1 doner
console.log(5 / 2) //5 = 2 * 2 + 1

console.log(8 % 3)// kalan: 2 doner
console.log(8 / 3) // 8 = 2 * 3 + 2

console.log(6 % 2) // 0 doner cunku cift
console.log(7 % 2) // 1 doner cunku tek

const isEven = n => n % 2 === 0 ;
console.log(isEven(8)) //true
console.log(isEven(23)) //false
console.log(isEven(57)) //false


// //BANKIST uygulamasına gore label'a tıklayınca cift satırları sarıya boyama, 3 satırda bir mavi boyama
// labelBalance.addEventListener('click' , function(){
//   [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
//       if(i % 2 === 0) row.style.backgroundColor = 'yellow';

//       if(i % 3 === 0) row.style.backgroundColor = 'blue';
//   })
// })


//Üs alma
console.log(Math.sqrt(25))
console.log(25 ** (1/2))
console.log(8 ** (1/3))

//max/min value bulma
console.log(Math.max(5, 18, 23 , 11, 2)) // 23 doner
console.log(Math.max(5, 18, '23' , 11, 2)) // 23 doner. max coercion uyguluyor.
console.log(Math.max(5, 18, '23px' , 11, 2)) // 23 donmez. max parsing uygulamıyor.
console.log(Math.min(5, 18, 23 , 11, 2)) // 2 doner

//Math.PI
console.log(Math.PI * Number.parseFloat('10px') ** 2) // 10px yarıcaplı daire alanı

//Random Number --> Math.random() : 0 ve 1 arası sayı olusturur
console.log(Math.trunc(Math.random() * 6 + 1)) // 1-6 arası random sayı olusturma

//Belirlenen min ve max arası random deger olusturma
const randomInt = (min , max ) => Math.floor(Math.random() * (max - min) + 1) + min ; 
//console.log(randomInt(5, 20))

//Rounding Integers
console.log(Math.round(23.3)) //23.  round()--> normal yuvarlama
console.log(Math.round(23.9)) //24

console.log(Math.ceil(23.3)) //24.  ceil()--> yukarı yuvarlama
console.log(Math.ceil(23.9)) //24

console.log(Math.floor(23.3)) //23. floor()--> asagı yuvarlama
console.log(Math.floor(23.9)) //23

console.log(Math.trunc(23.3)) //23. trunc()--> sayının tam kısmını alma

console.log(Math.trunc(-23.3)) // -23
console.log(Math.floor(-23.3)) //-24

//Rounding Decimals
console.log((2.7).toFixed(0))// string olarak 3 doner. Burada (2.7) seklinde yaptık cunku primitive'i boxing ile objeye cevirdik.Dolayısıyla method kullanabildik. 
console.log((2.7).toFixed(3)) // '2.700' doner.
console.log((2.345).toFixed(2)) // '2.35' doner
console.log(+(2.345).toFixed(2)) // 2.35 doner. Number'a cevirsin diye basına + koyduk.

//Numeric Seperators --> kod yazarken kendimize kolaylık olsun diye yazabiliyoruz ama JS engine nasıl algılıyor dikkat etmek lazım.
const diameter = 287_460_000_000
console.log(diameter) // 287460000000 doner

const price = 345_99;
console.log(price)  //34599 doner

const transferFee1 = 15_00
const transferFee2 = 1_500
console.log(transferFee1)//1500
console.log(transferFee2)//1500

const PI = 3.145 // _ , '.'nın onune arkasına konulmaz

console.log(Number('230_000')); //NaN doner
console.log(parseInt('230_000'))// 230 doner cunku _ sonrasını string gibi algıladı.

//WORKING WITH BigInt
console.log(2 ** 53 - 1) //9007199254740991
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991--> bu sayı JS'teki en son guvenilir sayı. Bu sayı üzerindeki sayılar dogru gostermez bu da hatalara neden olur. Ozellikle API ve databaseden gelen sayılarda sıkıntı yasanmaktaydı.Bu sorun BigInt ile cozüme kavustu. İstedigimiz kadar buyuk sayıları tutabiliyoruz artık. Regular Number BigInt'e dondurmek ıcın sonuna 'n' harfi eklenir, Yada BigInt() icine yazılır.

console.log(5686531231423534645647567433423363454234n) //console'da renk olarak farklı goruntusu vardır.
console.log(BigInt(1242353474452346346433))

//Operations
//console.log(10000n + 1000) //hata verir
console.log(10000n + BigInt(1000)) // islem icin her sayı BigInt cinsinden olmalıdır.
console.log(1000000000000000000n * 3464567457456345352n)

//Math() operations bigInt icin gecerli degildir.
//console.log(Math.sqrt(16n)); --> calısmaz

//exceptions
console.log(20n > 15) //true doner
console.log(20n === 20) // false doner. Cunku tipleri farklı
console.log(typeof 20n) //bigint
console.log(20n == '20') // true doner. Cunku coercion vardı.

const huge = 1523523534646346345234n
console.log(huge + 'is Really BIG!!') // "1523523534646346345234is Really BIG!!"

//Division
console.log(11n / 3n) //3n doner
console.log(10 / 3) //3.3333333333333335 doner
*/

////////////////////////////////////////////////////////

//DATES 
/*
//Create a date
const now = new Date() // su anki zamanı olusturur
console.log(now)

//Date'e parametreyi belli formatta vererek olusturma!
console.log(new Date('Aug 02 2020 18:05:41')) //Sun Aug 02 2020 18:05:41 GMT+0300 (GMT+03:00)
console.log(new Date('December 24, 2015')) //Thu Dec 24 2015 00:00:00 GMT+0200 (GMT+03:00) --> bu Date()'e girilen verilerin parse edilebildigini gosterir.

//console.log(new Date(account1.movementsDates[0]))

console.log(new Date(2037 , 10 , 19 ,15 , 23 ,5)) //Thu Nov 19 2037 15:23:05 GMT+0300 (GMT+03:00)
console.log(new Date(2037 , 10 , 31)) //Tue Dec 01 2037 00:00:00 GMT+0300 (GMT+03:00) --> burada 10 ile 11. ayı kastetdik ve de 31 ile 30'dan gün asımı oldugu icin 12. aya kendi düzeltti.

console.log(new Date(0)) //Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00) --> ilk tarihi atıyor
console.log(new Date(3 * 24 * 60 * 60 * 1000)) // Sun Jan 04 1970 02:00:00 GMT+0200 --> milisec cinsinden 3 gün sonrası icin tarihi atıyor
*/

/*
//Working with Dates
const future = new Date(2037 , 10 , 19 ,15 , 23 );

console.log(future) //Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)
console.log(future.getFullYear()) //2037
console.log(future.getMonth()) //10
console.log(future.getDate()) //19 --> ayın gününü bize doner
console.log(future.getDay()) //4 --> haftanın gününü bize doner
console.log(future.getHours()) // 15
console.log(future.getMinutes()) // 23
console.log(future.getSeconds()) // 0

console.log(future.toISOString()) // 2037-11-19T12:23:00.000Z

console.log(future.getTime()) //2142246180000 ->>1970'den beri gecen zamandır. timestamp diye adlandırılır
console.log(new Date(2142246180000)) //Thu Nov 19 2037 15:23:00 GMT+0300 (GMT+03:00)

console.log(Date.now()) // simdinin timestamp'i

future.setFullYear(2040) //Yılı set ettik. yukarıdaki get'lerin set versiyonları mevcuttur.
console.log(future)

*/

/*
//Operations With Dates
//Genellikle yukarıda kullandıgımız timestamps hesaplamalarda cok isimize yarar.

const future = new Date(2037 , 10 , 19 ,15 , 23 );
console.log(Number(future)) // '+future' --> desek de number'a ceviriyor coercion ile.

const calcDaysPassed = (date1 ,date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)) 
// 1000-->ms, 60 -->secs, 60-->mins, 24-->hours

const days1 = calcDaysPassed(new Date(2037, 3 , 4) , new Date(2037, 3, 14))
console.log(days1)
*/

///////////////////////////////////////////////

//INTERNATIONALIZING 

//INTL DATES

/*
const now = new Date();

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric', // long ve 2-digit'de baska bir secenek
  year: 'numeric', //2-digit'de baska bir secenek
  //weekday: 'long'
}

//labelDate.textContent = new Intl.DateTimeFormat('tr-TR', options).format(now)

// const locale = navigator.language;      
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)

// labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
*/

/*
//INTL NUMBERS
const num = 3884764.23;

const options = {
  style : 'currency',
  currency: 'EUR',
  //style: 'unit', // 'percent' kullanilabilir
  //unit: 'mile-per-hour'
  //unit : 'celsius', 
  //useGrouping: false, // sayi gruplamasıyla ilgili
}

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num))
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num))
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num))
console.log('Browser: ', navigator.language , new Intl.NumberFormat(navigator.language , options).format(num))
*/

//////////////////////////////////////////////////////
/*
//SETTIMEOUT

//setTimeout(callback func. , setTime) seklinde yazılarak kullanılır. set edilen süre(miliseconds) sonra callback function bir kerelik isletilir.Burada, setTimeout kodu calısmaya baslayınca execution context durmaz hemen devam eder. Arka planda zaman saymaya baslamıstır ve süre bitince callback func. calıstırılır. Gecen süre zarfında setTimeout sonrası yazılan kodlar calısmaya devam eder. Bu tarz isleyen mekanizmaya "Asynchronous Javascript" denir.

//Burada callback func.'a parametre gecmek istersek bunu time'ı belirttikten sonra sırası ile yapıyoruz.
//setTimeout((ing1 , ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!!`) , 3000 , 'olives' , 'spinach');
const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout((ing1 , ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!!`) , 3000 , ...ingredients);

console.log('Waiting...')

if(ingredients.includes('carrot')){ // buradaki sart saglanırsa timer temizlenir ve setTimeout isletilmez.
   clearTimeout(pizzaTimer)
}


//SETINTERVAL

//setTimeout'daki gibi callback function isletilir ama burada bir kerelik degil belirtilen sürede(milisec) bir bu function isletilir.

setInterval(function(){
  const now = new Date();
  const locale = navigator.language;
  const options = {
    second: '2-digit',
    minute: '2-digit',
    hour : '2-digit',
    day: 'numeric',
    month : 'numeric',
    year: 'numeric',
  }
  console.log(new Intl.DateTimeFormat(locale, options).format(now))
},1000 )

*/