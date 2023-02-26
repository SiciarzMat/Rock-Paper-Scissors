let userScore = 0;
let computerScore = 0;
const userScoreCounter = document.getElementById("user-score");
const computerScoreCounter = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const results = document.querySelector(".result > p");
const choiceRock = document.getElementById("choice-rock");
const choicePaper = document.getElementById("choice-paper");
const choiceScissors = document.getElementById("choice-scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(user, computer) {
  userScore++;
  userScoreCounter.innerHTML = userScore;
  computerScoreCounter.innerHTML = computerScore;
  results.innerHTML = `${capitalizeFirstLetter(
    user
  )} beats ${capitalizeFirstLetter(computer)}. You win! 🏆`;
  document.getElementById(`choice-${user}`).classList.add("green-glow");
  setTimeout(
    () =>
      document.getElementById(`choice-${user}`).classList.remove("green-glow"),
    300
  );
}

function lose(user, computer) {
  computerScore++;
  userScoreCounter.innerHTML = userScore;
  computerScoreCounter.innerHTML = computerScore;
  results.innerHTML = `${capitalizeFirstLetter(
    user
  )} loses to ${capitalizeFirstLetter(computer)}. You lost... 💔`;
  document.getElementById(`choice-${user}`).classList.add("red-glow");
  setTimeout(
    () =>
      document.getElementById(`choice-${user}`).classList.remove("red-glow"),
    300
  );
}

function draw(user, computer) {
  results.innerHTML = `${capitalizeFirstLetter(
    user
  )} equals ${capitalizeFirstLetter(computer)}. It's a draw. 😬`;
  document.getElementById(`choice-${user}`).classList.add("gray-glow");
  setTimeout(
    () =>
      document.getElementById(`choice-${user}`).classList.remove("gray-glow"),
    300
  );
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  choiceRock.addEventListener("click", () => game("rock"));
  choicePaper.addEventListener("click", () => game("paper"));
  choiceScissors.addEventListener("click", () => game("scissors"));
}

main();
