'use strict';

  //ES6 Object literals ucuncu ozellik.
  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 12,
      close: 22,
    },
    [`day-${2+2}`]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 12+12,
    },
};

  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 ADVANCED OBJECT LITERALS
    //Birincisi
    openingHours,
    //İkincisi-->method yazim sekli
    order(sIndex,mIndex){
      return [ this.starterMenu[sIndex] , this.mainMenu[mIndex] ]
    },
    //ucuncusu yukarıda


    orderPizza: function(mainIngredient, ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
  },

  }

// SHORT CIRCUTING (&& , ||)

//OR OPERATOR
//use ANY data type, return ANY data type, "short-circuiting"--> ilk deger truthy value ise, hemen o ilk degeri return eder.Eger ilk deger falsy ise ikinci operand(deger) donulur(o da falsy bile olsa).Birden fazla deger varsa sırası ile truthy degeri bulana kadar bakar.
console.log(3 || 'jonas') // 3 doner
console.log('' || 'jonas') //jonas
console.log(true || 0) //true doner
console.log(undefined || null) //null doner
console.log(undefined || 0 || '' || 'hello' || 23 || null) //hello doner

//Example
//restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10 ;
console.log(guests1)

const guests2 = restaurant.numGuests || 10 ;
console.log(guests2)


//AND OPERATOR

//OR operator'un tam tersi calısır.Falsy deger donmesini bulana kadar bakar.Bulamazsa en sondakini doner.
console.log(0 && 'Jonas') //0 doner
console.log(7 && 'jonas') //jonas doner
console.log('hello' && 23 && null && 'jonas'); //null doner

//Example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}
//AND kullanarak alternatifi
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 

//NULLISH COALESCING OPERATOR --> ??

const konuklar = restaurant.numGuests || 10 ;
console.log(konuklar); //10 doner

//nullish values: null and undefined (NOT 0 or '')
//burada OR gibi islevi var ama 0 ve '' da truthy gibi kabul ediliyor, null veya undefined olunca sonraki deger/lere bakıyor.
restaurant.numGuests = 0
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect) //0 doner

//LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'capri',
  //numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
}

//OR assaignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10; //numGuests 0'a esit olursa yine yanlıs deger donecek bize. o nedenle nullish assaignment operator kullanılır.
//rest2.numGuests ||= 10;

//nullish assaignment operator (null or undefined'da sonraki degere bakıyor)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assaignment operator
//rest1.owner = rest1.owner && '<Anonymous>'
//rest2.owner = rest2.owner && '<Anonymous>'
rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';


console.log(rest1); // numGuests:20 gosterir
console.log(rest2); // numGuests:10 gosterir





