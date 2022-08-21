'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
    },

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

//Rest Pattern uses the same syntax with spread operator(...) to collect multiple elements and condense them into an array.

// 1)DESTRUCTURING

//SPREAD,  because on RIGHT side of '='
const arr = [1, 2, ...[3,4]]

//REST, because on LEFT side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [p, ,r , ...restFood] = [...restaurant.mainMenu, ...restaurant.starterMenu,]
console.log(p, r, restFood)

//Rest element must be the last side
//One rest element should be used in destructuring assignments

//Rest use in ObJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays) //thu: ve fri: olanları yakaladık.

// 2) FUNCTIONS

const add = function(...numbers){
    let sum = 0 ;
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i]
    };
    console.log(sum);
}

add(2,3)
add(5,3,7,2)
add(8,2,5,3,2,1,4)

const x = [23,5,6,8];
add(...x)

//method icerisinde kullanma
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); // otherIngredients = [] olur.
