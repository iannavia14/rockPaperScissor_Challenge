//this is a rock paper scissor challenge
//this game will be played against the computer.

//Computer side randomly returns “rock”, “paper” or “scissors”.
//use Math.floor Math.random *3 to get a random number from 1 to 3
//use if else statement to convert 1-3 into string
//if math random is 1 choice is rock and so on.

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else choice === 2;
  return "scissors";
}
console.log(getComputerChoice());

//takes the user choice and return it
//create a function getPlayerChoice
//take the user input and return it

function getPlayerChoice() {
  return prompt("Lets Play!: ROCK, PAPER OR SCISSORs");
}

//declare two new variables for the player and computer score
let playerScore = 0;
let computerSCore = 0;

//let play
//create a function playRound
//that takes the getPlayerChoice & getComputerChoice as arguments
//increment the score and announce the winner!

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice?.trim().toLowerCase();
  if (
    (playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors") ||
    playerChoice.trim() === "" ||
    playerChoice === null
  )
    return console.log("Invalid Choice");
  if (playerChoice === computerChoice) {
    console.log("Its a tie");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Won(${playerChoice} beat ${computerChoice})`);
    console.log(playerScore++);
  } else {
    console.log(`You Loss(${computerChoice} beat ${playerChoice})`);
    console.log(computerSCore++);
  }
}
const computersGet = getComputerChoice();
const playersGet = getPlayerChoice();
playRound(playersGet, computersGet);
