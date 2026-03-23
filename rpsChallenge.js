//click play game button``
//hide the button``
// show 3 options button - function after click the play game button``
const mainContainer = document.querySelector("#main-container");
const gameContainer = document.querySelector("#game-container");
const playBtn = document.querySelector("#playBtn");
const para = document.querySelector("#instructions");
const title = document.querySelector("#title");
const playerScores = document.querySelector("#playerScores");
const computerScores = document.querySelector("#computerScores");

let gameActive = true;

const divs = document.createElement("div");

playerScores.style.display = "none";

computerScores.style.display = "none";

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  gameContainer.appendChild(para);
  para.textContent = "Choose your weapon";
  playerOptions();
});

//create function showOptions
//options button rock paper scissor
function playerOptions() {
  const options = ["👊 Rock", "👋 Paper", "✌️ Scissor"];

  for (const option of options) {
    const optionButton = document.createElement("button");
    optionButton.classList.add("playerButton");
    optionButton.textContent = option;
    gameContainer.appendChild(optionButton);

    optionButton.addEventListener("click", () => {
      if (!gameActive) return;
      playGame(option, getComputerChoice());
    });
  }
}

//get computer choice random
//create a function getComputerChoice()
//using Math.random to return a random choice
function getComputerChoice() {
  const computerOptions = ["👊 Rock", "👋 Paper", "✌️ Scissor"];
  let randomChoice = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomChoice];
}

let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice, computerChoice) {
  playerScores.style.display = "";
  computerScores.style.display = "";

  if (playerChoice === computerChoice) {
    divs.textContent = "its a tie";
  } else if (
    (playerChoice === "👊 Rock" && computerChoice === "✌️ Scissor") ||
    (playerChoice === "👋 Paper" && computerChoice === "👊 Rock") ||
    (playerChoice === "✌️ Scissor" && computerChoice === "👋 Paper")
  ) {
    playerScore++;
    divs.textContent = `You Won: ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    divs.textContent = `Computer Won: ${computerChoice} beats ${playerChoice}`;
  }
  playerScores.textContent = `PLAYER SCORE: ${playerScore}`;
  computerScores.textContent = `COMPUTER SCORE: ${computerScore} `;

  //best of 5
  if (playerScore == 3) {
    para.textContent = "Player Won the game";
    divs.textContent = "";
    gameActive = false;
    reset();
  }
  if (computerScore == 3) {
    para.textContent = "Computer Won the game";
    divs.textContent = "";
    gameActive = false;
    reset();
  }
  gameContainer.insertBefore(divs, para);
}

function reset() {
  const button = document.querySelectorAll(".playerButton");
  button.forEach((element) => {
    element.remove();
  });
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "PLAY AGAIN?";
  gameContainer.appendChild(resetBtn);

  resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameActive = true;

    playerScores.textContent = "PLAYER SCORE: 0";
    computerScores.textContent = "COMPUTER SCORE: 0";

    playerScores.style.display = "";
    computerScores.style.display = "";

    resetBtn.remove();
    divs.textContent = "";
    para.textContent = "Choose your weapon";
    playerOptions();
  });
}
