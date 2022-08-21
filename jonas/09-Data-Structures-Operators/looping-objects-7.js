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
    
    //obje methodunun bu sekilde de yazımı mevcut. Daha kısaltılmıs bir yazımdır.
    order(sIndex,mIndex){
      return [ this.starterMenu[sIndex] , this.mainMenu[mIndex] ]
    },



    orderPizza: function(mainIngredient, ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
  },

  }

  //NORMALDE OBJE'LERDE LOOP YAPABİLME YOKTU FAKAT BİZ BUNU INDIRECT OLARAK YAPACAGIZ.  


  //Property(key) NAMES
const properties = Object.keys(openingHours);
console.log(properties)

let openStr = `we are open on ${properties.length} days: `;

  for(const day of properties){
      openStr += `${day}, `
  }

  console.log(openStr)

  //Property VALUES
const values = Object.values(openingHours);
console.log(values)



//ENTIRE OBJECT--> key(property names) + values
const entries = Object.entries(openingHours);
console.log(entries)

for(const [key,{open , close}] of entries){ // burada values kısmı object oldugundan destructuring yaparak aldık.Eger value object olmasaydı [key ,  value diye alabilirdik]
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}