/*
//Decleration
function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

const percentTurks = percentageOfWorld1(80);
console.log(`Turkey percentage is %${percentTurks}`)

//Expression
const percentageOfWorld2 = function(population){
    return (population/7900) * 100;
}

const percentGermans = percentageOfWorld2(90);
console.log(`Germany percentage is %${percentGermans}`)
*/

//////////////////////////////////////

//Arrow Function
/*
const percentageOfWorld3 = population => (population/7900) * 100

const percentFrench = percentageOfWorld3(65)
console.log(`France percentage is %${percentFrench}`) 
*/

////////////////
/*
//Funtions call other functions
const percentageOfWorld = peopleNumber => (peopleNumber/7900) * 100;


const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about %${ percentageOfWorld(population) } `
}
 
console.log(describePopulation('turkey', 85 ))
*/
///////////////////

//CHALLENGE
/*
const calcAverage = (score1, score2, score3) => { return (score1+score2+score3)/3 }

let scoreDolphins = calcAverage(85,54,41)
let scoreKoalas = calcAverage(23, 34, 29)

const checkWinner = function(avgDolphins,avgKoalas){

    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`)
    }else if(avgKoalas >= 2 *  avgDolphins){
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`)
    }else{
        console.log('No one wins')
    }

}

checkWinner(scoreDolphins, scoreKoalas)

scoreDolphins = calcAverage(65,34,41)
scoreKoalas = calcAverage(83, 64, 99)
checkWinner(scoreDolphins, scoreKoalas)
*/

///////////////////
/*
const myCountry = {
    country: 'turkey',
    capital: 'ankara',
    language: 'turkish',
    population: 80,
    neighbours: ['greece', 'bulgaria', 'syria' , 'persia' , 'azerbaijan']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry['population'] += 4;
myCountry.population -= 2;
console.log(myCountry.population)
*/

/////////////////////////////
/*
const myCountry = {
    country: 'turkey',
    capital: 'ankara',
    language: 'turkish',
    population: 80,
    neighbours: ['greece', 'bulgaria', 'syria' , 'persia' , 'azerbaijan'],

    describe: function(){
        return console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },

    checkIsIsland: function(){
        this.isIsland = (this.neighbours.length === 0) ? true : false;
        return this.isIsland;
    }
}

myCountry.describe();
myCountry.checkIsIsland();
*/
////////////////////////////

/*
//CHALLENGE
const person1 = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI : function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const person2 = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI : function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

if(person1.calcBMI() > person2.calcBMI()){
    console.log(`${person1.fullName}'s BMI (${person1.bmi}) is higher than ${person2.fullName}'s (${person2.bmi}) `)
}else{
    console.log(`${person2.fullName}'s BMI (${person2.bmi}) is higher than ${person1.fullName}'s (${person1.bmi}) `)
}
*/
///////////////////
/*
const percentageOfWorld = (population) => {return (population/7900) * 100};

const populasyon = [80 , 65 , 27 , 300]
const percentage = []; 

for(let i=0; i<populasyon.length ; i++){
    percentage.push(percentageOfWorld(populasyon[i]))
}
console.log(percentage)
*/

/////////////////////////////
/*
const listOfNeighbours = [ ['canada', 'mexico'] , ['spain'] , ['norway','sweden','russia'] ]

for(let i=0; i <listOfNeighbours.length ; i++){ 
    for(let j=0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}
*/
///////////////////////////

//CHALLENGE 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill){
    return (bill >= 50 && bill<=300) ? bill * 0.15 : bill* 0.2; 
}

for(let i=0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push( tip + bills[i] ); 
}
console.log(bills, tips, totals)

//Bonus kısım
function calcAverage(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){    
        sum += arr[i]
    }
   
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
