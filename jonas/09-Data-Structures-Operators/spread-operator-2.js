'use strict'


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    orderPasta: function(ing1,ing2,ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
}

//normal yoldan array expand etme
const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//(...) -->spread operator ile array expand etme
const newArr = [1 , 2 , ...arr];
console.log(newArr);

console.log(...newArr); //newArr arrayinin icindekileri tek tek cıkarıp gosterdi.Yoksa hepsini ayrı ayrı virgulle ayırarak yazmak gerekirdi, console.log(1,2,7,8,9) sekilnde.

//obje'nin prorpety'sinden faydalanarak yeni array olusturduk.
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

// shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];

//join more than 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu)

//ITERABLES --> arrays, strings, maps, sets. but NOT, objects. 
//spread operator can be used in iterables.

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters)

//spread operatoru; yeni bir array olusturacagımızda veya function'a value gececegimizde kullanabiliyoruz.
console.log(...str)

//real world example
// const ingredients = [ prompt('lets make pasta! Ingredient 1?'), prompt('Ingredient 2?') , prompt('Ingredient 3?') ]
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]) --> amele yontem
//restaurant.orderPasta(...ingredients)

//Objects
const newRest = {foundedIn: 1980,...restaurant, founder: 'Guiseppe'}
console.log(newRest)

//copy
const copyRestaurant = {...restaurant} //shallow copy the all property of the restaurant
copyRestaurant.name = 'Ristorante Roma';
console.log(copyRestaurant.name , restaurant.name)
