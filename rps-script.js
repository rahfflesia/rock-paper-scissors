function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    let randomNumber = getRandomInt(3)
    if (randomNumber === 0){
        return "Rock"
    }
    else if (randomNumber === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

let computerScore = 0
let playerScore = 0
const gameWinner = document.querySelector('.game-winner');
const gameOverDiv = document.querySelector('.game-over');
const winnerDiv = document.querySelector('.winner');
const scoreDiv = document.querySelector('.score')
const parentDiv = document.querySelector('.main');

function gameOver(){
    if(computerScore === 5 || playerScore === 5){
        gameOverDiv.textContent = "Game over";
        playerScore = 0;
        computerScore = 0;
        if(computerScore > playerScore){
            gameWinner.textContent = "Computer wins!";
        }
        else{
            gameWinner.textContent = "Player wins!";
        }
    }
}


function playRound(playerSelection, computerSelection){

    const lowerPlayerSelection = playerSelection.toLowerCase()

    if (lowerPlayerSelection === "rock" && computerSelection === "Rock"){
        return "It's a tie!, nobody wins"
    }
    else if (lowerPlayerSelection === "paper" && computerSelection === "Paper"){
        return "It's a tie!, nobody wins"
    }
    else if (lowerPlayerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie!, nobody wins"
    }
    else if (lowerPlayerSelection === "rock" && computerSelection === "Scissors"){
        playerScore++
        return "Player wins! " + playerSelection + " beats " + computerSelection
    }
    else if (lowerPlayerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++
        return "Player wins! " + playerSelection + " beats " + computerSelection
    }
    else if (lowerPlayerSelection === "paper" && computerSelection === "Rock") {
        playerScore++
        return "Player wins! " + playerSelection + " beats " + computerSelection
    }
    else if (computerSelection === "Rock" && lowerPlayerSelection === "scissors") {
        computerScore++
        return "Computer wins! " + computerSelection + " beats " + playerSelection
    }
    else if (computerSelection === "Scissors" && lowerPlayerSelection === "paper"){
        computerScore++
        return "Computer wins! " + computerSelection + " beats " + playerSelection

    }
    else if (computerSelection === "Paper" && lowerPlayerSelection === "rock"){
        computerScore++
        return "Computer wins! " + computerSelection + " beats " + playerSelection
    }
}

let rockChoice = document.querySelector('#rock');
let paperChoice = document.querySelector('#paper');
let scissorsChoice = document.querySelector('#scissors');

rockChoice.addEventListener('click', () => {
    winnerDiv.textContent = playRound("rock",getComputerChoice());
    scoreDiv.textContent = "Computer: " + computerScore + " " + "Player: " + playerScore;
    gameOver();
    if(computerScore > 5 || playerScore > 5){
        parentDiv.removeChild(gameWinner);
        parentDiv.removeChild(gameOverDiv);
    }
});

paperChoice.addEventListener('click', () => {;
    winnerDiv.textContent = playRound("paper",getComputerChoice());
    scoreDiv.textContent = "Computer: " + computerScore + " " + "Player: " + playerScore;
    gameOver();
    if(computerScore > 5 || playerScore > 5){
        parentDiv.removeChild(gameWinner);
        parentDiv.removeChild(gameOverDiv);
    }
})

scissorsChoice.addEventListener('click', () => {
    winnerDiv.textContent = playRound("scissors",getComputerChoice());
    scoreDiv.textContent = "Computer: " + computerScore + " " + "Player: " + playerScore;
    gameOver();
    if(computerScore > 5 || playerScore > 5){
        parentDiv.removeChild(gameWinner);
        parentDiv.removeChild(gameOverDiv);
    }
});
