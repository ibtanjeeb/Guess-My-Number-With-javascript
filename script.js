'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'ðCorrect Answer';
// document.querySelector('.score').textContent = 13;
// document.querySelector('.number').textContent = 19;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let num = Math.trunc(Math.random() * 20) + 1;

console.log(num);
let score = 20;
let highestScore = 0;
var DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const Guess = Number(document.querySelector('.guess').value);
  // console.log(typeof Guess);
  if (!Guess) {
    DisplayMessage('â No Number ');
  } else if (Guess >= 1 && Guess <= 20) {
    if (num === Guess) {
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = num;
      // document.querySelector('.message').textContent =
      //   'âï¸ --Correct Answer!!!..';
      DisplayMessage('âï¸ --Correct Answer!!!..');

      if (score > highestScore) {
        highestScore = score;
        document.querySelector('.highesscore').textContent = highestScore;
      }
    } else if (num !== Guess) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   Guess > num ? 'ð¼ To High!' : 'â¬ To Low!';

        DisplayMessage(Guess > num ? 'ð¼ To High!' : 'â¬ To Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'ð§¯ You Lost The Game';
        DisplayMessage('ð§¯ You Lost The Game');
        document.querySelector('.score').textContent = 0;
      }
    }
    // } else if (Guess > num) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'ð¼ To High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'ð§¯ You Lost The Game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (Guess < num) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'â¬ To Low!';

    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'ð§¯ You Lost The Game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }

    console.log(Guess);
    console.log(num);
  } else {
    document.querySelector('body').style.backgroundColor = 'red';
    // console.log(
    //   (document.querySelector('.message').textContent =
    //     'Please write âï¸ a value 1-20 But Your Value not of Them')
    // );
    DisplayMessage('Please write âï¸ a value 1-20 But Your Value not of Them');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guesing...';
  DisplayMessage('Start Guesing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.highesscore').textContent = highestScore;
});
