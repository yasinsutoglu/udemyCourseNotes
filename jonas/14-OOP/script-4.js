'use strict'

//ENCAPSULATION
//there are two big reasons why we need encapsulation and data privacy. So first it is to prevent code from outside of a class to accidentally manipulate or data inside the class. The second reason is that when we expose only a small interface so a small API consisting only of a few public methods then we can change all the other internal methods with more confidence. And so therefore our code will not break when we do internal changes.

//1)Public fileds - 2)Private fields - 3)Public Methods - 4)Private Methods , (There are also the static versions)

//CLASS EXAMPLE
class Account {
    // 1) Public Fields (on instances) --> these public fields here are gonna be present on all the instances that we are creating through the class. So they are not on the prototype. These public fields they are also referenceable via the "this" keyword.
    locale = navigator.language;
    
    // 2) Private Fields (on instances not on prototype)--> properties are really truly not accessible from the outside.
    #movements = [];
    #pin;

    constructor(owner, currency , pin){
        this.owner = owner;
        this.currency = currency;

        //protected property
        //this._pin = pin;
        this.#pin = pin;
        //this._movements = []; //encapsulation icin _movements seklinde yazdık.Bu conventional kullanımı gorunce private oldugu anlasılıp dokunulmuyor baskası tarafından.

        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`)
    }

    // 3) Public Methods - Public interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val)
        return this;  //chaining yapabilmek icin undefined donmesini onlemek icin kullanıırız.(return this --> object)
    }

    withdraw(val){
        this.deposit(-val)
        return this;
    }
    
    //protected method
    _approveLoan(val){ 
        return true;
    }

    requestLoan(val){
        //if(this.#approveLoan(val)){
        if(this._approveLoan(val)){
            this.deposit(val)
            console.log(`Loan approved`)
        }
        
        return this;
    }

    // 4) Private Methods    
    // #approveLoan(val){ 
    //     return true;
    // }
}

const acc1 = new Account('Jonas' , 'EUR' , 1111);


//acc1._movements.push(250) // bu yazım ile kullanınca property'e ulasılabiliniyordu. #movements kullanınca ulasılmaz oldu.
//acc1._movements.push(-140)
acc1.deposit(250);
acc1.withdraw(-140);

acc1.requestLoan(1000) // "Loan approved" gorduk ama burada approveLoan() methodu abstraction yapıldı. Dısarıdan requestLoan() methodu uzerinden gorunmez.

console.log(acc1.getMovements())  // [250, 140, 1000]
console.log(acc1);
console.log(acc1.pin); //undefined doner. Cunku protected halde.

//console.log(acc1.#movements)//Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class --> cunku private'a dısarıdan erismeye calıstım.

//CHAINING METHODS --> JS'in built-in methodlarında oldugu gibi kendi yazdıgımız methodları da chain yapabiliriz.
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(200)
console.log(acc1.getMovements()) // [250, 140, 1000, 300, 500, -35, 2500, -200] yukarıda chaining ile eklenenler de yer aldı movements arrayinde.

// CHALLENGE - 4 

//parent class
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
        return this;
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
};

//child class
class EVCl extends CarCl{
    #charge;

    constructor(make,speed,charge){
        super(make,speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }

    accelerate(){
        this.speed +=20;
        this.#charge--;
        console.log(console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}`))
        return this;
    }
};

const rivian = new EVCl('Rivian' , 120 , 23)
console.log(rivian)

rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS) // getter'da parent'dan inherit edilebiliyor.