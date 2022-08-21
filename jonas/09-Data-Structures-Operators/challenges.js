'use strict'

//CHALLENGE-1
/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};
*/
/*
//1.
const [players1, players2] = game.players;

//2.
const [gk, ...fieldPlayers] = players1;

//3.
const allPlayers = [...players1, ...players2];

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];


//5.Önemli
const {odds: {team1, x:draw , team2}} = game;
console.log(team1, draw, team2)

//6.
const printGoals = function(...players){
    console.log(players)
    console.log(`${players.length} goals were scored`)
       
};

printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team1 is more likely to win')
team1 > team2 && console.log('Team2 is more likely to win')
*/

//CHALLENGE-2
/*
//1.
console.log(game.scored)

for(const [index,value] of game.scored.entries()){
    console.log(`Goal.${index+1}: ${value}`)
}

//2.
const values = Object.values(game.odds)

let sum = 0;
let length = values.length;

for(const  x of values){
    sum += x;
}
const avg = sum/length;
console.log('avg: ', avg)

//3.
const entries = Object.entries(game.odds)

for(let [key,value] of entries){
     key === 'x' ? console.log(`Odd of draw : ${value}`) : console.log(`Odd of victory ${game[key]} : ${value}`);
}

//Bonus
const scorers = {}

for(const player of game.scored){
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
}

const degerler = Object.entries(scorers)

for(const [key,value] of degerler){
    console.log(`${key} : ${value}`)
}
*/

//CHALLENGE-3
/*
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);

//task1
const events = new Set();
 for (const value of [...gameEvents.values()]){
     events.add(value)
 }
console.log(events)

//task1 - yöntem2
//const events = [...new Set(gameEvents.values())] 
//console.log(events)

//task2
//gameEvents.delete(64)
//console.log(gameEvents)

//task3
const actions = [];
for(const key of [...gameEvents.keys()]){
    if(key <= 90) actions.push(key)  
}
console.log(`An event happend, on average, every ${90/actions.length} minutes`)

//task3 - 2.yontem
const time = [...gameEvents.keys()].pop();
console.log(`An event happend, on average, every ${time/gameEvents.size} minutes`)

//task4
 for(const [min,event] of [...gameEvents]){
    const half = min <= 45 ? 'FIRST' : 'SECOND'
    console.log(`[${half} HALF] ${min}: ${event}`) 
 }
 */

//CHALLENGE-4
//Butonsuz Yontem
/*
document.body.append(document.createElement('textarea'));
;

const text = `underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure`

const camelCase = function(text){
    const textArray = text.split('\n')
    const lastArr = [];
    let newArr;
    let arr;
    
    for(const t of textArray){
        arr = t.split('_')
        arr[0] = arr[0].toLowerCase();
        arr[1] = arr[1][0].toUpperCase() + arr[1].slice(1).toLowerCase()
        newArr = arr.join('') 
        lastArr.push(newArr)
    }  
   return lastArr.join('\n');
}

const newText = camelCase(text)
document.querySelector('textarea').value = newText;
*/

//Butonlu Jonas Yontem
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click' , function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for(const [i,row] of rows.entries()) {
        const [first , second] = row.toLowerCase().trim().split('_')
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`

        console.log(`${output.padEnd(20)}${'👍'.repeat(i+1)}`)
    }     
})
