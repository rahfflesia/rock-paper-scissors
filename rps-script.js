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

function playGame() {
    let playerChoice = prompt("Rock, paper or scissors? ")
    const computerChoice = getComputerChoice()
    console.log(playRound(playerChoice.toLowerCase(), computerChoice))
    return "Computer score: " + computerScore + "," + "Player score: " + playerScore
}
