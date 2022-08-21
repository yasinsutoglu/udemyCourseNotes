'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1; 

let score = 20;

let highScore = 0;

//refactoring the message code 
const displayMessage = function(msg){
    document.querySelector('.message').textContent = msg;
}

//AGAIN! BUTTON CLICK EVENT FOR RESTORING THE CONTENTS
document.querySelector('.again').addEventListener('click' , function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


//CHECK BUTTON CLICK EVENT
document.querySelector('.check').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
   
    //when there is no input
    if(!guess){
        displayMessage('No Number!!');
        
        //When player wins, do some changes on the page
    }else if(guess === secretNumber){
        displayMessage('🎊 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when guess is wrong
    }else if(guess !== secretNumber){

        if(score > 1){
            displayMessage( (guess > secretNumber) ? 'Too high!!' : 'Too Low!!' );
            score -= 1;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage( 'YOU LOST THE GAME 😛' )
            document.querySelector('.score').textContent = 0;
        }
    } 
})