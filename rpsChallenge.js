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
<<<<<<< HEAD
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
=======
//Player***
//create a function to the Player
//player enter only 'rock', 'paper', 'scissors' through PROMPT

function getPlayerChoice() {
  return prompt("Enter your choice Rock, Paper, Scissors");
}
//get the computer and player score
//create a variable for computer score
//create a variable for player score

let computerScore = 0;
let playerScore = 0;

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

function playRound(playerChoice, computerChoice) {
  console.log(`Player Choose: ${playerChoice}`);
  playerChoice = playerChoice?.trim().toLowerCase();
  if (!playerChoice || playerChoice.trim() === "" || playerChoice === null) {
    console.log("Invalid Input");
  } else {
    console.log(`Computer Choose: ${computerChoice}`);
    if (playerChoice === computerChoice) {
      console.log("its a tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`Players win, (${playerChoice} beat ${computerChoice})`);
      playerScore++;
    } else {
      console.log(`Computers win, (${computerChoice} beat ${playerChoice})`);
      computerScore++;
    }
  }
  console.log(`player score: ${playerScore}`);
  console.log(`computer score: ${computerScore}`);
}

function playGame() {
  for (i = 1; i <= 5; i++) {
    console.log(" ");
    const getPlayer = getPlayerChoice();
    const getComputer = getComputerChoice();
    playRound(getPlayer, getComputer);
  }
  if (playerScore === computerScore) {
    return console.log(`

      DRAW!!`);
  } else if (playerScore > computerScore) {
    return console.log(`

      Congrats you won! 
      PLAYER SCORE: ${playerScore}/ COMPUTER SCORE: ${computerScore}`,
    );
  } else {
    return console.log(`

      Better luck next time! Computer's Won, 
      COMPUTER SCORE: ${computerScore}/ PLAYER SCORE: ${playerScore}`,
    );
  }
}

playGame();
>>>>>>> 7e040af5a9dd216fca2c2b6511ece25e2636bc96
