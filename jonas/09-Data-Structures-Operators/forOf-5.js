'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  }

  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  for (const item of menu) console.log(item) // bu sekilde {} olmadan da yazilabiliyor.Ayrıca continue ve break komutları da gecerlidir. Bunun handicapı current Index'e kolayca ulasımımız yok. current element'lere basitce ulasıyoruz.Asagıda buna bulunan cozumler var.

  for (const item of menu.entries()){ //bize item artık bir array(index, deger) olarak geliyor. 
        //console.log(item)
        console.log(`${item[0]+1}: ${item[1]}`)
  }

  //alternatif; destructing uygulanarak yapılan yontem
  for (const [index, el] of menu.entries()){
    console.log(`${index+1}: ${el}`);
  }
