// computer side
// computer randomly return rock or paper or scissors.
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

//player side
//return players input
const getPlayerInput = () => prompt("Enter Rock or Paper or Scissors");

//return getPlayerInput case-insensitve
function getPlayerChoice(input) {
  input = input?.trim().toLowerCase();
  if (!input || input.trim() === "") return null;
  else
    switch (input) {
      case "rock":
        return input;
      case "paper":
        return input;
      case "scissors":
        return input;
      default:
        return null;
    }
}

const getValidPlayerChoice = () => getPlayerChoice(getPlayerInput());

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

//Play and scoring
function playRound(playerChoice, computerChoice) {
  console.log("Player choose   : " + playerChoice);
  console.log("Computer choose : " + computerChoice);
  if (!playerChoice) {
    console.log("Invalid input. Round skipped.");
    console.log("");
    return;
  } else if (playerChoice === computerChoice)console.log("It's a tie!");
    else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You Win (${playerChoice} beats ${computerChoice})`);
    playerScore++;
  } else {
    console.log(`Computer Win(${computerChoice} beats ${playerChoice})`);
    computerScore++;
  }
  console.log(`Score: Player: ${playerScore} / Computer: ${computerScore}`);
  console.log("");
}

//5 rounds
  playRound(getValidPlayerChoice(), getComputerChoice());
  playRound(getValidPlayerChoice(), getComputerChoice());
  playRound(getValidPlayerChoice(), getComputerChoice());
  playRound(getValidPlayerChoice(), getComputerChoice());
  playRound(getValidPlayerChoice(), getComputerChoice());

// Final result
  console.log("Final Result:");
  if (playerScore > computerScore) console.log("You win the game!");
  else if (computerScore > playerScore) console.log("Computer wins the game!");
  else console.log("It's a tie!");
}

playGame();
