'use strict';

//GLOABAL SCOPE
console.log(this)

//REGULAR FUNC.
const calcAge  = function(birthYear){
    console.log(2037-birthYear);
    console.log(this); //this : undefined doner
}

calcAge(1991)

//ARROW FUNC.
const calcAgeArrow = (birthYear) =>{
    console.log(2037-birthYear);
    console.log(this); // this: window doner (cunkü arrow func. parent scope'u => global scope)
}

calcAgeArrow(1991)

//METHOD
const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this) //jonas object'i doner
        console.log(2037-this.year)
    }
}

jonas.calcAge()

//Example

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this keyword burada matilda object'ini isaret eder oldu.Yukarıda jonas object'i methodu cagirdigi icin onu da orada isaret etmisti.

//Altta obje'nin methodunu f fonksiyonu olarak tanımladık ve f fonksiyonunu cagırdık. Regular func. oldugundan this keyword de undefined dondu ve hata verdi.
const f = jonas.calcAge;
f();