'use strict'

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);


//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; //burada jessica objesinin de lastName'i Davis olur.Cunku call stack'te aynı heap adreslerini gosteriyorlar.
console.log('before marriage:', jessica);
console.log('after marriage', marriedJessica);//console.log('before marriage:', jessica) ile aynı sonucu alırız.
//marriedJessica = {} //objemiz const oldugu icin  bunu yapamayız.


//Copying Objects
const yasin = {
    firstName: 'yasin',
    lastName: 'sutoglu',
    age: 27,
    family: ['alice', 'bob'],
};


const yasinCopy = Object.assign({}, yasin); //bu Object.assign()'ı iki objecti merge etmek de kullanırız.
yasinCopy.lastName = 'Davis';
console.log('before change:', yasin);
console.log('after change', yasinCopy);//burada yasinCopy yeni obje adresini isaret ettiginden degisiklik asil objeyi etkilemedi.Yeni obje tanımlar gibi oldu ama property'leri kopyalandı.

//Object.assign() sadece yuzeysel copy eder.Yani object icindeki object'ler, degistirmek istesek de ikisinde de aynı kalır. Deep clone olayını ileriki konularda ogrenecegiz.
yasinCopy.family.push('Mary');
yasinCopy.family.push('Mark');

//asagıda ikisinde de family array'i yani baska deyisle objesi aynı gösterildi.
console.log('before change:', yasin);
console.log('after change', yasinCopy);








