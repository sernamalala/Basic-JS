let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let randomNum = Math.floor(Math.random() * (9 + 1));
// Write your code below:

const generateTarget = () => {

    return randomNum;

}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

    let outcome;
    if (humanGuess === computerGuess) {

        outcome = true;
    }

    if (humanGuess > secretTarget && computerGuess > secretTarget) {
        let humanValue = humanGuess - secretTarget;
        let computerValue = computerGuess - secretTarget;

        if (humanValue <= computerValue) {
            outcome = true;
        }
        else {
            outcome = false;
        }
    }


    else if (humanGuess > secretTarget && computerGuess < secretTarget) {
        let humanValue = humanGuess - secretTarget;
        let computerValue = secretTarget - computerGuess;

        if (humanValue <= computerValue) {
            outcome = true;
        }
        else {
            outcome = false;
        }
    }

    else if (humanGuess <= secretTarget && computerGuess < secretTarget) {
        let humanValue = secretTarget - humanGuess;
        let computerValue = secretTarget - computerGuess;

        if (humanValue <= computerValue) {
            outcome = true;
        }
        else {
            outcome = false;
        }
    }

    else if (humanGuess < secretTarget && computerGuess > secretTarget) {
        let humanValue = secretTarget - humanGuess;
        let computerValue = computerGuess - secretTarget;

        if (humanValue <= computerValue) {
            outcome = true;
        }
        else {
            outcome = false;
        }
    }

    return outcome;

}

const updateScore = winner => {

    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }

}

const advanceRound = () => {

    currentRoundNumber++;
}