'use strict';
let message = document.querySelector('.message');
const check = document.querySelector('.check');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

let randomNumber = Math.trunc((Math.random() * 20) + 1);
console.log(randomNumber);

function checkGuess() {

    const  value = parseInt(document.querySelector('.guess').value);
    let scorev = parseInt(document.querySelector('.score').textContent) ;
   
    if (value === randomNumber) {
      message.textContent = "Correct!";
      document.querySelector('body').style.backgroundColor= '#60b347';
      document.querySelector('.number').style.width= '30rem';

      document.querySelector('.score').textContent = scorev;
      let highscore = parseInt(document.querySelector('.highscore').textContent);
      console.log(highscore);
      console.log(scorev);
      
      if (scorev > highscore) {
        highscore = scorev;
        document.querySelector('.highscore').textContent = highscore;
      }
    } 
    
    else if (value !== randomNumber) {
      if (scorev > 1) {
          message.textContent = value < randomNumber ? "Too low! Try again." : "Too high! Try again.";
          scorev--;
          document.querySelector('.score').textContent = scorev;
      } else {
          message.textContent = "Game over";
      }
  }
  
}

  check.addEventListener('click', checkGuess);

//   Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀
// */
const again = document.querySelector('.again');

const handler = function (){
    console.log(document.querySelector('.guess').value);
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

}

again.addEventListener('click', handler);

