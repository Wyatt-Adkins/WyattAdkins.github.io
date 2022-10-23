// GUESS THAT NUMBER
// Message to be used throughout the project
const enterNumText = `Please enter a number higher than Zero.`;

let restartGame = true;
// true = bolen

let rangeNum;

let randomNum;

let attempts;

let guess;

let playAgain;

alert(`Every programmer has to create a number guessing game, so here is mine, click "ok" to play )`);

// Game restarts as long as value is true
while (restartGame){
    // Asks user to enter a number 
    rangeNum = prompt(`Please enter a maximum number for the range`);

    // Using parseint to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum);

    //  logic for num > zero
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // creation logic
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter a number of attempts allowed 
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifying the user's entry for a number of attempts allowed is a number greater than zero and equal to or less than the range of guesses possible
    while (!attempts || attempts < 1 || attempts > rangeNum) {
        attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Asks user to enter a guess within the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

    // Continues looping until the user guesses the correct number or runs out of attempts 
    while (true){

        // Displays the number when a code word is entered
        if (guess === `Erdrick`) {
            alert(`The number is ${randomNum}`);
            // Prompts the user to enter another guess
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
            
        }

        // Tries convert the user's guess into a number
        guess = parseInt(guess);

        // Verifies the user's guess is a number greater than zero and less than or equal to the range
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }

        // Removes an attempt
        attempts--;

        // Checks if user guessed correctly. If so, the game ends.
        if (guess === randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;

        // This checks if user has any attempts left. If not, then the game ends and the number is displayed to the user.
        } else if (attempts === 0){
            alert(`Sorry, but you have run out of attempts :(The number was ${randomNum})`);
            break;

            // Checks if user's guess was too low and prompts user to guess again if so
        } else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);
            // The only other possibility is the user's guess was too high so the user is prompted again
        } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) left.`);
        }
    } 

    // Prompts user with option to play again
    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

    // Loop continues until user submits a valid response
    while (true){
        // Check if the user's answer is no (AKA `N` or `n`)
        if (playAgain.toUpperCase() === `N`){
            // Alerts the user that the game is over and the game does NOT restart
            alert(`Thanks for playing, See you next time!`);
            restartGame = false;
            break;

            // Checks if the user's answer is yes (AKA `Y` or `y`)
        } else if (playAgain.toUpperCase() === `Y`){
            // The games restarts
            break;
        } else {
            playAgain = prompt(`Please enter Y or N.`);
        }
    }
}