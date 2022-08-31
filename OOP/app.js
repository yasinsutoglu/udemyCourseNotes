//!object literals

// let yigit = {
//     name: "yigit",
//     yearOfBirth: 2010,
//     job:student,
// }


//! Constructor
// function Person(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2022 - this.yearOfBirth;
//     }

//     // console.log(this)
// }

// let Person = function (name, yearOfBirth, job) {
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;
//       this.calculateAge = function(){
//           return 2022 - this.yearOfBirth;
//       }
// };

// //! Getting Instance from Constructor 
// let yigit = new Person('yigit' , 2010 , 'student')
// let emel = new Person('emel' , 1989 ,'teacher')

// //!properties
// console.log(yigit.name);
// console.log(yigit.yearOfBirth);
// console.log(yigit.job);

// //!method
// console.log(yigit.calculateAge())

console.log('*******************')


let Person = function(name , yearOfBirth , job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//? Prototype
Person.prototype.calculateAge = function () {
  return 2022 - this.yearOfBirth;
};

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName = 'Turan';


let emel = new Person('emel', 1989 , 'teacher');
let yigit = new Person("yigit", 1995, "student");

console.log(emel)
console.log(emel.calculateAge())
console.log(emel.getName())

console.log(yigit)
console.log(yigit.calculateAge())
console.log(yigit.getName())

console.log(emel.hasOwnProperty('name')); //true doner cunku asıl object icinde
console.log(emel.hasOwnProperty('lastName')); //false doner cunku asıl object (constructor) icinde degil prototype icindedir

console.log(emel.lastName); //Turan
console.log(yigit.lastName); //Turan

console.log("*******************");

//---------------------------------

//! Object.Create ile object'den object olusturma (Dikkat!! Constructor degil object'den object olusturduk)

let personProto = {
    calculateAge: function(){
        return 2022-this.yearOfBirth;
    }
}

let yasin = Object.create(personProto); // bos object olusturdu ama protype'ı personProto'dur

yasin.name = 'yasin';
yasin.yearOfBirth = 1989;
yasin.job = 'student';

let ayse = Object.create(personProto, {
    name : {value: 'ayse'},
    yearOfBirth : {value:1990},
    job : {value : 'banker'}
});

console.log(ayse)
console.log(ayse.calculateAge())

console.log(yasin)
console.log(yasin.calculateAge())

console.log("*******************");
//---------------------------------------

//! Bir object constroctor'den baska bir object constructor'a  kalıtım yapma durumunu inceleyelim.(PROTOTYPAL INHERITANCE)

let Individual = function(name ,yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Individual.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth;
}

//ikinci constructor'ımı tanımladım. Bu oncekinden inherit yapacak
let Teacher = function(name,yearOfBirth,job,subject){
    Individual.call(this, name,yearOfBirth ,job); // this ---> Teacher objesidir. Aktaracagım property'leri sonraına yazdım.
    this.subject = subject;
}

//? Inherit the "Individual" prototype (methods etc.)
Teacher.prototype = Object.create(Individual.prototype); // burada Individual prototype'ını Teacher prototype'ı yaptı ama Teacher.prototype.contructor hala Individual constructor olarak görünmektedir Yani aktarım olurken constructor'da aktarılmıs burada. Bunu duzeltmek icin tekrar Teacher constructor'ını set ediyorum.(alt satır) 
//? Set Teacher constructor
Teacher.prototype.constructor = Teacher;

//burada tanımlanan method Teacher'ın altında yer alırken calculateAge() methodu Indiviual'da tanımlandıgı icin onun altında yer alır.(bunları browser consol kısmından gorebiliriz ancak)
Teacher.prototype.greeting = function(){
    return 'hello my name is '+ this.name;
}

//?obje instance aldık
let fatma = new Teacher("fatma", 1989, "teacher", "math");
console.log(fatma)
console.log(fatma.calculateAge())


console.log("*******************");
//--------------------------------------------------------
//* BUILT-IN CONSTRUCTORS

//String
let str1 = 'Yasin';
let str2 = new String('Yasin');

console.log(str1)
console.log(typeof str1); //string
console.log(str2);
console.log(typeof str2);//object

//Built-in Constructor'a method tanımladik
String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}

console.log("yasin".repeat(2))


//Number
let num1 = 10;
let num2 = new Number(10)

// Boolean
let bool1 = true;
let bool2 = new Boolean(true)

//Object
let obj1 = {
    name : "yasin",
}

let obj2 = new Object({
  name: "yasin",
});

//Array
let arr1 = ['ada' , 'yigit' , 'sena' , 'cinar'];
let arr2 = new Array("ada", "yigit", "sena", "cinar");

// Array.prototype.remove'dan null geliyorsa methodu olusturduk.Sonradan remove methodu eklenirse || 'den onceki kısmı esitleyip icra eder.
Array.prototype.remove = Array.prototype.remove || function(member){
    let index = this.indexOf(member);

    if(index>-1){
        this.splice(index,1)
    }
    return this;
}

console.log(arr1.remove('sena'));