'use strict'

//Farazi webAPI'den gelen bilgi
const flights =`_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

//yukarıdaki düzensiz gelen bilgiyi asagidaki formata cevirme islemi yaptık
/*  ***🎈 Delayed Departure from FAO to TXL at (11h25)
    *************** Arrival from BRU to FAO at (11h45)
    *****🎈 Delayed Arrival from HEL to FAO at (12h05)
    ************* Departure from FAO to LIS at (12h30)
 */
const getCode = (str) => { return str.slice(0,3).toUpperCase()}

for(const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';') //destructuring kullandik

    const output = `${type.startsWith('_Delayed') ? '🎈' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} at (${time.replace(':', 'h')})`.padStart(50,'*') // padStart'tan '*' silersem default bosluk ekler

    console.log(output)
}