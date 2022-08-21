'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output)

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            //creating NEW variable with same name as outer scope's variable
            const firstName = 'steven' //alt satırda bu gecerlidir, gloabal scope'taki ezildi.

            //reassingning outer scope's variable
            output = 'NEW OUTPUT'; //outer scope'taki degiskenin icerigini degistirdik, bu scope dısında da artık bu gecerlidir.

            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str)

            function add(a,b){
                return a + b;
            }

           
        }
        console.log(millenial) // calisir, cunku "var" bir function scoped variable'dır. let ve const'dan farklidir.
        //console.log(add(2,3)); //hata verir cunkü function'lar da block scoped variable gibidir.
        console.log(output)
    }

    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age)
//printAge(); //Reference Error: not defined
