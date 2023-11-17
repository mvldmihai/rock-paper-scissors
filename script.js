function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return "It's a tie";
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (i = 0; i < 5; i++) {
//         let playerSelection = prompt("Enter your choice: ").toLowerCase();
//         let round = playRound(playerSelection, getComputerChoice());
//         console.log(round);
//         if (round.includes("Win")) {
//             playerScore++;
//         } else if (round.includes("Lose")) {
//             computerScore++;
//         }
//     }
//     if (playerScore > computerScore) {
//         console.log(`The player wins with a score of ${playerScore} against ${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`The computer wins with a score of ${computerScore} against ${playerScore}`);
//     } else {
//         console.log(`Well well well, it seems we have a tie. The score is ${playerScore} and ${computerScore}`);
//     }
// }

// game();
const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
rockButton.classList.add("rock");
document.body.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
paperButton.classList.add("paper");
document.body.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
scissorsButton.classList.add("scissors");
document.body.appendChild(scissorsButton);

const div = document.createElement('div');
document.body.appendChild(div);

function showRound(text) {
    div.textContent = text;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let round = '';


rock.addEventListener('click', (e) => {
    e.stopPropagation();
    round = playRound('rock', getComputerChoice());
    showRound(round);
})

paper.addEventListener('click', (e) => {
    e.stopPropagation();
    round = playRound('paper', getComputerChoice());
    showRound(round);
})

scissors.addEventListener('click', (e) => {
    e.stopPropagation();
    round = playRound('scissors', getComputerChoice());
    showRound(round);
})


