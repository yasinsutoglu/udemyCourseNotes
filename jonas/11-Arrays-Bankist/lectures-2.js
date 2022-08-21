'use strict'
/*
//SORTING ARRAYS with built-in methods

//sort()-->elemanları sayisal yada alfabetik sıralar ama orjinal array'i degistirir. By default, elemanları strings olarak alıp sıralar. Numbers sıralamada callback function kullanmak gerekir.


//strings
const owners = ['Jonas' , 'Zach' , 'Adam' , 'Martha'];
console.log(owners.sort());
console.log(owners)

//numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//console.log(movements.sort()) --> isimizi gormez

//General Rules for sort()
//return < 0 ; --> A , B (keep the order)
//return > 0 ; --> B , A (switch the order)

//Ascending
//movements.sort((a,b) => a - b); --> alttakinin kısayolu
movements.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(movements) //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Descending
// movements.sort((a,b) => b - a); -->alttakinin kısayolu
movements.sort((a,b) => {
    if (a > b) return -1;
    if (a < b) return 1;
})
console.log(movements) //[3000, 1300, 450, 200, 70, -130, -400, -650]
*/

//////////////////////////////

// MORE WAYS OF CREATING AND FILLING ARRAYS


console.log(new Array(1,2,3,4,5,6,7)) //[1, 2, 3, 4, 5, 6, 7]

//Empty arrays + fill method
const x = new Array(7); // 7 elemanlık bos array olusturur
console.log(x) //[empty × 7]


x.fill(1,3,5) // fill(value , first index , last index) olarak arrayi doldurur. [empty × 3, 1, 1, empty × 2]
console.log(x)
x.fill(1) // komple array'i 1 degeri ile doldurur.
console.log(x)

const arr = [1,2,3,4,5,6,7]
arr.fill(23, 2, 6)//fill method ana array'i degistirir
console.log(arr) //[1, 2, 23, 23, 23, 23, 7]


//ARRAY.FROM
//Array.from() --> icerisine ilk parametre obje geceriz.Bu array length olur genellikle. Sonrasında icini doldurabilmek adına map() functionınkine benzer bir callback function yazarız. 
const y = Array.from({length:7} , () => 1 );
console.log(y) // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length:8}, ( _ , i ) => i+1) // burada "_" kullandık cunku o parametreyi hic kullanmayacagız. Bu yazılım dilinde pas gecilecek parametre gosterimidir.
console.log(z) // [1, 2, 3, 4, 5, 6, 7, 8]

//10 elemanlık 1-100 arası random degere sahip array olusturma
const rnd = Array.from({length : 10}, () => Math.floor(Math.random() * 100))
console.log(rnd)

//******************************************IMPORTANT CASE************************************
//Array.from() --> DOM üzerindeki bir grup elementi array haline getirmede kullanılır.Bunu ornegin script.js'deki  yapıyı kullanarak soyle yapardık.

//burada labelBalance'a tıklanma eventi ile sunlar olur => Array.from'un ilk parametresi "document.querySelectorAll('.movements__value')" --> nodeList dondurur. İkinci paramtrede callback function'da bu nodeList'deki her elemanın textContent'inde islem yapılır ve yeni array olarak movementsUI'a atanır. movementsUI artık bir kullanılabilir sayı array'idir.
labelBalance.addEventListener('click' , function(){
    const movementsUI = Array.from( document.querySelectorAll('.movements__value') , (el) => Number(el.textContent.replace('€', '')) );
    console.log(movementsUI)
})

//Array from'dan farklı olarak nodeList'i su sekilde spreading kullanarak array haline getirebilirdik ama tek tek map ile islem yapmamız gerekirdi.Yukarıdaki Array.from yontemi daha kısadir.
// const movementsUI2 = [...document.querySelectorAll('.movements__value')]