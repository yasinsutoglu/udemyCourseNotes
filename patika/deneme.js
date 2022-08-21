//1.alistirma
let dizi = [2,5,8,11,15,17]

let filtrelenmisDizi = dizi.filter(function(sayi){
    return sayi > 10
})

let son = filtrelenmisDizi.map(function(sayi){
    return sayi*5
})

console.log(son)

//2. alistirma

let dizim = [3,6,9,14,16]

function myFunction(arr){

    let sonuc = arr.some(function(sayi){
        return sayi>5
    })
    
    if (sonuc){
        console.log("dizim array'i icerisinde 5'den büyük sayi var")
    }else{
        console.log("dizim array'i icerisinde 5'ten büyük eleman mevcut değil")
    }

}

myFunction(dizim)

//3.alistirma

let myArr = [2,3,4]

function indirgeyici(accum,sayi){
    return accum*sayi
}

const sonuc1 = myArr.reduce(indirgeyici,1)
console.log(sonuc1)

//hackerrank Array question
const points = [100, 100, 1, 5, 25, 10];

function getSecondLargest(nums) {
    // Complete the function
    const points=nums.sort(function(a, b){return b-a})
    
    let myNum = []
    for(let i=0; i<=points.length;i++){
        if(points[i]>points[i+1]){
        myNum.push(points[i])
        }
    }

return myNum[1]    
}

console.log(getSecondLargest(points))


//hackerRank loop question

let s = "javascriptloops"

//hatası olan yontem
// function vowelsAndConsonants(s){
//     let vowels = ['a','e','i','o','u']
//     let vow = []
//     let con = []
//     for(let i=0; i<s.length; i++){
//         for(let j=0; j<vowels.length; j++){
//             if(s[i]===vowels[j]){
//                  vow.push(s[i])
//             }else{
//                 con.push(s[i])
//             }
//         }
//     }

//     for(let m=0; m<vow.length; m++){
//         console.log(vow[m])
//     }

//     for(let n=0; n<con.length; n++){
//         console.log(con[n])
//     }

// }

//dogru yontem
function vowelsAndConsonants(s){
    let vowels = ['a','e','i','o','u']

    for(let i of s){
        if(vowels.includes(i)){
            console.log(i)
        }
    }

    for(let j of s){
        if(!vowels.includes(j)){
            console.log(j)
        }

    }
}

vowelsAndConsonants(s)



