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
