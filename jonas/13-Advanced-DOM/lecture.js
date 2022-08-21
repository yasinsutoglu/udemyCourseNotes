'use strict'
/*
//SELECTING ELEMENTS
console.log(document.documentElement) //tüm html element'ini komple secmis olduk
console.log(document.head) // head elementi komple secmis olduk
console.log(document.body) //body elementi komple secilmis oldu

const header = document.querySelector('.header')

const allSections = document.querySelectorAll('.section')//secim sonucu Nodelist olusur. Web sayfasından element silsek de Nodelist'ten eksilme olmaz. Guncelleme olmaz.
console.log(allSections)

console.log(document.getElementById('section--1'))

const allButtons = document.getElementsByTagName('button') // secim sonucu HTMLCollection doner.Web sayfasından element silsek collection'da güncelleme/eksilme olur.
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))// secim sonucu HTMLCollection doner.Web sayfasından element silsek collection'da güncelleme/eksilme olur.

//CREATING AND INSERTING ELEMENTS
//.insertAdjacentHTML --> daha once kullandık ve sıkca kullanılır.

const message = document.createElement('div'); //bir DOM element gibi element olusturmus olduk
message.classList.add('cookie-message');
//message.textContent  = 'We use cookies for improved functionality and analytics.'

//innerHTML ile icerisine element ekleyebiliriz.
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">GOT IT!!</button>' 

//Adding child element
//header.prepend(message) // message elementi header'in first child'i olarak eklemis oluyoruz.

header.append(message) // message elementi header'in last child'i olarak eklemis oluyoruz. Bunu ekleyince prepend ile eklenen element sona kaydı. Aynı element iki yerde birden olmuyor. Eger elementi kopyalarsak kullanabiliriz.

//header.append(message.cloneNode(true)) //kopyaladık ve hem basa hem sona yerlestirdik.

//Adding siblings element
//header.before(message) //--> header elementi oncesine siblings olarak message elementini ekledi.
//header.after(message)

//DELETE ELEMENTS
document.querySelector('.btn--close-cookie').addEventListener('click' , function(){
    message.remove()
    //message.parentElement.removeChild(message) --> eskiden bu sekilde yapılıyordu, yine calisir.
})

//STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '80%';

//style okuma
console.log(message.style.backgroundColor)
console.log(message.style.color) // burada biz eklemedigimiz veya inline olmadıgı ıcın okuyamadı ama cozumu asagıda!

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height , 10) + 30 + 'px'; // message'ın yüksekligine 30px ekledik ve yeni height'ı yaptık.

document.documentElement.style.setProperty('--color-primary' , 'orangered'); //burada yazdıgımız kod ile css dosyasında tanımladıgımız root altındaki degiskenleri degistirme ve yenisini ekleme yapabiliyoruz. root altındaki degiskenler global degiskene benzer sekilde tüm css'te gecerli oluyordu hatırlarsak!!!

//ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt)
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo' // attribute'a value set ettik.

//Non-standard
console.log(logo.designer) //undefined dondu. Cunku img'a tanımlanan standard bir attribute degil bu.
console.log(logo.getAttribute('designer')) // Jonas dondu. getAttribute(), standard olmayan attribute'ları bile alabiliyor.

//Setting attribute
logo.setAttribute('company' , 'Bankist')

console.log(logo.src)
console.log(logo.getAttribute('src')) // 'img/logo.png' doner

const link = document.querySelector('.nav__link--btn')
console.log(link.href)  //http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/index.html#
console.log(link.getAttribute('href')) //#

//Data Attributes
console.log(logo.dataset.versionNumber); // '3.0' doner. Burada version-number degil versionNumber yazdık.Dikkat!!!

//Classes
logo.classList.add('c' , 'j')
logo.classList.remove('c' , 'j')
logo.classList.toggle('c' , 'j')
logo.classList.contains('c' , 'j')

//Don't use this below. Because this overrides all of the class stated in HTML code.
//logo.className = 'jonas'
*/

///////////////////////////////////////////////////////////////

//IMPLEMENTING SCROLLING
/*
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click' , function(e){
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords) // section1 koordinatlarını gosterdi

    console.log(e.target.getBoundingClientRect()) // e.target --> btnScrollTo'yu belirtir. Burada tıklanan butonun koordinatlarını gosterdi.

    console.log('Current scroll (X/Y)' , window.pageXOffset , window.pageYOffset) // scroll'un koordinatlarını gosterdi

    console.log('height/width viewport', document.documentElement.clientHeight , document.documentElement.clientWidth) //viewport'un yukseklik ve genisligini verir bize

    //Scrolling

    //OLD WAY
    //window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset)

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // })

    //MODERN WAY
    section1.scrollIntoView({behavior: 'smooth'})
})
*/

