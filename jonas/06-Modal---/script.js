'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

const openModal = function(){    
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   // modal.style.display = 'block'; //another application of showing modal window 
}

//we did loop process in "show modal"s buttons array 
for(let i=0; i<btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click' , openModal);

//modal closing button click event
btnCloseModal.addEventListener('click' , closeModal);

//related div event
overlay.addEventListener('click' , closeModal)

//In here, "e" is the event object that addEventListener catch
document.addEventListener('keydown', function(e){
    //console.log(e)
    //console.log(e.key)

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){//if modal window has not the 'hidden' class, call the closeModal function
            closeModal();        
    }
});


