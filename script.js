'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no number
  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔️ No number has been guessed !';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number! 🎊';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!📈';
      score--;
      document.querySelector('.score').textContent = score;

      // when you lose
    } else {
      document.querySelector('.message').textContent = 'GAME OVER 💀';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }

    // when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low ! 📉';
      score--;
      document.querySelector('.score').textContent = score;
      elector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER 💀';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';
});

/*
console.log(document.querySelector('.mesage'));
document.querySelector('.message').textContent = '🎉 Correct Number! 🎊';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
