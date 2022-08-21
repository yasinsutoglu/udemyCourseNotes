'use strict'

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];

  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
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
    
    openingHours,
    
    order(sIndex,mIndex){
      return [ this.starterMenu[sIndex] , this.mainMenu[mIndex] ]
    },



    orderPizza: function(mainIngredient, ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
  },

  }

  //console.log(restaurant.openingHours.mon.open) //Error veriyor.Optional Chaining'i beklenmedik böyle hataları almaktan kacınmak icin kullanıyoruz.

if(restaurant.openingHours && restaurant.openingHours.mon) 
  console.log(restaurant.openingHours.mon.open)

//With Optinal Chaining 
console.log(restaurant.openingHours.mon?.open); // (?.)'den oncesi null veya undefined degilse kod tümüyle işler, yoksa undefined doner.Burada "undefined" doner. NULLISH mantıgına cok benzer.

console.log(restaurant.openingHours?.fri?.close); //burada da openingHours var mı diye öncesinde sorgulamıs olduk.Yani birden fazla sorguyu tek  bir satırda gerceklestirdik.

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];

for(const i of days) {
  const open = restaurant.openingHours[i]?.open ?? 'closed'; // burada openinHours ilgili day icin yoksa open = 'closed' olur
  console.log(`On ${i}, we open at ${open}`)
}

// Optional Chaining for Methods
console.log(restaurant.order?.(0,1) ?? 'method does not exist'); //burada boyle bir method var oldugu icin calısır

console.log(restaurant.orderRisotto?.(0,1) ?? 'method does not exist'); // burada boyle bir method olmadıgından yani durumumuz undefined oldugundan 'method does not exist' calısır.

// Optional Chaining for Arrays
const users =  [
  {
  name: 'yasin', 
  email: 'hello@gmail.com'
},
{
  name: 'jonas', 
  email: 'jonas@gmail.com'
},
];

console.log(users[1]?.name ?? 'user array empty'); // jonas basar ekrana
console.log(users[2]?.name ?? 'user array empty'); //user array empty basar ekrana