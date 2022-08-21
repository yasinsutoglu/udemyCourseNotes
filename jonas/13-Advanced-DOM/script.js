'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');


///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click' , openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////
//Button Scrolling
btnScrollTo.addEventListener('click' , function(e){

    section1.scrollIntoView({behavior: 'smooth'})
})

///////////////////////////////////////////////

//Page Navigation

//Navbar'daki link'lere tıklayınca sayfanın ilgili bolumune gitmek

//Yontem-1 : Efficient Degil!!
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click' , function(e){
//     e.preventDefault();  //html code ile belirtilen sekilde scroll yapmasın dıye.
//     const id = this.getAttribute('href')
//     console.log(id)
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })

//Yontem-2 : Event Delegation(Bubbling Kullanarak) --> Daha efficient yontem
//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click' , function(e){
  e.preventDefault();

  //Mathcing strategy
  //tıkladıgım sey nav__link classı'na sahipse yani bosluga tıklamayı almamasını saglıyorum.
  if(e.target.classList.contains('nav__link')){ 
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth' })
  }
})

////////////////////////////////////////////////////

//Tabbed Component

//burada da common parent element eventinden yola cıktık(bubbling'den faydalandık)
tabsContainer.addEventListener('click' , function(e){
  const clicked = e.target.closest('.operations__tab') // burada button icinde span'a bile tıklasak butonu secsin istedik ve closest kullandık.
  
  //Guard Clause
  if(!clicked) return; //container'da herhangi bir button dısındaki alan icerisine tıklanınca hata vermesini onlemek icin yazdık.

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active')); // tüm tab'lardan active classı olandan sildik
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  //Activate Tab
  clicked.classList.add('operations__tab--active') //tıklanan tab'a active classını ekledik

  //Activate content area
  //html'de "data-tab = 1" seklinde yazan seyi biz burada dataset.tab ile yakaladık.
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})

/////////////////////////////////////

//Menu Fade Animation

// Navbar'da bir link üzerine gelince diger linklerin fade olması --> Burada "Passing Arguments to Event Handlers" konusuna degindik.

//Refactoring icin; addEventListener icindeki callback functiona yazdıgımız kodu burada tek function haline getirdik
//const handleHover = function (e , opacity){ //"Yontem-1 icin" yazmıstık
  const handleHover = function (e){ // this keyword asagıda bind fonksyionuna gecilen argument yerine gecince opacity'i kaldırdık.
    if(e.target.classList.contains('nav__link')){
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img')

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this; //burada "this = opacity" oldugundan bu sekilde yazdık
      })

      logo.style.opacity = this;
    }
} 

//Yontem-1
// nav.addEventListener('mouseover' , function(e){
//   handleHover(e, 0.5)
// })
// nav.addEventListener('mouseout', function(e){
//   handleHover(e,1)
// })

//Yontem-2
//Passing "argument" into handler
//event handler function burada sadece 1 argument parametre alır o da event(e)'dir. Additional argument olarak 1 tane alır onu da this ile tutar.Burada birden fazla argument gecmek isteseydik bind() parantez icine ya array ya da object olarak yazılırdı o argumentler.
nav.addEventListener('mouseover' , handleHover.bind(0.5)) 
nav.addEventListener('mouseout', handleHover.bind(1))

//////////////////////////////////////////

//Sticky Navigation --> Navbar'ı section-1'den sonra sticky haline getirdik

// const initialCoords = section1.getBoundingClientRect()
// //console.log(initialCoords)

// window.addEventListener('scroll' , function() {
//   //console.log(window.scrollY)

//   if(this.window.scrollY > initialCoords.top){
//     nav.classList.add('sticky')
//   }else{
//     nav.classList.remove('sticky')
//   }
// })

//2.Yontem (Daha Efektif): Sticky Navigation: Intersection Observer API
const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height; //navbar'ın height'ını getBoundingClientRect kullanarak cektik.


const stickyNav = function(entries){
  const [entry] = entries; //entry'lerden ilkini destructuring ile aldık
  //console.log(entry)

  //entry'nin isIntersecting property'si yoksa yani header viewport ile kesişmiyorsa navbar'ı ekledik
  if(!entry.isIntersecting){ 
     nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky')
  }
}

