// Randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    // the outcomes
    const outcomes = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.floor(Math.random() * 3);
    let result = outcomes[randomNumber];
    return result;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    if (playerSelectionLowerCase == computerSelectionLowerCase) {
        console.log("Tie");
    } else {
        if (playerSelectionLowerCase == "rock" && computerSelectionLowerCase == "scissors") {
            console.log("You Won! Rock beats Scissors");
            return true;
        } else if (playerSelectionLowerCase == "scissors" && computerSelectionLowerCase == "rock") {
            console.log("You Lose! Rock beats Scissors");
            return false;
        } else if (playerSelectionLowerCase == "paper" && computerSelectionLowerCase == "rock") {
            console.log("You Win! Paper beats Rock");
            return true;
        } else if (playerSelectionLowerCase == "rock" && computerSelectionLowerCase == "paper") {
            console.log("You Lose! Paper beats Rock");
            return false;
        } else if (playerSelectionLowerCase == "scissors" && computerSelectionLowerCase == "paper") {
            console.log("You Win! Scissors beats Paper");
            return true;
        } else if (playerSelectionLowerCase == "paper" && computerSelectionLowerCase == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            return false;
        } else {
            // user inputs nothing
            console.log("You Lose! You did not type anything!");
            return false;
        }
    }
        

    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (true) {
        const playerSelection = prompt("Enter either rock, scissors or paper");
        const computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection)) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }

        if (playerScore == 5 || computerScore == 5 ) {
            // Player is the winner
            if (playerScore > computerScore) {
                console.log("You win the game");
                break;
            } else {
                console.log("You lost the game to the computer!");
                break;
            }
        }
}
}

game();
