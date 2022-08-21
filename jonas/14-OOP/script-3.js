'use strict'

//Inheritance Between "Classes":  Constructor Functions
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

//baska constrcutor
const Student = function (firstName, birthYear, course){
    Person.call(this , firstName , birthYear); // burada "call(this, _ , _)" methoduyla parent constructorı child'a aktarmıs olduk. Parent class'ı cagırmıs olduk yani buraya.
    this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype) //With this, the Student.prototype object is now an object that inherits from Person.prototype , Now we have to create this connection here before we add any more methods to the prototype object of student. And that's because Object.create, will return an empty object.

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike' , 2020 , 'CS')
mike.introduce(); //"My name is Mike and I study CS"
mike.calcAge() // Linking prototypes yaptıktan sonra Student classı Person classından calcAge methodunu inheritance yapmıs oldu ve burada bize 17'yi dondu.

console.log(mike.__proto__) //console'da incele
console.log(mike.__proto__.__proto__) //console'da incele

console.log(mike instanceof Student) //true
console.log(mike instanceof Person)  //true
console.log(mike instanceof Object)  //true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor) //Burada Student gostermesini beklerdik Person dondu. Düzeltmesini bir üst satırda yaptık.

//CHALLENGE-3

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const EV = function(make, speed , charge){
    Car.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype) //linking prototypes

EV.prototype.chargeBattery = function(chargeTo){
   this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed +=20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`)
}

const tesla = new EV('Tesla' , 120 , 23)

tesla.chargeBattery(90)

tesla.brake();
tesla.accelerate(); //when there are two methods or properties with the same name in a prototype chain, then the first one that appears in the chain is the one that's gonna be used. So the same is true also for the scope chain.So with is basically, a child class can overwrite a method that inherited from the parent class.

console.log(tesla)

///////////////////////////////////////////////////////////////

//Inheritance Between "Classes": ES6 Classes

class PersonCl{
    constructor(fullName , birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Instance Methods
    calcAge(){
        console.log(2037 - this.birthYear)
    }

    greet(){
        console.log(`Hey ${this.firstName}`)
    }

    get age() {
        return 2037-this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name; 
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }

    //Static Method
    static hey(){
        console.log('Hey there🖐')
        console.log(this)
    }
}

//Inheriting from parent PersonCl
class StudentCl extends PersonCl{
    constructor(fullName, birthYear , course){
        //Always needs to happen first! Because if not, we can't use "this" keyword in that child class.
        super(fullName, birthYear) //super() is basically the constructor function of the parent class. PersonCl.call(this, _ , _) yapmıyoruz.
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    //overriding parent class method
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student. I feel more like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012 , 'CS')
martha.introduce();
martha.calcAge();


//////////////////////////////////////////////////////

//Inheritance Between "Classes" : Object.create

const PersonProto = { 
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto) //Burada PersonProto parent, StudentProto child class yaptık.

//StudentProto'ya init methodunu gecme ve overwrite etme
StudentProto.init = function (firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

//StudentProto'ya yeni method olusturma
StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto); //StudentProto'dan bir obje turettik
jay.init('Jay' , 2010 , 'Computer Science')
console.log(jay)

jay.introduce(); //StudentProto'ya ait methodu kullandık
jay.calcAge(); //PersonProto'dan inherit edilen methodu kullandık