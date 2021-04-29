'use strict';

//class 70 manipulate the dom intro
// .message is the CLASS just like in CSS... textContent displays the properties content only instead of the tags with it
//console.log(document.querySelector('.message').textContent);

//change in the dom not just console
//document.querySelector('.message').textContent = 'Correct Number!';

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;

//document.querySelector('.guess').value = 23;
//console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';        
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#0ebb1c'; 

        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⬇️ Too High!'; 
            score--;
            document.querySelector('.score').textContent = score;   
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'; 
        }           
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⬆️ Too Low!'; 
            score--;
            document.querySelector('.score').textContent = score;   
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'; 
        }  
    }
});


