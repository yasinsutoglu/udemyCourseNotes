'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];
const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 12,
      close: 22,
    },
    
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 12+12,
    },
};

  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,
}

//SETS LESSON

//SETS --> collection of unique values, so that a set can never have any duplicates. 
//Sets are iterables. Sets look like an array but don't contain any duplicate. 

//Array'den farkı; elemanları unique olması ve elemanların sırası irrelevant olmasıdır. Index'e sahip degillerdir.
//there is no way for getting data out of set. 

const ordersSet = new Set( ['Pasta', 'Pizza' , 'Pizza' , 'Risotto' , 'Pasta', 'Pizza'] ); // Set() icerisine gecilen parametre iterable birsey olmak zorunda

console.log(ordersSet) // {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')) // {'J', 'o', 'n', 'a', 's'}
console.log(new Set()) // {size: 0}

console.log(ordersSet.size) //3 doner. array.length gibidir.
console.log(ordersSet.has('Pizza')) //true doner. array.includes() gibidir.

//add new element
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')// daha once eklendigi icin bu gecerli olmadı. elemanlar unique unutma!!
console.log(ordersSet) // {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'} 

//delete element
ordersSet.delete('Risotto')
console.log(ordersSet)
//ordersSet.clear()  // delete all elements
//console.log(ordersSet)

//looping
for (const order of ordersSet) console.log(order);

//Example (array'den set olusturup sonra set'ten yeni array olusturma)
const staff = ['waiter' , 'chef' , 'waiter', 'manager', 'chef' , 'waiter']; 
const staffUnique = new Set(staff);

const newStaff = [...staffUnique]; //spread operator kullanarak set'i array -['waiter', 'chef', 'manager']- haline getirdik.
console.log(newStaff)

//sadece unique'lerin size'ını ogrenmek
console.log( new Set(['waiter' , 'chef' , 'waiter', 'manager', 'chef' , 'waiter']).size ) // 3 doner

//string icinde kac farklı harf bulundugunu bulma
console.log(new Set('jonasschmedtmann').size) // 11

//---------------------------------------------------------------------------------------------

//MAPS LESSON

//Obje'ler gibi (key,value) pair var ama key'ler objelerdeki gibi sadece string olmuyor (number,obje,array, diger bir map olabiliyor).

const rest = new Map(); // empty Map tanımlama/olusturma

rest.set('name' , 'Classico Italiano'); // set method--> map'e eleman eklemek icin kullanılır. set(key, value) seklindedir.
rest.set(1 , 'Frienze,Italy')
console.log(rest.set(2 , 'Lısbon,Portugal')) //rest aynı zamanda yeni olusan map'i geri doner

//chain set
rest.set('categories' , ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ).set('open', 11).set('close' , 23).set(true, 'we are open :D').set(false , 'we are closed!!');

//read data from map --> get method
//key degerleri parametre gecilerek value dataları okunuyor
console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

//Example
const time = 18;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))) // 'we are open:D' gosterir.

//checking similar to  array.includes
console.log(rest.has('categories')) //true gosterir

rest.delete(2)//Eleman silme
//rest.clear() //komple temizler map'i
console.log(rest)

console.log(rest.size) //7 doner. Map'in length'i gibidir.

//Key olarak array ekleme;

//rest.set([1,2] , 'Test')
//console.log(rest.get([1,2])) //undefined doner. Cunku set edilen key ile get edilen key heap'de aynı addrese sahip degil

const  arr = [1,2];
rest.set(arr,'Test')
console.log(rest.get(arr)) //burada dogru sonucu alırız.

//Key olarak object ekleme;
rest.set(document.querySelector('h1') , 'Heading');
console.log(rest)

// SET() ile chain cok uzayacaksa yeni Map'i asagidaki sekilde tanımlarız; Map([ ['key', 'value'], ['key', 'value'], ..]) seklindedir.
const question = new Map([
    ['question' , 'what is the best programming lang.?'],
    [1 , 'C'],
    [2 , 'Java'],
    [3, 'JS'],
    ['correct' , 3],
    [true , 'Correct!'],
    [false, 'Try again!'],
])

console.log(question)

//Convert object to map
console.log(Object.entries(openingHours)) // bu bize "array in array" seklinde donuyordu.
const hoursMap = new Map(Object.entries(openingHours))//yukarıdaki mantıktan bu kod ile objeyi map'e donusturduk

console.log(hoursMap)

//Iteration over Maps
console.log(question.get('question'))
for(const [key,value] of question){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`)
    }
}

const answer = 3;// kullanıcıdan aldıgımızı farzedelim
console.log(question.get(question.get('correct') === answer)) // 'Correct!' gosterir bize.

//Convert map to array!!
console.log([...question]) // array of array halinde gosterdi bize
console.log(question.entries()) //yine map hainde gelir
console.log([...question.entries()]) //array of array'e doner

console.log(question.values()) //yine map hainde gelir
console.log([...question.values()])

console.log(question.keys()) // yine map hainde gelir
console.log([...question.keys()])










