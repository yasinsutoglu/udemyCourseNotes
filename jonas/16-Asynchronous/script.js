'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////



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


const getCountryAndNeighbour = function(country){

    //AJAX call country-1
    const request = new XMLHttpRequest();
    request.open('GET' , `https://restcountries.com/v2/name/${country}`)
    request.send()

    //callback func. process after ajax call
    request.addEventListener('load' , function(){
        //burada this.responseText sonucu JSON string olarak geliyor ve bizim object'e cevirmemiz lazım ki kullanabilelim.
        const [data] = JSON.parse(this.responseText) // this --> request'i isaret eder.
        console.log(data)

        //Render Country
        renderCountry(data) 
        
        //Get neighbour country(2)
        const neighbour = data.borders?.[0];

        if(!neighbour) return; //guard clause

        //AJAX call country-2
        const request2 = new XMLHttpRequest();
        request2.open('GET' , `https://restcountries.com/v2/alpha/${neighbour}`)
        request2.send()

        request2.addEventListener('load' , function(){
            const data2 = JSON.parse(this.responseText);
            // console.log(data2)
            renderCountry(data2 , 'neighbour')
        })

    })
}

getCountryAndNeighbour('usa')


///////////////////////////////////////
// Ajax call sonrası addEventListener'da kullanılan callback icerisinde tekrar ajax kullanıp tekrar callback func. kullanılma durumu olabilir. Hatta bu callback durumları defaten gerceklesecek olabilir (tons of nested callbacks). Bu behaviour/structure'a "CALLBACK HELL" denir. Bu sadece ajax call'da degil diger asynchronous call durumlarında da gecerlidir. Bu callback hell durumu, kodumuzu dagınık ve zor anlasılır hale getirir. Bunu cozmek icin "PROMISES" kullanılır.

//Example of CallBack Hell
setTimeout(()=> {
    console.log('1 second passed')
    setTimeout(()=> {
        console.log('2 second passed')
        setTimeout(()=> {
            console.log('3 second passed')
        }, 1000)
    }, 1000)
}, 1000)