/*
let firstName = "Matilda"; //Camelcase

let first_name = "jonas"

//let 3years = 3;            -->wrong typing
//let jonas&matilda = 'JM';  --->wrong
//let new = 24;              -->wrong //function etc.
//let Person = 'Jonas';      --> wrong; this can be used in OOP

let _3years = 3; //valid typing
let $2week = 2; //valid typing
let PI = 3.145; //valid

let myFirstJob = "programmer";
let myCurrentJob = "learner"

let jsIsFun = true;

console.log(typeof(true))
console.log(typeof(23))
console.log(typeof 'jonas')
console.log(typeof jsIsFun)

jsIsFun = 'YES!'
console.log(typeof jsIsFun)

let year;
console.log(year) //undefined
console.log(typeof year) //undefined

year = 1991;
console.log(typeof year)
*/

///////////////////////////

/*
const job; //hata verir, const tanımlarken deger ataması da mutlaka yapilmalidir

var job =  "programmer" // var ve let benzese de arka planda cok farklılıklar mevcut
job = "teacher"
*/

//////////////////////////////////////
/*
//math operators
const now =  2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah)
console.log(ageJonas*2, ageJonas/10, 2**3)

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
console.log(firstName +' '+ lastName)


//Assignment Operators
let x = 10 + 5;
x += 10; //x = x + 10;
x *= 4;  //x = x * 4;
x++;  // x = x+1;
x--;
console.log(x)

//comparison operators ; < , > , <= , >=
console.log(ageJonas>ageSarah) //true doner

const isFullAge = ageSarah >= 18;

*/
/////////////////////////////////////////////
/*
const now =  2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log("operator onceligi: " , now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;
console.log(x , y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)
*/

///////////////////////////////////////

/*
const firstName = 'jonas';
const job = 'teacher';
const birthYear =  1991;
const year = 2037


//Template Literals
const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}! `; 
console.log(jonasNew)

console.log(`just a regular string...`);

console.log('string with \n\ multiple \n\ lines');

//Template literals ile daha kolay altalta satıra yazdırdık
console.log(`string
multiple
lines`);
*/
//////////////////////////////
/*
//Control Structure - If-Else Statement
const age = 15;

if(age >= 18){
    console.log('sarah can start driving 🚗');
}else{
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years`)
}
*/

//////////////////////////////////
/*
//TYPE CONVERSION

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear+18);
console.log(Number(inputYear)+18);

console.log(Number('jonas')) //NaN doner
console.log(typeof NaN) //number doner

console.log(String(23), 23)

//TYPE COERCION
console.log('I am' + 23 + 'years old'); // arka planda 23'u stringe cevirdi
console.log('23'-'10'-3); // 10 dondurdu. Stringleri number'a dondurdu arka planda.
console.log('23'/'2');

let n = '1' + 1 // '11'
n = n-1; 
console.log(n) // 10 doner 

console.log('19' - '13' + '17'); //'617'
console.log(5 + 6 + '4' + 9 - 4 - 2); //'1143'
*/


//Truthy & Falsy Values

//5 falsy values: 0 , '' , undefined , null , NaN 

/*
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas')) //true
console.log(Boolean({}))  //true
console.log(Boolean(''))

const money = 0;
if(money){
    console.log('Dont spend it all!')
}else{
    console.log('You should get a job!')
}


let height;
if(height){
    console.log('Height is defined')
}else{
    console.log('Height is undefined')
}
*/

//////////////////////////

//Equality Operators --> ==(loose) , ===(strict)
/*
const age = '18';
if(age === 18) console.log('You just became an adult! (strict)');

if(age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23){
    console.log('23 is an amazing number!')
}else if(favourite === 7){
    console.log('cool! 7 is an amazing number!')
}else if(favourite === 9){
    console.log('9 is also a cool number!')
}else{
    console.log('Number is not 7 or 9 or 23')
}


if (favourite !== 23) console.log('Why not 23')
*/

///////////////////////////////////

// Boolean Logic & Logical Operators
/*
const hasDriversLicense = true ; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //AND operation
console.log(hasDriversLicense || hasGoodVision); //OR operation
console.log(!hasDriversLicense); //NOT operation

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
    console.log('sarah is able to drive')
}else{
    console.log('someone else should drive..')
}

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired); 
console.log(hasDriversLicense && hasGoodVision && !isTired); 
*/

/////////////////////////////////////////

//SWITCH CASE
/*
const day = 'monday';

switch(day){
    case 'monday': // day === 'monday'
        console.log('Plan Course');
        console.log('Go to code meeting');
        break; //break olmadan asagidaki kodları de run eder
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday' : 
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday' :
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day!')  
}
*/

//////////////////////////////

//TERNARY OPERATOR
/*
const age = 24;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

//if ornek hali
let drink2;
if(age>=18){
    drink2 = 'wine'
}else {
    drink2 = 'water'
}
console.log(drink2)

//Template Literals ve Ternary Operator birlikte kullanim
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/