'use strict';

//DEFAULT PARAMETERS
const bookings = [];

const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
//ES5 zamanında alttaki gibidir;
//numPassengers = numPassengers || 1;
//price = price || 199;

const booking = {
    flightNum,
    numPassengers,
    price,
}

console.log(booking)
bookings.push(booking)
};

createBooking('LH123') // vermedigimiz degerler parametrede tanımlanan default degerleri aldı
createBooking('LH123',2,800) // default degerleri override ettik
createBooking('MM12', 5)
createBooking('HH124', undefined, 100) //undefined verdigimiz yerde default parametre gecerli oluyor. {flightNum: 'HH124', numPassengers: 1, price: 100}