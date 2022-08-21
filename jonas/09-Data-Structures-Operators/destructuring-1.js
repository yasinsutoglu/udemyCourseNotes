'use strict'

//Destructuring is to break a complex data structure down into a smaller data structure like a variable.

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

    order: function(starterIndex, mainIndex){
        return [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ];
    },

    orderDelivery : function( {starterIndex=1, mainIndex=0, time='20:00', address} ) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
};

//ARRAY DESTRUCTURING

//destructuring yapmadan nasıl yaparız?
 const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//destructuring ile yapılıs
const [x, y, z] = arr;
console.log(x, y, z)
//console.log(arr); //orginal array etkilenmez

const [first ,second] = restaurant.categories;
console.log(first, second);

const [ilk, ,ucuncu] = restaurant.categories;
console.log(ilk,ucuncu)

//swtiching items in the array
let [main, ,secondary] = restaurant.categories; // categories'den 1 ve 3. elemanı aldık
[main, secondary] = [secondary, main] // elemanların deger degisimi yapıldı.
console.log(main , secondary)

//switching variables without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;

//Receive 2 return values from a function
const [starter , mainCourse] = restaurant.order(2,1);
console.log(starter , mainCourse);


//destructuring in nested arrays
const nested = [2, 4, [5, 6]];
//const [i, ,j] = nested;
const [i, , [j, k]] = nested;
console.log(i,j,k); // i=2 , j=5 , k=6 degerleri gorulur

// Default values
//const [p,q,r]  = [8,9] //burada r --> undefined olur
const [p=1 , q=1, r=1] = [8 , 9];
console.log(p,q,r) // p=8 , q=9 , r=1 degerleri gorulur


//OBJECT DESTURCTURING

// obje property isimleriyle direkt destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//property name'leri degistirerek destructuring
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags)

//olmayan bir property'e default value vererek destructuring
const {menu = [] , starterMenu: starters = []} = restaurant; //burada menu'ye default deger verdik yoksa undefined idi
console.log(menu, starters); // burada --> menu = [] , starters = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Mutating variables
 let a = 111;
 let b = 999;
 const obj = {a:23, b:7, c:14};
 ({a,b} = obj); // () parantezleri kullanmasaydık "=" icin hata veriyordu.
 console.log(a,b) // 23 , 7 gostermesi beklenir.
 
 //Nested Objects
//  const { fri } = openingHours;
//  console.log(fri)
const { fri:{open:o , close:c}, } = restaurant.openingHours;
console.log('opening:', o, 'closing:', c)

//burada obje methodunda destructing yaptık. Dikkat edersek method'da obje'yi parametre verirken default degerler ve bir sıra ile vermistik ama methodu cagırırken parametre gecisimiz aynı sıra ile olmayabilir.
restaurant.orderDelivery({time:'22:30', address:'Via del Sole,21' , mainIndex:2, starterIndex:2,});

//burada da method cagırırken obje parametresini gecerken vermedigimiz property'ler yukarıda methodu tanımlarken yazdıgımız default degerlerini alıyor
restaurant.orderDelivery({address:'Villa Maria,23', starterIndex:2,}); // time ve mainIndex default degerleri kullandı.