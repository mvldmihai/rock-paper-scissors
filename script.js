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

function showRoundResult(text) {
    div.textContent = text;
}

function checkRoundWinner(round) {
    if (round.includes("Win")) {
        return playerScore++;
    } else if (round.includes("Lose")) {
        return computerScore++;
    }
}

function updateRound(playerScore, computerScore) {
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
}

function showWinner(playerScore, computerScore) {
        if (playerScore === 5) {
            return scoreDiv.textContent = `Player wins with a score of 
            ${playerScore} agaist ${computerScore}. Reload to play again.`
        } else if (computerScore === 5) {
            return scoreDiv.textContent = `Computer wins with a score of 
            ${computerScore} against ${playerScore}. Reload to play again.`
        }
}

function checkScore (playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
       document.querySelector('.rock').disabled = true;
       document.querySelector('.paper').disabled = true;
       document.querySelector('.scissors').disabled = true;
    }
}

let round = 'We play 5 rounds. Press any button to begin playing!';
let playerScore = 0;
let computerScore = 0;

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
div.textContent = round;
document.body.appendChild(div);

const scoreDiv = document.createElement('div');
scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
document.body.appendChild(scoreDiv);

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', (e) => {
    round = playRound('rock', getComputerChoice());
    showRoundResult(round);
    checkRoundWinner(round);
    updateRound(playerScore, computerScore);
    showWinner(playerScore, computerScore);
    checkScore(playerScore, computerScore);
    e.stopPropagation();
})

paper.addEventListener('click', (e) => {
    round = playRound('paper', getComputerChoice());
    showRoundResult(round);
    checkRoundWinner(round);
    updateRound(playerScore, computerScore);
    showWinner(playerScore, computerScore);
    checkScore(playerScore, computerScore);
    e.stopPropagation();
})

scissors.addEventListener('click', (e) => {
    round = playRound('scissors', getComputerChoice());
    showRoundResult(round);
    checkRoundWinner(round);
    updateRound(playerScore, computerScore);
    showWinner(playerScore, computerScore);
    checkScore(playerScore, computerScore);
    e.stopPropagation();
})