// Randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    // the outcomes
    const outcomes = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.random() * 3;
    let result = outcomes[randomNumber];
    return result;
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log("Tie");
    } else {
        if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("You Won! Rock beats Scissors");
            return true;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            return false;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
            return true;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            return false;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
            return true;
        } else {
            console.log("You Lose! Scissors beats Paper");
            return false;
        }
    }
        

    
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter either rock, scissors or paper");
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection)) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
}
}
