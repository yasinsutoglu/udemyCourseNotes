'use strict'

//CHALLENGE-1
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function(data , className = ""  ){
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `

//     countriesContainer.insertAdjacentHTML('beforeend', html)

//     countriesContainer.style.opacity = 1
// }

// const renderError = function(msg){
//     countriesContainer.insertAdjacentText('beforeend' , msg)
//     countriesContainer.style.opacity = 1
// }

// const whereAmI = function(lat , lng){
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
//         //console.log(response)

//         if(!response.ok) throw new Error(`Problem with Geocoding (${response.status})`)

//         return  response.json()
//     }).then( data => {
//         //console.log(` You are in ${data.city} ,${data.country}`)

//        return fetch(`https://restcountries.com/v2/name/${data.country}`).then( response => {

//             if(!response.ok) throw new Error('Country not found')

//             return response.json();
//         }).then(data2 => {
//             console.log(data2)
//             const [data] = data2
//             renderCountry(data)
//         })        
//     }).catch( err => {
//         console.error(`${err.message}🤦‍♂️ `)
//         renderError(`Something went wrong 🤦‍♂️🤦‍♂️ ${err.message}. Try again `)
//     })
// }


//     whereAmI(52.508, 13.381)
//     whereAmI(19.037, 72.873)
//     whereAmI(-33.933, 18.474)


//CHALLENGE-2
/*
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve , seconds * 1000)
    })
}

const imgContainer = document.querySelector('.images')

const createImage = function(imgPath){
    return new Promise(function(resolve , reject){

        const img = document.createElement('img')
        img.src = imgPath

        img.addEventListener('load' , function(){
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error' , function(){
            reject(new Error('Image not found'))
        })
    })
}

let currentImg;

createImage('img/img-1.jpg').then(img => {
    currentImg = img
    console.log('Image1 loaded')
    return wait(2)
}).then(()=> {
    currentImg.style.display = 'none'
    return createImage('img/img-2.jpg')
}).then(img => {
    currentImg = img
    console.log('Image2 loaded')
    return wait(2)
}).then(()=> {
    currentImg.style.display = 'none'
}).catch(err => console.error(err))

*/

//CHALLENGE-3


const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve , seconds * 1000)
    })
}

const imgContainer = document.querySelector('.images')

const createImage = function(imgPath){
    return new Promise(function(resolve , reject){

        const img = document.createElement('img')
        img.src = imgPath

        img.addEventListener('load' , function(){
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error' , function(){
            reject(new Error('Image not found'))
        })
    })
}

//PART-1
/*
const loadNPause = async function(){
    try{
        //Load image-1
      let img =  await createImage('img/img-1.jpg');
      console.log('Image1 loaded')
      await wait(2)
      img.style.display = 'none'

       //Load image-2
       img =  await createImage('img/img-2.jpg');
       console.log('Image2 loaded')
       await wait(2)
       img.style.display = 'none'
    }catch(err){
        console.log(err)
    }
}

loadNPause()
*/
//PART-2

const loadAll = async function(imgArr){
    try{
        const imgs = imgArr.map(async img => await createImage(img))
        console.log(imgs)

        const imgsEl = await Promise.all(imgs)
        console.log(imgsEl)

        imgsEl.forEach(img => img.classList.add('parallel'))
    }catch(err){
        console.error(err)
    }
}
loadAll(["img/img-1.jpg" , "img/img-2.jpg" , "img/img-3.jpg"])