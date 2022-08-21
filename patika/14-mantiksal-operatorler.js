/*Karsilastirma ve Mantiksal Operatorler*/
/*
Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitlik ve farkı bulmak için kullanılır. Bu iki değerin karşılaştırmasını yaparak true (doğru) veya false (yanlış) sonucu verir.
*/

let price="100"
let user= "hakan"

//== Esitse 

console.log(price == 1) //false doner
console.log("price == 100", price == 100) // true doner, burada veri tipine bakmıyor direkt degere bakıyor

//=== Hem degeri hem turu esitse

console.log( price === 1 ) //false doner
console.log("===", price === 100) //false doner cunkü veri tipleri farklı

//!= Esit Degilse

console.log(price != 1) //true doner
console.log("price!==100",price!==100) //True doner; burada hem veri tipi hem icerik esit degilse olması true
console.log(user!="guest") //true doner

// < Kucukse ; <= kucuk esitse
console.log("price<100",price<100) //false doner
console.log("price<=100",price<=100) //true doner

// > Buyukse; >= Buyuk Esitse
console.log("price>200",price>200) //false doner
console.log("price>=100",price>=100) //true doner

/*
JavaScript mantıksal operatörleri kullanarak karşılaştırma işlemini birden fazla koşula göre yapabiliriz. Birden fazla koşulu karşılaştırıp operatörün işlevine göre true (doğru) veya false (yanlış) sonucunu verir.
*/

// && - logic and
price=0
console.log(price>0 && user!="guest") //false doner; cunku ikisinden biri false
console.log(price==0 && user!="guest") //true doner; cunku ikisi de true

// || - logic OR
console.log(price>0 || user!="guest") //true doner; cunku ikisinden biri true

// ! - degil (tersi);  yani true ise false, false ise true yapar.
user= "guest"
price=1
console.log(!user=="guest") //false doner;  true'yu false cevirdi
console.log(!(price>0 && user == "guest")) // false doner; (price>0 && user == "guest")-->true idi

console.log(!!2)//true doner