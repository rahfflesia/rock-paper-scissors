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
    const parentDiv = document.querySelector('.main');
    const childDiv = document.createElement('p');
    const score = document.createElement('p');
    let roundOver = playRound("rock",getComputerChoice());
    childDiv.textContent = roundOver;
    score.textContent = "Computer: " + computerScore + " " + "Player: " + playerScore;
    childDiv.setAttribute('style', 'margin-top: 20px');
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(score);

    if(computerScore === 5 || playerScore === 5){
        const parentDiv = document.querySelector('.main');
        const gameOverMsg = document.createElement('p');
        gameOverMsg.textContent = "Game Over";
        parentDiv.appendChild(gameOverMsg);
        playerScore = 0;
        computerScore = 0;
        if(computerScore > playerScore){
            const computerWinsMsg = document.createElement('p');
            computerWinsMsg.textContent = "Computer wins!";
            parentDiv.appendChild(computerWinsMsg);
        }
        else{
            const playerWinsMsg = document.createElement('p');
            playerWinsMsg.textContent = "Player wins!";
            parentDiv.appendChild(playerWinsMsg);
        }
    }
});

paperChoice.addEventListener('click', () => {
    const parentDiv = document.querySelector('.main');
    const childDiv = document.createElement('p');
    const score = document.createElement('p');
    let roundOver = playRound("paper",getComputerChoice());
    childDiv.textContent = roundOver;
    score.textContent = "Computer: " + computerScore + " " + "Player: " + playerScore;
    childDiv.setAttribute('style', 'margin-top: 20px');
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(score);

    if(computerScore === 5 || playerScore === 5){
        const parentDiv = document.querySelector('.main');
        const gameOverMsg = document.createElement('p');
        gameOverMsg.textContent = "Game Over";
        parentDiv.appendChild(gameOverMsg);
        playerScore = 0;
        computerScore = 0;
        if(computerScore > playerScore){
            const computerWinsMsg = document.createElement('p');
            computerWinsMsg.textContent = "Computer wins!";
            parentDiv.appendChild(computerWinsMsg);
        }
        else{
            const playerWinsMsg = document.createElement('p');
            playerWinsMsg.textContent = "Player wins!";
            parentDiv.appendChild(playerWinsMsg);
        }
    }
})

scissorsChoice.addEventListener('click', () => {
    const parentDiv = document.querySelector('.main');
    const childDiv = document.createElement('p');
    const score = document.createElement('p');
    let roundOver = playRound("scissors",getComputerChoice());
    childDiv.textContent = roundOver;
    score.textContent = "Computer: " + computerScore + " " + "Player: " + playerScore;
    childDiv.setAttribute('style', 'margin-top: 20px');
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(score);
    playerScore = 0;
    computerScore = 0; 
    if(computerScore === 5 || playerScore === 5){
        const parentDiv = document.querySelector('.main');
        const gameOverMsg = document.createElement('p');
        gameOverMsg.textContent = "Game Over";
        parentDiv.appendChild(gameOverMsg);
        if(computerScore > playerScore){
            const computerWinsMsg = document.createElement('p');
            computerWinsMsg.textContent = "Computer wins!";
            parentDiv.appendChild(computerWinsMsg);
        }
        else{
            const playerWinsMsg = document.createElement('p');
            playerWinsMsg.textContent = "Player wins!";
            parentDiv.appendChild(playerWinsMsg);
        }
    }
})
