'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////

const renderCountry = function(data , className = ""  ){
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `

    countriesContainer.insertAdjacentHTML('beforeend', html)

    countriesContainer.style.opacity = 1
}


const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend' , msg)
    countriesContainer.style.opacity = 1
}


// const request = fetch('https://restcountries.com/v2/name/turkey') // REST Contries sayfasından aldık.
// console.log(request) //fetch bize promise doner ama biz hala kullanılabilir dataya ulasmadık.

//Asagıda fetch sonrası promise donuyor. Promise'i kullanabilmek icin --> "then(function(response){})" yapısını kullanılırız. Burada response argument'lı bir callback function vardır. response --> Response formatında olacagı icin onu json() ile return ederiz ki bu da promise olarak sonuc verir. Dolayısıyla yine bir "then(function(data){})" yapısı kullanarak istedigimiz kullanılabilir veri formatına --> "data" ile ulasabiliriz. 

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//         //console.log(response)
//         return response.json();
//     }).then(function(data){
//         //console.log(data)
//         renderCountry(data[0])
//     })
// }


//SIMPLIFIED VERSION and added PROMISE CHAIN
// const getCountryData = function(country){
//     //Country-1
//     fetch(`https://restcountries.com/v2/name/${country}`).then((response) => {
//         console.log(response)
        
//         //burada promise rejected edilirse olusacak erroru onceden biz olusturuyoruz.
//          if(!response.ok)
//              throw new Error(`Country not found (${response.status})`) //throw --> retrun gibi sonlandırır. Akış asagıdaki catch'e gecer. Catch'deki error message burada yazılandır.

//         return  response.json()
//     }).then((data) => {
//         renderCountry(data[0])
//         const neighbour = data[0].borders?.[0]
//         //const neighbour = 'assgfsdgs'

//         if(!neighbour) return;//guard clause

//         //country-2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`) //bu return sonucu promise doner yine.
//     }).then(response => { 
       
//         if(!response.ok)
//              throw new Error(`Neighbour Country not found (${response.status})`)

//         return response.json()
//     }).then(data => renderCountry(data , 'neighbour')).catch(err => {
//         console.error(`${err} 🤦‍♂️🤦‍♂️`)
//         renderError(`Something went wrong 🤦‍♂️🤦‍♂️ ${err.message}. Try again `)
//     }).finally(() => {
//         countriesContainer.style.opacity = 1
//     })
// }

//helper function
const getJSON = function(url , errorMsg = 'Something went wrong'){

    return fetch(url).then(response => {
        
        if(!response.ok)
        throw new Error(`${errorMsg} (${response.status})`) 
 
        return  response.json() 
     })
 }

//HELPER FUNCTION'LI DURUM
const getCountryData = function(country){
    //Country-1

    getJSON(`https://restcountries.com/v2/name/${country}` , 'Country not found').then((data) => {
        renderCountry(data[0])
        const neighbour = data[0].borders?.[0]        

        if(!neighbour) throw new Error('No neighbour found');

        //country-2
        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}` , 'Neighbour not found')
    }).then(data => renderCountry(data , 'neighbour')).catch(err => {
        renderError(`Something went wrong 🤦‍♂️🤦‍♂️ ${err.message}. Try again `)
    }).finally(() => {
        countriesContainer.style.opacity = 1
    })
}

//yukarıda catch(err => alert(err)) --> promise chain üzerinde herhangi bir asamada olusan error(rejected promise)'i yakalamak icin kullanılır.

//yukarıda finally(() => { }) --> promise chain'de fullfilled veya rejected farketmez en sonunda mutlaka calısacak kod yapısıdır. Yani sonuc farketmeksizin calısacak koddur ve her zaman kullanılması yararlı degildir.

btn.addEventListener('click' , function(){
    getCountryData('germany')
})

 //getCountryData('australia')

 ////////////////////////////////////////////
/*
 //BUILDING PROMISES

 //Fetch function'da da olustugu gibi kendimiz de promise olusturabiliriz. Promise'de built-in objectler gibidir. Promise constructor'dan "new Promise()" diyerek olusturulur. Bir argument alır --> executor function'dır. Promise run edildiginde bu executor hemen calısır ve async behaviour oldugu bilinmelidir. Executor function'da iki argument alır. Bunlar function(resolve , reject) seklindedir. Executor function bize result value(future value of promise) uretir.

 const lotteryPromise = new Promise(function(resolve, reject){
   
    console.log('Lottery draw is happening!!')

    setTimeout(function(){
        if(Math.random() >= 0.5) {
            resolve('you win money!')// kosul saglandıgında resolve diyerek promise-->fulfilled yapıldı.resolve() icine gecilen value, promise fulfilled edilince then() ile kullanılabilir olarak doner.
            }  else{
            reject(new Error('you lost your money!'))  //resolve'un opposite'dir.Catch handler'da yakalayacagımız error message value olarak gecilir.
            }
    } , 2000)    
    
 })

 //Consuming Promise
 lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

 // In practice, most of the time all we actually do is to consume promises. And we usually only built promises  to basically wrap old callback based functions into promises. And this is a process that we call PROMISIFYING.So basically promisifying means to convert callback based asynchronous behavior to promise based.

//Promisifying SetTimeout
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve , seconds * 1000)
    })
}

//yukarıda yarattıgımız promise'de resolve sonucu bir deger donmedigi icin then() icinde argument olarak bişey yazıp kullanmadık.
wait(1).then(()=> {
    console.log('1 second passed') // istenilen baska kodlar da yazılabilirdi.
    return wait(2)
}).then(()=> {
    console.log('2 seconds passed') 
    return wait(3)
}).then(()=> {
    console.log('3 seconds passed') 
    return wait(4)
}).then(() => console.log('4 seconds passed'))

//Immediately created fulfilled or rejected promise
Promise.resolve('abc').then(x => console.log(x))
Promise.reject(new Error('Problem!')).catch(x => console.error(x))

*/

/*
//Promisifying Geolocation API --> Promise olusturduk API üzerinden
const getPosition = function(){

    return new Promise(function(resolve , reject){
        // navigator.geolocation.getCurrentPosition( //getCurrentPosition success ve error formatında 2 func. doner
        //     position => resolve(position), 
        //     err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject) //üstteki positon ve err burada otomatik atanıyor
    })
}

//getPosition().then(pos => console.log(pos))

//challenge-1'deki kodumuzu kullanarak Promisifying ile birlestirdik
const whereAmI = function(){

    getPosition().then(pos => {

        const { latitude : lat, longitude : lng} = pos.coords
        
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    }).then(response => {
              
    if(!response.ok) throw new Error(`Problem with Geocoding (${response.status})`)
    
        return  response.json()
    }).then(data => {
              
    return fetch(`https://restcountries.com/v2/name/${data.country}`).then( response => {
    
    if(!response.ok) throw new Error('Country not found')
    
        return response.json();
    }).then(data2 => {
               //console.log(data2)
               const [countryData] = data2
               renderCountry(countryData)
           })        
    }).catch( err => {
           renderError(`Something went wrong 🤦‍♂️🤦‍♂️ ${err.message}. Try again `)
     })
   }

   btn.addEventListener('click', function(){
    whereAmI()
   })
   */

