//0 ve 1'i anlamak
let isActive = false // 0
isActive = true // 1 
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

//Boolean() --> boolean fonksiyonu bize sadece iki farklı deger donebilir: true/false
// İcinde deger barındıran tum ifadeler true doner.
// Boolean(11) //true doner
// Boolean("Hello") // true
// Boolean('false') //true
// Boolean("0") //true doner
// Boolean("") //false doner
// Boolean({}) // true
// Boolean([]) // true
// Boolean(Symbol()) // true
// !!Symbol() // true
// Boolean(function() {}) // true

userName = "user"
console.log("User Name:" , Boolean(userName)) //true doner

// 0, -0, null, false , NaN, undefined, ("") --> false doner
const c1=Boolean(0) //false
const c2=Boolean(-0) //false
const c3=Boolean(null) //false
const c4=Boolean(NaN) //false; NaN--> Ex: (10/"Hello")
const c5=Boolean(undefined) //false
const c6=Boolean(-0.1)//true
const c7=Boolean(0===0) //true
const c8=Boolean(userName.length>0) //true


let x=false
console.log(Boolean(x)) //false doner

//mantıksal operatorlerde true/false durumu:
// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || "" || false || -0 || 0 // 0
var c= 0 ||  ""  ||  "123" || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7