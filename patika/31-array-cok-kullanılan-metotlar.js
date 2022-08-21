// Cok Kullanilan Array Metotlari ve Array icinde Array

let items = [1,2,3,4,5]

//Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length) // array icindeki istedigimiz arrayin length bilgisini aldık
console.log(items[0][0]) //Ayse bilgisine ulastık

//Array icerisinden oge ayirmak -->splice(position, Kacitem?)
let newItems = items.splice(1,5)
console.log("newItems: ", newItems)
console.log("items: ", items)

//Array icersindeki elemanın index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")
console.log("ipsum'un index'i:", items.indexOf("ipsum"))

//Array Kopyalamak -> slice, [..ES6] -- ONEMLİ!!
let copyItems = items //kopyalama yapmaz, copyItems'ta yapılan her degisiklik items'ta da olur
console.log(items)

copyItems.pop() //son elemanı cikardik
console.log("copyItems: ", copyItems)
console.log("items: ", items)

console.log("--kopyalandiktan sonraki hali--")

copyItems = items.slice() // kopyalama yapti, copyItems'ta yapılan her degisiklik items'ta da olmaz artik
copyItems.pop()
console.log("copyItems",copyItems)
console.log("items", items)

let es6Items = [...items] // es6 ve sonrasi gelen kopyalama islemi
console.log("es6Items: ", es6Items)

//İki Array bilgisini birlestirmek --> [...array1, ...array2]
let allUsers = [...femaleUsers, ...maleUsers]
console.log("allUsers: ", allUsers)

//Array icerisndeki bilgiyi String'e cevirmek -->toStirng, join
console.log(allUsers.toString())
console.log(allUsers.join(" -- "))

//istedigimiz Index bilgisine gore eleman eklemek -->splice(index,0,value)
allUsers.splice(allUsers.length , 0 , "melissa") 
allUsers.splice( Math.floor( allUsers.lenght / 2), 0 , "lorem") //dizinin ortasina eleman ekledik
console.log(allUsers)

//Array icinde eleman bulunup bulunmadığını kontrol etme --> includes(value); boolean(true/false) doner
const alisverisListem = ["elma", "ekmek", "süt"]
console.log(alisverisListem.includes("elma")) //true doner

// Array  bir kısmının kopyasıyla yeni bir dizi oluşturma --> slice(baslangıcIndex,bitisIndex); Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım. Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.
const yeniAlisverisListem = alisverisListem.slice(0,2)
console.log(yeniAlisverisListem)

// Farklı Arrayleri birleştirip tek bir Array'e çevirme --> concat() metodu
const yiyecekler = ["pasta", "baklava", "puding"]
const icecekler = ["su", "kahve"]
const menu = yiyecekler.concat(icecekler)
console.log(menu)

//Farklı olarak, array icerisine array tanımlama sekli
let kalemlik = new Array()
//aynı metotla kalemlik arrayi icine yeni diziler olusturma
kalemlik[0] = new Array("silgi", 2, "mavi")
kalemlik[1] = new Array("kalem", 3, "kirmizi")
kalemlik[2] = new Array("cetvel", 1, "siyah") 
console.log("kalemlik", kalemlik)