//////////////////////////////////////
/*
// EVENTS and EVENTLISTENERS
const h1 = document.querySelector('h1');

//Guncel Yontem.
const alertH1 = function(e){
    alert('addEventListener: You are reading the heading!')

    //h1.removeEventListener('mouseenter' , alertH1)// bunu fonksyion dısında da kullanabiliriz.
}

h1.addEventListener('mouseenter' , alertH1)

setTimeout(() => h1.removeEventListener('mouseenter' , alertH1), 3000)

//Eski Yontem. 
//addEventListener bunu override eder. Ayrıca, addEventListener kullanılırken yazılan callback function icerisine removeEventListener import edilebilir.(o event sadece 1 kerelik kullanılacaksa)

// h1.onmouseenter = function(e){
//     alert('onmouseenter: You are reading the heading!')
// }

//Ucuncu Yontem. --> direk HTML'e yazılan tarz ama nadir tercih edilir.
//<h1 onclick="alert('HTML alert')">

//-------------------------------

// EVENT PROPAGATION : BUBBLING (child'tan parent'a) AND CAPTURING (parent'dan child'a)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); // min ve max arası random sayı olusturma idi hatırlarsak!

const randomColor = () => `rgb(${randomInt(0,255)} , ${randomInt(0,255)} , ${randomInt(0,255)} )`

//Burada "nav > nav__links > nav__link" seklinde bir parent/child iliskisi mevcuttur. Ben "nav__link"e tıkladıgımda nav__link class'lı elementlerin parent elementinde rastgele renk degisimi olur. Ben eger "nav__links"e tıklarsam sadece "nav__link"te renk degismez cunku o child elementtir. Burada event'i tetiklenen elemntin parent elementleri de etkilenecek sekilde bir silsile iliski mevcuttur.

document.querySelector('.nav__link').addEventListener('click' , function(e){
    this.style.backgroundColor = randomColor();
    console.log('LINK' , e.target , e.currentTarget)// burada e.target: "nav__link" ve e.currentTarget: "nav__link"
    console.log(e.currentTarget === this) // true doner

    //Stop Propagation
    //e.stopPropagation();  // artık parent elementler bu elementin event'ından etkilenmezler sadece bu elementin üzerinde eventi sonucu gerceklesir. Bu kullanım bazı karmasık durumlarda sorun cozerken, bazı durumlarda ise sorun olusturabilir.
})

document.querySelector('.nav__links').addEventListener('click' , function(e){
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER' , e.target , e.currentTarget) //burada e.target: "nav__link" ve e.currentTarget: "nav__links"
})

document.querySelector('.nav').addEventListener('click' , function(e){
    this.style.backgroundColor = randomColor();
    console.log('NAV' , e.target , e.currentTarget) //burada e.target: "nav__link" ve e.currentTarget: "nav"
},  true) 
// burada ucuncu parametre olarak "true" yaparsak "capturing" phase ile parent elementin ilk olarak  etkilenmesini gerceklestirmis oluruz. Yani "nav__links"e tıklanınca ilk "nav" etkilenmesi aktiflestirilmistir. Bu parametre true yapılmazsa default durum Bubling'dir. Biz bu parametre ile Capturing'i aktive etmis oluruz. Cogunlukla zaten bubling durum kullanılır.

*/

////////////////////////////////////////////////
/*
//DOM TRAVERSING
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes) // text , commentin bile oldugu nodelist dondu
console.log(h1.children) //html collection dondu

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode) //ilgili parent node'u doner
console.log(h1.parentElement) //ilgili parent node'u dondu

h1.closest('.header').style.background = 'var(--gradient-secondary)' // closest() --> querySelector()'un tersi isler.Yani parent elementi icerideki parametreye gore secmeye yarar.

h1.closest('h1').style.background = 'var(--gradient-primary)' // burada kendini secti ve style islemi yaptı.

//Going sideways: siblings
console.log(h1.previousElementSibling)
console.log(h1.nextSibling) // #text dondu

console.log(h1.previousSibling)// #text dondu
console.log(h1.nextSibling)// #text dondu

console.log(h1.parentElement.children) // burada dolaylı yoldan h1'in kendisine ve tum siblinglerine eristik
//Normalde HTML Collection spreading yapabiliniyor.Ama burada hata verdi.
// [...h1.parentElement.children].forEach(function(el){
//     if(el !== h1) el.style.transform = 'scale(0.5)'
// })

*/

////////////////////////////////////////////////////
/*

const section1 = document.querySelector('#section--1');

//STICKY NAVIGATION: Intersection Observer API --> this API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

//this callback function here will get called each time that the observed element,so our target element here, is intersecting the root element at the threshold that we defined. These "entries" argument here are actually an array of the threshold entries

const obsCallback = function(entries , observer){
    entries.forEach(entry => {
        console.log(entry)
    })
}

const obsOptions = {
    root: null,    //this root is the element that the target is intersecting. null--> entire viewport element'i tekabul ediyor. Baska bir element ile intersect etmek istesek onu yazardık.    
    //threshold: 0.1 //this is basically the percentage of intersection at which the observer callback will be called.Buraya array olarak da birden fazla threshold yazılabilir. Burada "0" deseydik. section1 viewport'a girer girmez veya viewporttan cıkar cıkmaz callback cagrılacaktı. "1" deseydikte, section1 viewportta tamamen gorunur oldugunda callback function cagrılacaktı.
    threshold: [0 , 0.2],
}

const observer = new IntersectionObserver(obsCallback , obsOptions) //In here, we will have to pass in a callback function and an object of options(object tanımlı olmalı).
observer.observe(section1) // section1'i observe edecegiz.


*/
////////////////////////////////////////

//Life Cycle DOM Events

//Bu event HTML parse edildiginde ve DOM tree yapılandırılıdıgında tetiklenir.
document.addEventListener('DOMContentLoaded', function(e){
    console.log('HTML parsed and DOM tree built' , e)
})

//Bu event sayfa tamamen yuklenince tetiklenir.
window.addEventListener('load' , function(e){
    console.log('Page fully loaded', e)
})

//bu event sayfadan cıkılırken sayfa unload edilmeden once tetiklenir.Bu eventi koymak sayfa ile ilgili bir eylemin ortasında yanlıslıkla sayfadan cıkılmasına engel olmak icin kullanılabilir.
window.addEventListener('beforeunload' , function(e){
    e.preventDefault();
    console.log(e);
    e.returnValue = 'cıkıs'; // in order to display a leaving confirmation, we need to set the return value on the event to an empty string.
})

