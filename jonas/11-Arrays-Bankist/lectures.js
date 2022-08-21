'use strict'

// LECTURES
  
  /////////////////////////////////////////////////

  /*
  //SIMPLE ARRAY METHODS
  let arr = ['a' , 'b' , 'c' , 'd' , 'e'];

  //SLICE
  console.log(arr.slice(2))//string'lerdeki slice gibidir. Yeni array dondurur. Orjinal arrayi mutate etmez.
  console.log(arr.slice(2,4)) //  ['c', 'd'] cıktısı verir.
  console.log(arr.slice(-2))  //  ['d', 'e'] cıktısı verir.
  console.log(arr.slice(-1))  //  ['e'] cıktısı verir.
  console.log(arr.slice(1,-2)) // ['b', 'c'] olur.
  console.log(arr.slice()) //['a', 'b', 'c', 'd', 'e'] --> shallow copy olusturmus olduk.
  console.log([...arr])//baska bir shallow copy olusturma idi.

  //SPLICE -> slice method'dan farkı orjinal arrayi degistirir/mutate eder. Eleman silmeye de yaramıs olur bir yerde yani.
  //console.log(arr.splice(2))
  arr.splice(-1)//arr'nin son elemanını aldı ve orjinal array'den cıkardı
  console.log(arr) //['a', 'b', 'c', 'd'] oldu
  arr.splice(1,2) //1. elemandan baslayıp 2 tane eleman cıkardı
  console.log(arr); //['a', 'd'] kaldı geriye

  //REVERSE
  //Array'i tersten sıralar ve orjinal arrayi de mutate eder.
  const arr2 = ['j' , 'i' , 'h' , 'g' , 'f']
  console.log(arr2.reverse())
  console.log(arr2)

  //CONCAT
  //İki arrayi birlestirir ve orjinal arrayi mutate etmez.
  arr = ['a' , 'b' , 'c' , 'd' , 'e']
  const letters = arr.concat(arr2); //[...arr, ...arr2] ile aynı islevi yapar.
  console.log(letters)

  //JOIN
  //arraydeki elemanları parametreyle birlestirir ve string yapar.
  console.log(letters.join('-')) // "a-b-c-d-e-f-g-h-i-j" dondurur.

  
  //AT
  //Parametre olarak verilen yerdeki array elemanını dondurur.
  const arr = [23,11,64]
  console.log(arr[0])
  console.log(arr.at(0))

  //getting the last array element
  console.log(arr[arr.length-1])
  console.log(arr.slice(-1)[0])
  console.log(arr.at(-1))

  //at() stringlerde de kullanılır.
  console.log('jonas'.at(0))
  console.log('yasin'.at(-1))  

*/
  ////////////////////////////////////////
/*
  //FOREACH METHOD --> loop in array

  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//callback function'daki parametreler (current element , current index , kullandıgımız array) seklindedir. Bunlardan ilkini, ilk ikisini veya hepsini kullanabiliriz ama sırası onemlidir.

//forEach() --> dizinin tüm elemanları üzerinde teker teker callback function'ı uygular. "For of" looptan farklı olarak break ve continue burada kullanılmaz. Dongu tüm elemanlar üzerinde calısır. 

movements.forEach(function(mov, i , arr){       
    if(mov > 0){
        console.log(`Movement ${i+1}: You deposited ${mov}`)
    }else{
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`)
    }
})

//Bunu "For of" loop ile yapacak olsaydık.
for (const [i , mov] of movements.entries()){
    if(mov > 0){
        console.log(`Movement ${i+1}: You deposited ${mov}`)
    }else{
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`)
    }
} 

//forEach with Maps and Sets

//Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  //map kullanırken callback function parametre sırası-->(value, key , map) seklindedir
  currencies.forEach(function(value, key , map){
      console.log(`${key}: ${value}`);
  })

  //Set
  const currenciesUnique = new Set(['USD' , 'GBP' , 'USD' , 'EUR' , 'EUR'])
  console.log(currenciesUnique)

  //set kullanırken callback function parametre sırası-->(value, _ , set) seklindedir
  currenciesUnique.forEach(function(value, _ , set){
    console.log(`${value}`);
  })

  */

  //////////////////////////////////////////////
/*
  //MAP METHOD
  //map() methodu da callback function ile herbir array elemanı üzerinde islem yapar ve yeni bir array doner bize.İslem yaptıgı herbir elemanın indexine karsılık gelen yere yeni elemanı koyar. callback function parametre olarak (current element, index , array) seklinde alabilir.

  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const eurToUsd = 1.1;

  // const movementsUSD = movements.map(function(mov){
  //   return mov * eurToUsd;
  // })

  //callback'in arrow function halinde yazımı ile;
  const movementsUSD = movements.map( mov => mov * eurToUsd)

  console.log(movements)
  console.log(movementsUSD) // map fonksiyonu ile olusan yeni array

  //"for of" loop ile soyle yapardık.
  const movementsUSDfor = [];
  for (const mov of movements) movementsUSDfor.push(mov*eurToUsd);
  console.log(movementsUSDfor)
  
  //Example
  //asagıda tek satır kod oldugundan {} ve return'u kaldırabilirdik.
  const movementsDescriptions = movements.map((mov,i) => {
      return `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  })

  console.log(movementsDescriptions)
*/