const headerObserver = new IntersectionObserver(stickyNav , {
  root: null,
  threshold: 0,
  //rootMargin: '-90px',
  rootMargin: `-${navHeight}px`,
}); //options object burada olusturuldu.

headerObserver.observe(header);

/////////////////////////////////////////////////////

// Reveal Sections

//Kodları clean yazmak icin adımlar halinde olusturduk.
//1.adım
const allSections = document.querySelectorAll('.section')

//4.adım
// These "entries" argument here are actually an array of the threshold entries
const revealSection = function(entries , observer){
  const [entry] = entries;
  //console.log(entry)

 if(!entry.isIntersecting) return; // entry'miz intersect etmediginde section gosterilmesin sadece intersect ettiginde alltaki iki kod calısarak gosterilsin istedigimiz icin bu kodu ekledik.

 //burada ilgili elemente ulasmak icin entry'nin target property'sini kullandık.
  entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target)//section bir kere reveal edildikten sonra scroll up/down yaparken tekrar tekrar intersection observe islemi olmasın istedigimiz icin yazdık.
};

//3.adım
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//2.adım
allSections.forEach(function(section){
    sectionObserver.observe(section)
    section.classList.add('section--hidden')
})

/////////////////////////////////////////////////

//Lazy Loading Images
//Bu olay, sayfada ilk olarak az yer kaplayan resim varken blur durumdayken ve yuklenince gercek boyutlu resim ile yer degistirmesi olayıdır. Bu kodların uygulanması ile sayfalar daha hızlı yüklenir.

const imgTargets = document.querySelectorAll('img[data-src]') //buradaki data-src bizim html'e yazdıgımız bir attribute'dur. Normal html attribute'ı degildir.

//4.adım
const loadImg = function(entries , observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    //Replace src with data-src
    entry.target.src = entry.target.dataset.src; //data-src diye html'de geciyor. "data-.." diye isimlendirilen attribute'lara dataset ile ulasırız.

    entry.target.addEventListener('load' , function(){ //img yuklendikten sonra blurlugunu veren class'ı kaldırdık.
      entry.target.classList.remove('lazy-img');
    })
    
    observer.unobserve(entry.target)
}

//3.adım
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //img'ye gelmeden 200px oncesinden 'loadImg' callback function cagrılır. Boylece kullanıcı hic farketmez blur olma durumunu.
})

//2.adım
imgTargets.forEach(img => imgObserver.observe(img))

/////////////////////////////////////////////

// SLIDER

const slider = function() {
    
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // const slider = document.querySelector('.slider');
    // slider.style.transform = 'scale(0.4) translateX(-800px)';
    // slider.style.overflow = 'visible'

    //create slide Dots
    const createDots = function(){
      slides.forEach(function( _ , i){
        dotContainer.insertAdjacentHTML('beforeend' , `<button class="dots__dot" data-slide="${i}"></button>`)
      })
    }

    //Activate Relevant Dot
    const activateDot = function(slide){
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
    }

    //Go To Relevant Slide
    const goToSlide = function(slide){
      slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
    }

    //Next Slide
    const nextSlide = function(){
      if(curSlide === maxSlide - 1){
        curSlide = 0;
      }else{
        curSlide++;
      }

    goToSlide(curSlide) 
    activateDot(curSlide)
    }

    //Previous Slide
    const prevSlide = function(){
      if(curSlide === 0){
        curSlide = maxSlide - 1;
      }else{
        curSlide--
      }
      goToSlide(curSlide)
      activateDot(curSlide)
    }

    const init = function(){
      createDots();
      activateDot(0) //default ilk slayttaki dot active
      goToSlide(0) //default ilk slayt active
    }

    init();

    //Event Handlers
    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)

    //Keyboard pressdown 
    document.addEventListener('keydown' , function(e){
      if(e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide(); //ustteki satırla aynı islevdeki short curcuiting (hangisi false donerse onu alırdı ama burada ilki true olunca direkt ikinci ifadeyi calıstırdı.)
    })

    //Dot click Event
    dotContainer.addEventListener('click' , function(e){
      if(e.target.classList.contains('dots__dot')){
        //e.target --> <button class="dots__dot dots__dot--active" data-slide="1"></button>
        const {slide} = e.target.dataset; //esitligin sagı obje dondugunden destructuring yaptık.
        goToSlide(slide)
        activateDot(slide)
      }
    })

}

slider()

////////////////////////////////