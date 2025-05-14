let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let guessCount = 1;
let guesses = [];

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = Number(userInput.value);

    if (!guess || guess < 1 || guess > 100) {
        lowOrHi.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    guesses.push(guess);
    guessSlot.textContent = guesses.join(', ');
    remaining.textContent = 10 - guessCount;

    if (guess === randomNumber) {
        lowOrHi.textContent = 'Congratulations! You guessed it right!';
        endGame();
    } else if (guessCount === 10) {
        lowOrHi.textContent = `Game Over! The number was ${randomNumber}.`;
        endGame();
    } else {
        if (guess < randomNumber) {
            lowOrHi.textContent = 'Too low! Try again.';
        } else {
            lowOrHi.textContent = 'Too high! Try again.';
        }
    }

    guessCount++;
    userInput.value = '';
    userInput.focus();
});


function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
}
