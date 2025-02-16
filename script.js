
// This is the simple logic of guess the number and it is console based.........

//----------------------------------------------------------------
// const max = prompt("Enter Your Max Number!");

// const random = Math.floor(Math.random() * max) + 1;

// console.log(random);

// let guess = prompt("Guess the random number!");

// while (true) {
//   if (guess == "quit") {
//     console.log("User Quit");
//     break;
//   }
//   if (guess == random) {
//     console.log("You guessed the right number! Congrats, your random number is:", random);
//     break;
//   } else if (guess < random) {
//     guess = prompt("Your guess is too small, please try again!");
//   } else if (guess > random) {
//     guess = prompt("Your guess is too large, please try again!");
//   } else {
//     guess = prompt("Your guess was wrong, please try again!");
//   }
// }
  
//----------------------------------------------------------//


// this logic is proper functionality of this game 

let randomNumber;
let max;
let guessInput = document.getElementById('guessInput');
let message = document.getElementById('message');
let startGameBtn = document.getElementById('startGame');
let submitGuessBtn = document.getElementById('submitGuess');
let quitGameBtn = document.getElementById('quitGame');

startGameBtn.addEventListener('click', function() {
    max = document.getElementById('maxNumber').value;
    if (max && max > 0) {
        randomNumber = Math.floor(Math.random() * max) + 1;
        console.log(`Random Number: ${randomNumber}`); 
        message.textContent = `Game started! Try to guess a number between 1 and ${max}.`;
        guessInput.disabled = false;
        submitGuessBtn.disabled = false;
        document.getElementById('maxNumber').disabled = true;
    } else {
        message.textContent = 'Please enter a valid max number!';
    }
});

submitGuessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    if (!guess || guess < 1 || guess > max) {
        message.textContent = `Please enter a number between 1 and ${max}.`;
        return;
    }

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the right number: ${randomNumber}.`;
        resetGame();
    } else if (guess < randomNumber) {
        message.textContent = "Your guess is too low. Try again!";
    } else if (guess > randomNumber) {
        message.textContent = "Your guess is too high. Try again!";
    }
});

quitGameBtn.addEventListener('click', function() {
    message.textContent = "You quit the game.";
    resetGame();
});

function resetGame() {
    guessInput.disabled = true;
    submitGuessBtn.disabled = true;
    document.getElementById('maxNumber').disabled = false;
    document.getElementById('maxNumber').value = '';
    guessInput.value = '';
}
