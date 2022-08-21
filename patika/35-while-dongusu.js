//While Dongusu -->  While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.

//ORNEK1
// let counter = 0;

// while (counter<10){
//     console.log(counter)
//     counter++
// }

//ORNEK2
let userName = ""

while(!userName){
    userName = prompt("kullanici adi giriniz: ")
    console.log(userName)
}

//ORNEK^

var arabalar = ["honda", "mercedes", "bmw", "Fiat", "Renault" ]

var i = 0 
while(arabalar[i]){ //burada dongu sartımız arabaların i'nci indeksi var mı? var oldugu surece dongu isler
    console.log(arabalar[i])
    i++
}