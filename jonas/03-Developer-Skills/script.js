// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const calcTempAmplitude = function(t1,t2){
    const temps = t1.concat(t2);
    console.log(temps)

    let max = temps[0];
    let min = temps[0];

    for(let i=0; i < temps.length; i++ ){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        //debugger;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }

    console.log(max,min)
    return max - min;
}

const amplitude = calcTempAmplitude([3, 5, 1] , [9, 4, 1] )

console.log(amplitude)
*/

const data1 = [17, 21 , 23];

const printForecast = function(arr){
    let str = '... '
    for(let i=0; i<arr.length; i++ ){
        str += `${arr[i]}C in ${i+1} days ... `
    }
    return str;
}

const weather = printForecast(data1);
console.log(weather)