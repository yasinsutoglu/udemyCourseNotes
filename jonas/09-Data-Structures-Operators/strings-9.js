'use strict'
//Stringler primitive oldugundan mutate edilemez. Bu methodlar stringlerin kendisini degistirmez. Yeni string olusur ve bunları da kullanmak istiyorsak degiskenlere atamalıyız.

//PART-1
const airline = 'TAP Air Portugal';
const plane = 'A320'

/*
//Index'teki harfi bulma
console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);

//string length bulma
console.log(airline.length);
console.log('B737'.length);

//harfin indexini bulma
console.log(airline.indexOf('r')); //ilk 'r'ın yerini doner
console.log(airline.lastIndexOf('r')); //son 'r'ın yerini doner
console.log(airline.indexOf('Portugal')) // bize P'nin yerini dondu
console.log(airline.indexOf('portugal')) // boyle bir kelime olmadıgından -1 doner

//Extract part of a string --> slice()
console.log(airline.slice(4)); // 4 -> baslangıc parametresi. Bitisi vermezsek sonuna kadar alır.
console.log(airline.slice(4,7)); // 'Air' dondu. 7 son oldugu icin onu almaz ama 4 dahildir.

//ilk ve son kelimeyi cıkarma
console.log(airline.slice(0,airline.indexOf(' '))); //ilk kelime
console.log(airline.slice(airline.indexOf(' ') + 1 )); // son kelime

console.log(airline.slice(-2)); //sondan geriye 2 gidip almaya baslar
console.log(airline.slice(1, -1)); //'AP Air Portuga' oldu

//Example - B and E are middle seats
const checkMiddleSeat = function(seat){    
    const s = seat.slice(-1); //son karakteri aldık
    if (s === 'B' || s === 'E')
    console.log('Bad Luck!!')
    else console.log('Lucky!')
}

checkMiddleSeat('11B')
checkMiddleSeat('22C')

//Theory -> arka planda js engine string'i objeye cevirir sonra islem yapıp tekrar string'e cevirir
console.log(new String('jonas'));
console.log(typeof new String('jonas')); //object doner
console.log(typeof new String('jonas').slice(1)); //string doner

*/

//PART-2

/*
console.log(airline.toLowerCase());//kücük harfe doner
console.log(airline.toUpperCase());//buyuk harfe doner

//Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); //ilk harf büyük sonrası küçük
console.log(passengerCorrect)

//Comparing emails
const email = 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.Io \n'

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();//üstteki iki satirin kısayolu chain yapmak
console.log(normalizedEmail)
console.log(email===normalizedEmail)

//Replacing ->Replace()
 const priceGB = '288,97€'
 const priceUS = priceGB.replace('€', '$').replace(',' , '.');
 console.log(priceUS)

 //tüm kelimeyi degistirme
 const  announcement = 'All passengers come to boarding door 23.Boarding door 23!';
 console.log(announcement.replace('door', 'gate'));//buldugu ilk kelimeyi degistirdi
 console.log(announcement.replaceAll('door', 'gate'));//buldugu tüm kelimeleri degistirdi
 console.log(announcement.replace(/door/g, 'gate')); // yine buldugu tüm doorları gate yaptı. Regular expression kullandık.

 //Booleans
const planeMy = 'Airbus A320neo';
console.log(planeMy.includes('A320')); //true doner
console.log(planeMy.includes('Boeing')); //false
console.log(planeMy.startsWith('Airb')); //true

if(planeMy.startsWith('Airbus') && planeMy.endsWith('neo')){
    console.log('Part of the New Airbus family');
}

//Practice exercise
const checkBaggage = function (items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    }else{
        console.log('Welcome onboard!');
    }
}

checkBaggage('I have a laptop, some Food and a pocket of KNife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection')
*/

//PART-3

//Split()--> icersindeki string degere gore buyuk stringi parcalar ve array haline getirir.
//Join() --> split'in tam tersi icersindeki string deger ile birlestirir.

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName , lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.' , firstName , lastName.toUpperCase()].join(' ');
console.log(newName)

//Good Exercise -- fonksyiona verilen kücük harfli ismin bas harflerini büyütmek
const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];
    
    for(const n of names){
        //namesUpper.push(n[0].toUpperCase() + n.slice(1)) //yöntem-1
        namesUpper.push(n.replace(n[0] , n[0].toUpperCase())) //yontem-2
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis'); //"Jessica Ann Smith Davis" cıktısı olur
capitalizeName('jonas schmedtmann')

//Padding --> to add a number of characters to the string until the string has a certain desired length.
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'))
console.log('Jonas'.padStart(20, '+').padEnd(30, '+')) //+++++++++++++++Jonas++++++++++

//Exercise - kredi kartları girisini **********2328 tarzı gosterme
const maskCreditCard = function(number){
    const str = number + ''; //burada sayıyı stringe forcing yaparak cevirdik
    const last = str.slice(-4) //son 4 rakamı aldık
    return last.padStart(str.length , '*')
} 

console.log(maskCreditCard(124124523)) // *****4523
console.log(maskCreditCard(12456487784124523)) //*************4524
console.log(maskCreditCard('1234564353456487784124523')) //*********************4523

//Repeat() --> string'i aldıgı parametre sayısı kadar tekrar eder
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)} `)
}

planesInLine(9)
planesInLine(6)



