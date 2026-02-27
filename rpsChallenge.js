//Computer***
//create a function to the computer
//computer have three choices 'rock', 'paper', 'scissors' only
//computer's get random choices
//return 1 random choices.
//test the return values in console.

function getComputerChoice() {
  let computerChoices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}
console.log(getComputerChoice());

//Player***
//create a function to the Player
//player enter only 'rock', 'paper', 'scissors' through PROMPT
//player accept accept lower/upper case
//players input print in console
//if player enter invalid answer, print invalid answer consider it as loss

function getPlayerChoice() {
  let userInput = prompt("Enter your choice Rock, Paper, Scissors");
  userInput = userInput?.trim().toLowerCase();
  if (!userInput) {
    console.log("Invalid Input");
    return null;
  } else if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    console.log(userInput);
    return userInput;
  } else {
    console.log("Invalid Input");
    return null;
  }
}
getPlayerChoice();
