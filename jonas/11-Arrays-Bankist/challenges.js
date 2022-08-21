'use strict'

//CHALLENGE-1
/*
const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice(); //shallow copy olusturuduk
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogsKate);

    dogs.forEach(function(dog,i){
        if(dog>=3){
            console.log(`Dog number ${i+1} is an adult, and ,s ${dog} years old`)
        }else{
            console.log(`Dog number ${i+1} is still puppy!!`)
        }
    })
}

checkDogs([3,5,2,12,7] , [4,1,15,8,3])
*/

//CHALLENGE-2
/*
const data1 = [5, 2, 4, 1, 15, 8, 3]
const data2 = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(function(age){
        if(age <= 2){
            return 2 * age;
        }else{
            return 16 + (age * 4);
        }
    })

    const filteredHumanAges = humanAges.filter(age => age >= 18);

    const avgHumanAges = filteredHumanAges.reduce((acc,age) => acc + age, 0) / filteredHumanAges.length;
    
    console.log(avgHumanAges)
}

calcAverageHumanAge(data1)
calcAverageHumanAge(data2)
*/

/*
//CHALLENGE-3
//Rewrite Challenge-2
const calcAverageHumanAge = ages => ages.map(age => (age <= 2 ? 2*age : 16+age*4)).filter(age => age >= 18).reduce((acc,age,i,arr) => acc + age/arr.length , 0)

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
console.log(avg1)
*/

// CHALLENGE-4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

//Task-1
dogs.forEach(function(dog){
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
})

//Task-2
const dogSarah = dogs.reduce((acc , dog)  =>{ 
    dog.owners.includes('Sarah') ? acc = dog : {} 
    return acc;
} , {weight: 0 , curFood: 0 , owners : 0 , recommendedFood : 0} )

//const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
//console.log(dogSarah)
console.log(`Sarah's dog eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}`)


//Task-3
// let [ownersEatTooMuch , ownersEatTooLittle] = [[], []];

// dogs.forEach((dog, i , arr )=> {
//     if(dog.curFood > dog.recommendedFood){
//         ownersEatTooMuch.push(dog.owners) 
//     }else if(dog.curFood < dog.recommendedFood){
//         ownersEatTooLittle.push(dog.owners)
//     }
// })

// ownersEatTooLittle = ownersEatTooLittle.flat();
// ownersEatTooMuch = ownersEatTooMuch.flat();

//Kısa YOl
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle)

//Task-4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`)

//Task-5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood))

//Task-6
const chekEatingOK = dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood *
    1.10)

console.log(dogs.some(chekEatingOK))

//Task-7
const dogsOK = dogs.filter(chekEatingOK)
console.log(dogsOK)

//Task-8
const dogsSorted = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted)
 