//////////////////////////////////////////////////////////

//CONSUMING PROMISES WITH ASYNC/AWAIT

const getPosition = function(){

    return new Promise(function(resolve , reject){       
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


//we can use the "await" keyword to basically await for the result of the promise. So basically await will stop decode execution at this point of the function until the promise is fulfilled. So, until the data has been fetched in this case. Stopping execution in an async function, which is what we have here is actually not a problem because this function is running asynchronously in the background. And so therefore it is not blocking the main threat of execution.

//fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res)) gibi callback hell veya then() sequence yapmaya gerek kalmıyor await/async kullanarak.

//async function her zaman promise doner. Dikkat!

const whereAmI = async function(){
    try{
    //Geolocation
    const pos = await getPosition();//As soon as the promise here is resolved, then the value of this whole await expression that we have here is going to be the resolved value of the promise. And so we can simply store that into a variable. *** "await" can only be used inside an async function. ***
    const {latitude: lat , longitude: lng} = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    if(!resGeo.ok) throw new Error('Problem getting location data')
    const dataGeo = await resGeo.json()
   

    //Country Data   
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)
    if(!res.ok) throw new Error('Problem getting country')
    const data = await res.json()
    renderCountry(data[0])
    
    return `You are in ${dataGeo.city} , ${dataGeo.country}` //burada yazan return'u async func. dısında kullanmak istiyoruz. Bu async function dısına fullfilled promise olarak cıkar.
    }catch(err){
        //console.error(err)
        renderError(`🤦‍♂️ ${err.message}`)

        //Reject promise returned from async func.
        throw err
    }
}
//Async/await'de catch() method kullanamadıgımız icin error handlin TRY/CATCH yapısı ile yapılır.

console.log('1: will get location');

//altta res ile yakaladıgım return'den  fulfilled yada rejected gelen sey. Burada biz catch() yazsak da kod yine then()'i isletti bunu düzeltmek icin yukarı catch icine "throw err" tanımlayarak rethrowing error yapmalıyız.

//whereAmI().then(res => console.log(`2: ${res}`)).catch(err => console.error(`2: ${err.message}!!`)).finally( ()=> console.log('3: finished getting location')) 

//burada async/await func ile yapılan promise eski yontem then()/catch() ile kullanıldı. Bunu da async/await'e IIFE(immediately-invoked function expression) kullanarak cevirebiliriz.

(async function(){
    try{
        const res = await whereAmI()
        console.log(`2: ${res}`)
    }catch(err){
        console.error(`2: ${err.message}!!`)
    }
    console.log('3: finished getting location')
})()


//RUNNING PROMMISES IN PARALLEL

const get3Countries = async function(c1, c2, c3){
    try{
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        // console.log([data1.capital , data2.capital , data3.capital ])

        //yukarıdaki async olaylar birbirini takip eden sırada calısır. Eger paralel zamanlı calıstırmak istersek Promise.all() combinator func.'ı kullanırız. all() --> helper function olan bir method.
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ])

        console.log(data.map(d => d[0].capital))
    }catch(err){
        console.error(err)
    }
}

