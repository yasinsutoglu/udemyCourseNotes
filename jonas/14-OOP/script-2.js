'use strict'

//2nd WAY --> ES6 CLASSES

//Classes are just a special type of functions.
//1.Classes are not hoisted.
//2. Just like functions, classes are also first-class citizens. it means that we can pass them into functions and also return them from functions. And as I mentioned before, that is because classes are really just a special kind of function behind the scenes.
//3.the body of a class is always executed in strict mode. Classes are executed in strict mode. And so even if we didn't activate it for our entire script, all the code that is in the class will be executed in strict mode.

//Class Expression
//const PersonCl = class{}

//Class Decleration
class PersonCl{
    constructor(fullName , birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;//the this keyword here inside of the constructor will also be set to the newly created empty object.
    }

    //Instance Methods --> all of these methods that we write in the class,so outside of the constructor will be on the prototype of the objects.
    //Methods will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear)
    }

    greet(){
        console.log(`Hey ${this.fullName}`)
    }

    //getter ve setter class icinde kullanlabiliniyor.So you see that the getter is indeed just like any other regular method that we set on the prototype.
    get age() {
        return 2037-this.birthYear;
    }

    //Set a property that already exist. property ismi aynı olmasına dikkat et!
    set fullName(name){
        if(name.includes(' ')) this._fullName = name; //burada constructor'daki ile cakıstıgı icin _fullName yazdık. 
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }

    //Static Method olusturma
    static hey(){
        console.log('Hey there🖐')
        console.log(this)
    }
}

const jessica = new PersonCl('Jessica Davis' , 1996)
console.log(jessica) 


jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype) //true doner

//manually added method
// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`)
// }

console.log('Getter ile yazılan:' , jessica.fullName)
console.log(jessica.age) //41 dondu. // getter kullandık

jessica.greet();

PersonCl.hey() //this keyword points entire class in here. ***Keep in mind that these static methods are not available on the instances, and sometimes they are still useful to implement some kind of helper function about a class or about a constructor function.***


//GETTERS & SETTERS 
//every object in JavaScript can have setter and getter properties. we call these special properties assessor properties, while the more normal properties are called data properties.
//So, getters and setters are basically functions that get and set a value so just as the name says, but on the outside they still look like regular properties

//normal bir obje olusturalım
const account = {
    owner: 'Jonas',
    movements: [200 , 530 , 120 , 300],

    get latest(){
        return this.movements.slice(-1).pop()
    },

    //here we can basically add a new movement to the array. And any setter method needs to have exactly one parameter.
    set latest(mov){
        this.movements.push(mov)
    }
}

console.log(account.latest) // 300 doner.  Getter'ı property cagırır gibi kullanıyoruz dikkat edersek.

account.latest = 50; //Setter'ı property'e atama yapar gibi kullanıyoruz dikkat edersek.
console.log(account.movements) //[200 , 530 , 120 , 300, 50]



//STATIC METHODS

const Person = function(firstName, birthYear){
    
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const jonas = new Person('Jonas' , 1991);

//define static methods
Person.hey = function(){
    console.log('Hey there🖐')
    console.log('static methods (this): ', this) //this --> essentially the entire constructor function here. And the reason for that is because, Person.hey() is exactly the object that is calling the method.
}

Person.hey(); //"Hey there🖐"i gosterdi bize.
//jonas.hey() // burada hata verir cunku "hey" method'u daha onceki yaptıgımız gibi Person.prototype uzerine tanımlı degil,dolayısıyla Jonas object inheritance yapamadı. "hey" methodu  -Array.from- gibi sadece Person constructor'ına tanımlı methoddur. 

/////////////////////////////////////

// 3rd WAY --> -OBJECT.CRATE-
//diger iki yontemden daha farklı calısır. We can use Object.create to essentially manually set the prototype of an object, to any other object that we want.

//object literal tanımlar gibi tanımladık dikkat!!
const PersonProto = { 
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

//With Object.create, we can set the prototype of objects manually to any object that we want.
const steven = Object.create(PersonProto) //here we pass in the object that we want to be the prototype of the new object. So that's PersonProto. And so this will now return a brand new object, that is linked to the prototype that we passed in here. 
console.log(steven) //So Steven here is right now an empty object. And it will be linked to this PersonProto object, which will be its prototype.

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven)

steven.calcAge(); //35 dondu bize

console.log(steven.__proto__ === PersonProto) //true doner bize

//Baska Ornek
const sarah = Object.create(PersonProto);
sarah.init('Sarah' , 1979)

console.log(sarah)
sarah.calcAge() //58 doner

//CHALLENGE-2

class CarCl{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}


const ford = new CarCl('Ford', 120)
console.log(ford.speedUS); //75 dondurur

ford.accelerate(); //Ford is going at 130 km/h
ford.brake(); //Ford is going at 125 km/h

ford.speedUS = 50;
console.log(ford) // CarCl {make: 'Ford', speed: 80}