//////////////////////////////////////////////////////
/*
//FILTER METHOD
//filter() -->bu method da callback function ile herbir array elemanın üzerinde "belirli kosula gore" islem yapar ve yeni bir array doner bize. callback function parametre olarak (current element, index , array) seklinde alabilir. map() methodundaki gibi return kullanılır.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov,i,arr){
  return mov > 0;
})

console.log(deposits)

//"for of" ile de yukarıdaki islev yapılabilir ama methodlar gibi chain halinde islem yapamazsın. Method, daha basit ve clean code yazılmasında onemlidir.

const depositFor = [];
for (const mov of movements) if(mov > 0) depositFor.push(mov);

console.log(depositFor)

//Withdrawals'ı yapalım filter ile;(arrow function kullanarak)
const withdrawals = movements.filter(mov => mov < 0 )
console.log(withdrawals)
*/

//////////////////////////////////////////
/*

//REDUCE METHOD
//Arrayin tüm elemanlarını tek bir deger return edecek sekilde islemeye yarayan methoddur.Map() ve Filter()'dan farklı olarak callback fonksiyonu parametre alırken ;
//--> reduce(function(accumulator, current_element, index, array ){} , accumulator_first_value ) seklindedir

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//accumulator --> SNOWBALL
const balance = movements.reduce(function(acc, cur , i ,arr){
    console.log(`Iteration ${i} ${acc}`)
    return acc + cur  //burada acc = acc + cur gibi her dongu degeri eklenerek gider. O nedenle snowball deniyor.
}, 0)

console.log(balance)

//arrow function ile yazımı
const balance3 = movements.reduce((acc,cur) => acc + cur , 0)
console.log(balance3)

//"for of" loop ile yapılıs;
let balance2 = 0;
for (const mov of movements) balance2 +=mov;
console.log(balance2)

//Example - finding max value
const max = movements.reduce((acc , mov) => {
  if(acc > mov)
    return acc;
  else
    return mov;
}, movements[0]) // burada acc baslangıc degerine 0 degil "movements[0]" koyduk. 0'da hatalı mantık olur.

*/

///////////////////////////////////////
/*
//METHODS CHAIN EXAMPLES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//analogy with pipeline
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc,mov)=> acc + mov,0);

//hata arama ornegi icin yazım;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map((mov,i,arr) => {
//   console.log(arr) // buradaki arr--> filter() sonucu olan array'dir.
//   return mov * eurToUsd
// }).reduce((acc,mov)=> acc + mov,0);

console.log(totalDepositsUSD)

*/
////////////////////////////////////////////////
/*
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//FIND METHOD
//Array'in bir elemanını belirlenen sarta gore bulan methoddur. Array üzerinde loop yapar. Filter methoda benzese de Filter'dan farklı olarak array dondurmez, sarta uyan ilk elemanı dondurur bize. Eger find() array'de sartı saglayan eleman bulamazsa undefined doner.

const firstWithdrawal = movements.find(mov => mov < 0)

console.log(firstWithdrawal)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)//obje gosterdi bize

//FINDINDEX METHOD
//Find methoda benzer ama buldugu elemanı degil indexini dondurur.

*/

////////////////////////////////////////
/*

//SOME METHOD --> includes()'a benzer ama equality check degil condtion check yapar.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//equality check
console.log(movements.includes(-130)); //true doner

//Condition check
console.log(movements.some(mov => mov === -130)) //includes(-130) ile aynı isi yaptı.

const anyDeposits = movements.some(mov => mov > 1000)
console.log(anyDeposits) // true doner

//EVERY METHOD --> some() method'un kuzeni gibidir. Belirtilen sartı saglayan herhangi bir deger varsa true doner seklinde degil, tüm degerler o sartı saglıyorsa true doner.

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

console.log(movements.every(mov => mov > 0)); //false doner
console.log(account4.movements.every(mov => mov > 0)); // true doner

//Yukarıdaki methodlar'da callback function'ı gomulu yazmıstık ama ayrı yazıp da call edebiliriz de.(Seperate callback)

//Ornek;
// const deposit = mov => mov > 0;
const deposit = (mov) => {
  return mov > 0};

  console.log(movements.some(deposit))
  console.log(movements.every(deposit))
  console.log(movements.filter(deposit))

  */

  //////////////////////////////////

/*
  const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];

  //FLAT METHOD
  //array icinde array varken tek bir arrayde tüm elemanları toplar. callback function kullanmaz. flatening yaparken default olarak  1 level derine gider. 

  const arr = [[1,2,3] , [4,5,6] , 7, 8]
  console.log(arr.flat()) // [1,2,3,4,5,6,7,8] seklinde doner.

  const arrDeep =  [[1,[2,3]] , [[4,5],6] , 7, 8]
  console.log(arrDeep.flat()) //[1, Array(2), Array(2), 6, 7, 8] doner
  console.log(arrDeep.flat(2)) //[1,2,3,4,5,6,7,8] seklinde doner.

  //Ornek; --> tum account'lardaki movements'ların elemanlarını toplayalım
  const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc,mov)=> acc + mov , 0);
  console.log(overallBalance)

  //FLATMAP METHOD --> map ve flat arka arkaya kullanmak cok yaygındır. İkisinin islevini tek bir methoda toplanmıs hali flatMap method'dur. map method ile aynı callback function'ı kullanır. flatMap sadece 1 seviye deep gider. Daha derine array icinde array gidilecekse ustteki hali kullanılır.

  const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov , 0)
  console.log(overallBalance2)
*/