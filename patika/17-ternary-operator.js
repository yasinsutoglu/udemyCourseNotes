/*ternary operator ile short if kullanimi*/
//Ternary Operator 3 adet parametre alan tek JavaScript operatörüdür. If kullanarak kontrol etmek istediğimiz koşullarda ternary operator kullanarak satır sayısı olarak avantaj sağlayabiliriz.
/*
Ternary operatörünün aldığı 3 parametre şu şekildedir:

1.İlk önce bir condition belirtiriz ve sonrasında hemen bir ? koyarız
2.Sonrasında, eğer yazdığımız condition doğru ise ne yapmak istediğimizi belirtir ve sonuna : koyarız
3.Ve sıra geldi koşulumuz yanlış ise ne yapmak istediğimize.

ternary kullanimi: --> " KOSUL ? dogruysa : yanlıssa "
*/

//Yazdığımız condition'nın bize direkt olarak false dönmesinin yanı sıra, aynı zamanda false dönecek diğer ifadeler şunlardır: null, NaN, 0, ""(boş string) ve undefined.


//eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz
let userName = prompt("kullanici bilginizi yaziniz")
let info = document.querySelector("#info")

info.innerHTML = `${userName.length > 0 ? userName : "kullanici bulunamadi:("}`

//Ternary operatörleri aynı zamanda birbiri ardına zincirleyerek (chaining) kullanabiliriz. Bu sayede farklı olasılıkları da katarak daha detaylı senaryoları kontrol edebiliriz.
var money = prompt("cebinde kac para var?");
var canBuy = (money<17) ? "satin alamazsin" : 
             (money>30) ? "satin alirsin" :
             "para miktarini gir";
console.log(canBuy)