const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const winnerText = document.getElementById("winnerText");
const button = document.querySelectorAll("button");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

function getHumanChoice() {
    let input = prompt("Rock, paper or scissors?");
    let choice = input.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice, please choose again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        resultDisplay.textContent =  "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDisplay.textContent =  `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDisplay.textContent =  `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreDisplay.textContent = `Score: You: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        winnerText.textContent = "Congratulations! You won the game!";
        button.forEach(btn => btn.disabled = true);

    } else if (5 === computerScore) {
        winnerText.textContent = "Sorry, you lost the game.";
        button.forEach(btn => btn.disabled = true);

    } 
    // else {
    //     winnerText.textContent = "The game is a tie!";
    // }
}


function playGame(humanChoice) {

    const humanSelection = humanChoice;
    resultDisplay.textContent = `Round ${i}: ${playRound(humanSelection)}`;
    
}



rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));


