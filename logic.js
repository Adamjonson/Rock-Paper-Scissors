// Randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    // the outcomes
    const outcomes = ["Rock", "Paper", "Scissors"]
    let randomNumber = Math.random() * 3;
    let result = outcomes[randomNumber];
    return result;
}

function playerSelection()