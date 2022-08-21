'use strict' // (Activating strict mode) guvenli js kodları icin gerekli ve en basta olmalı. Bunu yazmak hatalarımızı daha gorunur/kolay tespit edilebilir hale getirmek icindir.

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;  //bir harf eksik bıraktık ve hatayı bize gösterdi.
// if(hasDriversLicense ) console.log('I can drive');

////////////////////////////////////////
/*
//FUNCTIONS

function logger(){
    console.log('my name is jonas')
}

logger() // --> calling/running/invoking function

//Tam Ornek
function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5 , 0); //return ile deger donülüyor ve bunu degiskene atayarak yakaladık
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2 , 4);
console.log(appleOrangeJuice)

//Ornek2
function describeCountry(country, population, capitalCity){
    const desc = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return desc;
}

console.log(describeCountry('turkey', 80 , 'ankara'))

// Built-in Functions --> console.log() , Number() , String() etc...
const num = Number('23')

//----------DESCRPTION vs EXPRESSION in Functions------------

//Function Decleration
const age1 = calcAge1(1989);

function calcAge1(birthYear){ 
    return 2037 - birthYear;
}


console.log(age1)

//Function Expression
 const calcAge2 = function(birthYear){
    return 2037 - birthYear;
 }

const age2 = calcAge2(1989)
console.log(age2)


//----------ARROW FUNCTION----------------
//en sade hali
const calcAge3  = birthYear => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3)

//baska ornek -- kod blogu varken {} kullanılır
const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 64 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1989))

//baska ornek -- birden fazla parametre varken () kullanilir
const yearsToRetirement = (birthYear,firstName) => {
    const age = 2022 - birthYear;
    const retirement = 64 - age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsToRetirement(1989 , 'yasin' ))
*/

/*
//----------FUNCTION CALLING OTHER FUNCTION----------
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}

console.log(fruitProcessor(4 , 6))
*/

//////////////////////////////////////////////

/*
//ARRAYS
//tanımlama-1
const friends = ['Michael' , 'Steven' , 'Peter'];
console.log(friends)

//tanımlama-2
const years = new Array(1991, 1989 , 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.lenght)
console.log(friends[friends.length-1]);

friends[2] = 'jasmin' //const ile tanımlanan array'in tamamını degistiremeyiz ama bir elemanını degistirebiliyoruz
console.log(friends)

//Array icinde degisik tip veriler bulundurabilir
const firstName = 'Jonas'
const jonas = [firstName , 'schmedtman' , 2037 - 1991, 'teacher', friends];
console.log(jonas)
console.log(jonas.length)

//array ve fonksiyon islemleri
const calcAge = function(birthYear) {
    return 2022 - birthYear;
}

const y = [1990, 1967, 2002, 2010, 2018]
const ages = [ calcAge(y[0]) , calcAge(y[1]) , calcAge(y[y.length-1]) ]
console.log(ages)
*/

/*
//Basic Array Operations(Methods)

//Add elements
const friends = ['Michael' , 'Steven' , 'Peter'];
const newLength = friends.push('Jay'); // push, hem sona eleman ekleme yapıyor hem de length value donuyor bize
console.log(friends)
console.log(newLength)

friends.unshift('John') // en basa eleman ekleme yapıyor
console.log(friends)

//remove elements
const popped = friends.pop(); //hem dizinin son elemanını diziden atar hem de atılan elemanı doner bize
console.log(friends)
console.log(popped)


const shifted = friends.shift(); // hem dizinin ilk elemanını diziden atar hem de atılan elemanı doner bize
console.log(shifted)

console.log(friends.indexOf('Steven'))

console.log(friends.includes('Steven')) // true doner


if(friends.includes('Steven')){
    console.log('You have a friend called Steven')
}
*/

/////////////////////////////

//OBJECTS
/*
//Object Defining
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022-1991,
    job: 'teacher',
    friends: ['Michael' , 'Peter' , 'Steven']
}
console.log(jonas)

// Dot vs Bracket Notation

console.log(jonas.lastName);
console.log(jonas['lastName']); //[key] --> bize value dondurdu

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // jonas['firstName'] value'su dondu
console.log(jonas['last' + nameKey]); // jonas['lastName'] value'su dondu

const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');

if (jonas[interestedIn]){
    console.log(jonas[interestedIn]); //"jonas.interestedIn" desek olmazdı
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, friends')
}

//Object'e eleman ekleme
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas)

//Ornek
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
*/

/*

//OBJECT'lerde METHOD OLUSTURMA -->object icinde function olusturma
const yasin = {
    firstName: 'yasin',
    lastName: 'sutoglu',
    birthYear: 1989,
    job: 'teacher',
    friends: ['Michael' , 'Peter' , 'Steven'],
    hasDriversLicense: false,

    //object'in icine method olusturma yaptık altta 1.yontem
    // calcAge: function(birthYear){ 
    //     return 2022 - birthYear;
    // }

    //1.yontemi gelistirdik
    // calcAge: function(){
    //     return 2022 - this.birthYear;
    // }

    //1.yontem ikinci kez gelisti
    calcAge: function(){
        this.age = 2022 - this.birthYear; //burada yeni property tanımlayip deger de atadık
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

//console.log(yasin['calcAge'](1989)) //this ile fonksiyonu duzenledik ve parametre gecmeye ihtiyac asagida kalktı
console.log(yasin.calcAge());
console.log(yasin.age);

console.log(yasin.getSummary())

*/

//ITERATION LOOPS

/*
//for loop keeps running while condition is TRUE
for(let rep=1; rep<=10; rep++){
    console.log(`lifting weights repetition ${rep} `);
}

//LOOPs and Arrays
const jonasArray = ['Jonas', 'Schmedtmann' , 2022-1991, 'teacher', ['Michael', 'Peter', 'Steven'], true ];

const types = [];

for(let i=0; i < jonasArray.length; i++){
    console.log(jonasArray[i], typeof jonasArray[i]) //reading from an array

    //Filling the types array
    //types[i] = typeof(jonasArray[i]); 
    types.push(typeof(jonasArray[i]))
}

console.log(types)

//Useful Example
const years = [1991, 2007, 1969, 1984]
const ages = []

for(let i=0; i < years.length; i++){
    ages.push(2022 - years[i])
}
console.log(ages)

//continue and break

//sadece string array elemanlarını gosterttik
for(let i=0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i])
}

//sayıyı bulunca donguden tamamen cık
for(let i=0; i<jonasArray.length; i++){
    if(typeof(jonasArray[i]) === 'number'){
        console.log(jonasArray[i])
        break;
    }
}
*/

/*
// loop backwards 

const jonas = ['Jonas', 'Schmedtmann' , 2022-1991, 'teacher', ['Michael', 'Peter', 'Steven'], true ];

for(let i=jonas.length-1; i>=0; i--){
    console.log(i, jonas[i])
}

//loops in loops
for(let exercise=1; exercise < 4; exercise++){
    console.log(`---------Starting exercise ${exercise}`);
    for(let rep=1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}
*/

//WHILE LOOP
//Tanımlama
// let rep = 1;
// while(rep<=10){
//     console.log(`number:  ${rep}`);
//     rep++;
// }

//Good Example

let dice = Math.trunc(Math.random() * 10);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 10);
    if (dice === 6) console.log('loop is about to end...');
}