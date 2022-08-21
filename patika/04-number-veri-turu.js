//number veri turu tanımlamak:
let price=100
let tax=0.18
let priceTax=price * tax
let totalPrice= price+priceTax
console.log("Fiyat: ",price,"KDV",tax,"KDV Tutar: ",priceTax,"Toplam: ", totalPrice)

//string to number donusumu
let strNumber="111"
console.log(strNumber) // ekrana str olarak bastı
let newNumber = Number(strNumber)
console.log(newNumber) //ekrana number olarak bastı
console.log("Number constractor icine bilgi gonderildi: ", Number("222"))


//arttırma ve azaltma
let counter= 320
counter = counter + 1 //uzun yontem
counter +=1
counter++           // en kısa yontem
++counter
console.log(counter)

counter--
--counter
counter -=1
console.log(counter)

counter *=10
console.log(counter)

counter /=2
console.log(counter)

//islem onceligi sırası
/*1.Alan Çağırma, dizi indeksleme, fonksiyon çağrıları ve ifade gruplandırmaları --> . [] ()
  2.Tekli işlemciler, return veri tipi, nesne oluşturulması,
   undefined değerler--> ++ — – ~! delete new typeof void
  3.Çarpma, bölme Modulo (Kalan) bölmesi; (* / %)
  4.Toplama, çıkartma, karakter birleştirme (string concatenation)
  5.Bit kaydırma (<< >> >>>)
  6.Küçüktür, küçük veya eşit, büyüktür, büyük veya eşit, instanceof; (< <= > >= instanceof) 
  7.Eşitlik, eşitsizlik, kesin eşitlik, kesin eşitsizlik, (== != === !==)
  8.Bit temelli AND (&)
  9.Bit temelli XOR (^)
  10.Bit temelli OR (|)
  11.Mantıksal AND (&&)
  12.Mantıksal OR (||)
  13.Üçlü koşul (?:)
  14. Atama, işlemle birlikte atama (= OPERAND =)
  15.Çoklu değerlendirme (,)
*/
console.log(2+3*10)
console.log((2+3)*10)

// mod alma (kalan) --> % 
console.log(3 % 2)
console.log("Koli dısarıda kalan urun: ", 15%8)

//us alma --> **
let sayi1=2
console.log(sayi1**4)

//asagı, yukarı ve normal yuvarlama islemi
let sayim = 3.7
console.log("asagı yuvarlama: ", Math.floor(sayim))
sayim = 3.4
console.log("yukarı yuvarlama: ", Math.ceil(sayim))
sayim = 5.4
console.log("yakına yuvarlama: " , Math.round(sayim))