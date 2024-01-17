
const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb'){

        return userInput;
    }
    else{
      
       console.log('Error: Not a valid input.');

    }
}

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3);

if(randomNumber === 0)
{
      return 'rock';

}
else if(randomNumber === 1)
{
      return 'paper';

}
else if(randomNumber === 2)
{
      return 'scissors';

}
}

function determineWinner(userChoice, computerChoice){

  if(userChoice === computerChoice){
    return 'It is a TIE!';
  }

//user picks rock
  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'USER HAS WON!!!';
    }
    else{
      return 'COMPUTER HAS WON';
    }
  }

//user picks paper

  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'USER HAS WON!!!';
    }
    else{
      return 'COMPUTER HAS WON';
    }
  }

  //user picks scissors

  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'USER HAS WON!!!';
    }
    else{
      return 'COMPUTER HAS WON';
    }
  }

  if(userChoice === 'bomb'){
   return 'USER HAS WON!!!';
  }
}

//play game

function playGame(){

  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();

console.log(userChoice);
console.log(computerChoice);
console.log(determineWinner(userChoice, computerChoice));
}

playGame();