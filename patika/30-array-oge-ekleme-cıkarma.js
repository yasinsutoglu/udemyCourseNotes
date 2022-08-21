// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali: ", items)

//Array: sona oge/eleman eklemek -->push
items.push(50)
console.log("sona ekleme sonuc: ", items)

//Array: basa eleman eklemek -->unshift
items.unshift(5)
console.log("basa ekleme sonuc: ", items)

//Array: sondaki elemanı cikarmak --> pop 
let lastItem = items.pop() // son elemanı lastItem degiskenine atadık. Diziden attıgımız elemanın ne oldugunu bilmek isteriz
console.log(`lastItem cıktı: ${lastItem} , items: ${items}`)

//Array: bastaki ogeyi cikarmak -->shift
let firstItem = items.shift() // ilk elemanı firstItem degiskenine atadık
console.log(`firstItem cıktı: ${firstItem} , items: ${items}`)

//Array icerisindeki bir ogenin degistirilmesi
//ilk eleman degistirilmesi
items[0] = 15
console.log(items)

//son eleman degistirilmesi
items[items.lenght - 1] = 100
console.log(items)

items[2]=1000
console.log(items)

//splice() metodu --> Bu metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

var sports = ['basketball', 'football', 'tennis']
console.log(sports)

sports.splice(1,0,'baseball') //eleman ekledik
console.log(sports)

sports.splice(1,1) //eleman sildik
console.log(sports)

//NOT: splice metodu da pop ve shift gibi, sildiği elemanı geriye döndürür. Ancak pop ve shift geriye silinen elemanın türünde değer döndürür, splice ise geriye dizi(object olarak) şeklinde sonuç döndürür.