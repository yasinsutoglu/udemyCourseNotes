'use strict'

//CLOSURES --> video ve slayt'ta daha acık anlatıyor.

//Closure tanımlanan birsey degildir. Duruma baglı kendiliginden otomatik ortaya cıkan birseydir.
//A function always has access to the variable environment of the execution context in which it was created,even after a that execution context is gone.
//The closure is then basically this variable environment attached to the function, exactly as it was at the time and place that the function was created.
const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking(); // secureBooking fonksiyonu burada bir kez kullanıldıktan sonra execution context'ten pop up ediliyor(atılıyor) ama booker() fonksiyonunu asagida birkac kez cagırdıgımızda her seferinde secureBooking'de yer alan passengerCount degiskenine hala ulastıgını goruyoruz. İste bu durumu CLOSURE kavramı ile acıklarız.

booker(); //1 passengers cıktısını gorduk.
booker(); //2 passengers cıktısını gorduk.
booker(); //3 passengers cıktısını gorduk.

console.dir(booker)// [[Scopes]] --> internal scope property'dir.  Kod ile ulasılamayan bir kısımdır.


//the Booker function has access to the passengerCount variable because it's basically defined in the scope in which the Booker function was actually created.So in a sense, the scope chain is actually preserved through the closure, even when a scope has already been destroyed because its execution context is gone. This means that even though the execution context has actually been destroyed, the variable environment somehow keeps living somewhere in the engine.
//To make it a bit more digestible, we can also say that thanks to the closure, a function does not lose connection to variables that existed at the function's birthplace.

// we cannot just reach into a closure and take variables from it. That's impossible because a closure is just an internal property of a function. We can observe that a closure happens because functions magically keep having access to variables that should no longer exist, but we cannot directly access these variables.

//EXAMPLE-1
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2)
    }
}


const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2)
    }
}

g();
f(); // 46 cıktısını goruruz
console.dir(f); // closure icerisinde "a" degiskenini goruruz

//Re-assigning f function
h();
f();
console.dir(f); // closure icerisinde "b" degiskeni oldugunu goruruz ve "a" degiskeni artık gorulemez. Cünkü f fonksiyonu re-assign edildi.

//EXAMPLE-2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    //setTimeout( callback_fonksiyon , milisecond olarak süre) --> belirtilen süre sonra callback_fonksiyonu isleten ozel bir fonksiyondur.
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`)
        console.log(`There are 3 groups , each with ${perGroup} passengers`)}, wait * 1000);

    console.log(`will start boarding in ${wait} seconds`);
}

const perGroup = 120; //Closure'ın scope chain'e üstünlügü olmasından oturu global scope'ta tanımlanan perGroup setTimeout'un callback fonksiyonu tarafından kullanılmadı, onun yerine boardPassenger fonksiyonu icinde tanımlanan perGroup degiskeni kullanıldı.

boardPassengers(180 , 3)
// Sırayla olan cıktı -->  1) will start boarding in 3 seconds 2) we are now boarding all 180 passengers  3)There are 3 groups , each with 60 passengers

//EXAMPLE-3
/*
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click' , function(){
        header.style.color = 'blue';
    })
})();
*/


