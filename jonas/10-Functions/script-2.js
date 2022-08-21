'use strict'
//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS --> a function that accpets other functions as an input case

const oneWord = function (str){
    return str.replace(/ /g , '').toLowerCase(); // '/ /g' --> boslugun regular expression'ı
}

const upperFirstWord = function (str){
    const [first, ...others] = str.split(' '); //spreadingin tersini kullandık (rest pattern)
    return [first.toUpperCase(), ...others].join(' '); //sprading  kullandık
}

//Higher-order Function -> burada transformer higher-order function'dır. fn'ye parametre girilen callback function'dir.
const transformer = function (str, fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`) //parametre olarak girdigimiz fonksiyona str parametresini gectik

    console.log(`Transformed by: ${fn.name}`)  //fonksiyonlar da obje oldugu icin name property'sini kullanabiliriz
}

//asagıda transformer fonksiyonuna parametre olarak girilen  upperFirstWord ve oneWord fonksiyonlarına "CALLBACK FUNCTION" denilir. Fonksiyonların parametre gecilebilmesi ozelliginden faydalanarak value gibi parametre gecisi yapılır. Yani value gibi parametre olarak gecmeden kasıt, fonksiyonu parametre olarak gecerken fonksiyonu cagırma yaptıgımız gibi -oneWord()- seklinde yazılmaz.
transformer('Javascript is the best!' , upperFirstWord) 
transformer('Javascript is the best!' , oneWord) 


//Callback kullanımı JS kodu yazarken daha okunaklı kod yazmaya ve abstraction yapabilmeye yarar.
//Abstraction means that we hide the detail of some code implementation because we don't really care about all that detail. And this allows us to think about problems at a higher more abstract level.

//JS uses callbacks all the time
const high5 = function () {
    console.log('🙋‍♂️')
}

document.body.addEventListener('click', high5); // addEventListener higher-order function'dır.
['jonas', 'martha', 'adam'].forEach(high5)

//-------------------------------------------------------------------------

//FUNCTIONS RETURNING FUNCTIONS
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');//burada yukarıdaki greet() fonksyionu, bir fonksiyon return ediyor ve biz de bu fonksiyonu greetHey adında bir fonksiyon olarak tanımlıyoruz.

greeterHey('Jonas') //'Hey Jonas' döndü
greeterHey('Steven') // 'Hey Steven' döndü

greet('Hello')('yasin') //'Hello yasin' döndü

//Arrow function ile bu durumu yazacak olursak;
const greetArr = greeting => name => console.log(`${greeting} ${name}`)//hatırlarsak tek satır kod icin 'return' yazmıyorduk. Tek parametre icin de () koymuyorduk.
greetArr('Hi')('Yasin') //'Hi Yasin' döner bize.
