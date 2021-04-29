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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {    
secretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;
displayMessage('Start Guessing...');
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        displayMessage('⛔ No number!');        
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#0ebb1c'; 
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // ternary operator usage for > vs < messages
            displayMessage(guess > secretNumber ? '⬇️ Too High!' : '⬆️ Too Low!');
            score--;
            document.querySelector('.score').textContent = score;   
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'; 
            document.querySelector('.number').textContent = secretNumber;
        }
    } 
});
