let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');
const restartButton = document.getElementById('restartButton');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        resultMessage.textContent = 'Пожалуйста, введите число от 1 до 100.';
    } else if (userGuess === randomNumber) {
        resultMessage.textContent = `Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток!`;
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Слишком низко! Попробуйте еще раз.';
    } else {
        resultMessage.textContent = 'Слишком высоко! Попробуйте еще раз.';
    }
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    resultMessage.textContent = '';
    guessButton.disabled = false;
    restartButton.style.display = 'none';
});