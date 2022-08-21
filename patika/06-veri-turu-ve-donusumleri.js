// veri türünü ogrenmek--> typeof()
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log("price: ",typeof(price))
console.log("stringPrice: ", typeof(stringPrice))
console.log("hasPassword: ", typeof(hasPassword))

//string(metinsel) bilgileri int ve float'a donusturmek --> parseInt(), parseFloat(), Number()
let number1 = "11"
number1=parseInt(number1)
console.log("number1: ", number1, typeof(number1) )

let number2="11px"
number2=parseInt(number2)
console.log("number2: ", number2, typeof(number2))

let number3="px11px"
number3=parseInt(number3)
console.log("number3: ", number3, typeof(number3))

let number4="11.1" //"11.1px" olsaydı NaN diyordu.Icınde sadece sayı olması gerekiyor.
number4=Number(number4)
console.log("number4: ", number4, typeof(number4))

let number5="11.4px"
number5=parseFloat(number5)
console.log("number5: ", number5, typeof(number5))

//number veri tipinden string'e donusturmek--> toString()
let number6= 55
number6=number6.toString()
console.log(number6, typeof(number6))

//her primitive deger stringe donusturulebilir.Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.
String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”
String(Symbol('my symbol')) // 'Symbol(my symbol)'

//Kontrol Etme
//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.
Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true