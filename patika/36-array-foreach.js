//Array foreach metodu

//Normal Kullanım
const numbers = [65, 44, 12, 4]
numbers.forEach(myFunc)

function myFunc(item, index, arr){
    arr[index] = item*10     
}
console.log(numbers)

//ARROW FUNCTION ile kullanimi
const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

PRODUCTS.forEach( (product, index) => console.log(product, index)) //dizi elemanları indexleri ile beraber yazıldı

PRODUCTS.forEach((product, index, array)=>console.log(array[index])) // product'ları array indexlerini kullanarak yazdirdik

PRODUCTS.forEach((product, index, array)=> array[index] = product+ " 111") //dizi elemanlarını icerik ekleyerek degistirdik
console.log(PRODUCTS)

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`) // dizi elemanlarını büyük harfe cevirdik
console.log(PRODUCTS)

//ul'ye li olarak product ekleme

// const userListDOM = document.querySelector('#userList')
// PRODUCTS.forEach((item)=>{
//     const liDOM=document.createElement('li')
//     liDOM.innerHTML = item
//     userListDOM.append(liDOM)
// })

//Simdi de forEach kullanarak yeni bir array olusturabilecegimiz bir fonksiyon yazalim
const numaralar = [4,11,9]
const newArray = []

numaralar.forEach(function(numaralar){
    newArray.push(numaralar*3)
})
console.log(newArray)