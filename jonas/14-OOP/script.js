'use strict';

//1st WAY --> CONSTRUCTOR FUNCTION

//Sadece function expression veya decleration ile kullanılır. Cunku arrow func.'da this keyword yok!

const Person = function(firstName, birthYear){
    //console.log(this) //"Person {}" dondu

    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Methods --> never do this. Because, if we have thousands users, we definitely face problems with this.
    // this.calcAge = function (){
    //     console.log(2037 - this.birthYear)
    // }
}

//new operator ile Person function cagrılır ama detayı su sekilde;
//1. New {} "empty object" is created
//2. function is called, this keyword is set to newly created empty object "this = {}"
//In the execution context, the this keyword will point to new object here that was created in step1
//3.This newly created object is linked to the prototype.
//4. function automatically return {} --> no longer needs to be empty


const jonas = new Person('Jonas' , 1991); //jonas burada instance olmus oldu.Asagıda da matilda ve jack birer instance'dır.
console.log(jonas) //Person {firstName: 'Jonas', birthYear: 1991} 
console.log(jonas instanceof Person) //true doner

//Some other examples
const matilda = new Person('Matilda' , 2017);
const jack = new Person('Jack' , 1975)
//console.log(matilda, jack)


//PROTOTYPES
//Each and every function in JavaScript automatically has a property called prototype. And that includes, of course, constructor functions. Now every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property. 
console.log(Person.prototype)

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear); // this--> bu methodu cagıran objeyi temsil eder. ORNEK; jonas, matilda..
}

jonas.calcAge(); //46 gosterdi. Normalde jonas objesinde tanımlı olmamasına ragmen onu turettigimiz prototype objesinde tanımladıgımız icin calcAge methoduna ulastık. Burada "prototypal inheritance" söz konusudur. Yukarıda her olusturulacak obje icersinde tek tek yer almasın diye yorum satırı yapmıstık. Burada methodun sadece bir kopyasını olusturarak cozume kavusturduk.
matilda.calcAge();

// The above are works. Because, any object always has access to the methods and properties from its prototype. And the prototype of Jonas and Matilda is Person.prototype.

console.log(jonas.__proto__) //So to prototype of the Jonas object is essentially the prototype property of the constructor function. 
//it is this step 3 which will create this "__proto__" property. So it creates this "__proto__" property and it sets its value to the prototype property of the function that is being called.

console.log(jonas.__proto__ === Person.prototype) //true doner
//Person.prototype here is actually not the prototype of person. But instead, it is what's gonna be used as the prototype of all the objects that are created with the person constructor function.

console.log(Person.prototype.isPrototypeOf(jonas)) //true doner  //prototype -- >prototypeOfLinkedObjects gibi dusun!
console.log(Person.prototype.isPrototypeOf(Person)) //false doner  

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species) //Homo Sapiens --> inherited from Person
console.log(matilda.species) //Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')) // true
console.log(jonas.hasOwnProperty('species')) // false -->  that's because this property is not really inside of the Jonas object.It simply has access to it because of its prototype. So because it's in the prototype property of person.

//!!Remember, Person.prototype is actually not the prototype of Person but of all the objects that are created through the person function.

//////////////////////
console.log(jonas.__proto__) //{species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}

//Object.prototype --> top of prototype chain
console.log(jonas.__proto__.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(jonas.__proto__.__proto__.__proto__) // null

console.dir(Person.prototype.constructor) // Person(firstName, birthYear) --> kendisine geri donmus olduk

//////////////////////////

const arr = [3, 6, 6, 5, 6, 9, 9] // new Array === []
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype) //true doner

console.log(arr.__proto__.__proto__) //object oldugundan alttaki doner.
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

//Built-in array obje'sinin methodlarına bir method biz olusturalım.(method extension yani)Genellikle bu method extension'ı alıskanlık haline getirmemeliyiz.
Array.prototype.unique = function(){
    return [...new Set(this)];  // this --> array objesini belirtiyor.
}

console.log(arr.unique()) // [3, 6, 5, 9] cıktısı verdi

////////

const h1 = document.querySelector('h1')
console.dir(h1) // prototype chain'i inceledigimizde en sonunda Object goruruz
console.dir( x => x+1) // bu arrow function'daki prototype chain'i inceledigimizde en sonunda Object goruruz

///////////

//CHALLENGE-1
const Car = function(make , speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.breake = function(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW' , 120)
const mercedes = new Car('Mercedes', 95)

bmw.accelerate();
bmw.breake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.breake();