get3Countries('portugal' , 'turkey' , 'tanzania');

//OTHER PROMISE COMBINATORS --> race, allSettled , any

// 1. Promise.race --> just like all other combinators,receives an array of promises and it also returns a promise.Now this promise returned by Promise.race is settled as soon as one of the input promises settles. And remember that settled simply means that a value is available, but it doesn't matter if the promise got rejected or fulfilled.

//Bu Promise.race, internet baglantısı zayıfken fetch  request uzun surerken kullanımı faydalı olur.
//Bu asagıdaki promise'ler yarışır ve Promise.race sonucu elde edilen tek promise, winning fulfilled/rejected promise'dir.
(async function(){
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`)
    ])
    console.log(res[0])
})();

//Example
const timeout = function(msec) {
    return new Promise(function(_ , reject){
        setTimeout(function(){
            reject(new Error('Request took too long!'))
        }, msec * 1000)
    })
}

Promise.race([
    getJSON(`https://restcountries.com/v2/name/mexico`),
    timeout(0.2)
]).then(res => console.log(res[0])).catch(err => console.error(err))

// 2. Promise.allSettled -->it takes in an array of promises again, and it will simply return an array of all the settled promises. And so again, no matter if the promises got rejected or not.
Promise.allSettled([
    Promise.resolve('success'),
    Promise.reject('ERROR'),
    Promise.resolve('another success'),
]).then(res => console.log(res))

//ERROR dondu. En kısa sureni short circuit yaptı.
// Promise.all([
//     Promise.resolve('success'),
//     Promise.reject('ERROR'),
//     Promise.resolve('another success'),
// ]).then(res => console.log(res)).catch(err => console.log(err))

// 3. Promise.any [ES2021] --> takes in an array of multiple promises and this one will then return the first fulfilled promise and it will simply ignore rejected promises. So therefore the results of Promise.any is always gonna be a fulfilled promise, unless of course all of them reject
Promise.any([
    Promise.resolve('success'),
    Promise.reject('ERROR'),
    Promise.resolve('another success'),
]).then(res => console.log(res)).catch(err => console.log(err))