'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Answer';
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
    DisplayMessage('❌ No Number ');
  } else if (Guess >= 1 && Guess <= 20) {
    if (num === Guess) {
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = num;
      // document.querySelector('.message').textContent =
      //   '✌️ --Correct Answer!!!..';
      DisplayMessage('✌️ --Correct Answer!!!..');

      if (score > highestScore) {
        highestScore = score;
        document.querySelector('.highesscore').textContent = highestScore;
      }
    } else if (num !== Guess) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   Guess > num ? '🔼 To High!' : '⏬ To Low!';

        DisplayMessage(Guess > num ? '🔼 To High!' : '⏬ To Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '🧯 You Lost The Game';
        DisplayMessage('🧯 You Lost The Game');
        document.querySelector('.score').textContent = 0;
      }
    }
    // } else if (Guess > num) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '🔼 To High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🧯 You Lost The Game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (Guess < num) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '⏬ To Low!';

    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🧯 You Lost The Game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }

    console.log(Guess);
    console.log(num);
  } else {
    document.querySelector('body').style.backgroundColor = 'red';
    // console.log(
    //   (document.querySelector('.message').textContent =
    //     'Please write ✍️ a value 1-20 But Your Value not of Them')
    // );
    DisplayMessage('Please write ✍️ a value 1-20 But Your Value not of Them');
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
