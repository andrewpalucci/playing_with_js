const prompt = require("prompt-sync")({sigint:true});

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Get the computer to return a random integer from 0 to 2
    let compChoice;
    compChoice = Math.floor(Math.random() * 3);

    switch (compChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        default:
            return "scissors"
    }

}

function getHumanChoice() {
    let validChoice = false;
    let userChoice = "";
    let validChoices = ["rock", "paper", "scissors"]

    while (!validChoice) {
        userChoice = prompt("Please enter \"rock\", \"paper\", or \"scissors\": ")
        if (validChoices.includes(userChoice)) {
            validChoice = true;
        }
        else {
            console.log("Invalid Input")
        }
    }

    return userChoice
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "paper":
            if (computerChoice === "scissors") {
                console.log("You loose! The computer chose \"scissors\".")
                computerScore++
            }
            else {
                console.log("You win! The computer chose " + computerChoice + ".")
                humanScore++
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("You loose! The computer chose \"rock\".")
                computerScore++
            }
            else {
                console.log("You win! The computer chose " + computerChoice + ".")
                humanScore++
            }
            break;
        case "rock":
            if (computerChoice === "paper") {
                console.log("You loose! The computer chose \"paper\".")
                computerScore++
            }
            else {
                console.log("You win! The computer chose " + computerChoice + ".")
                humanScore++
            }
    }
}

function printScore() {
    console.log("\nThe score is: \nComputer: " + computerScore + "\nYou: " + humanScore + "\n")
}

function playGame() {
    console.log("Welcome to rock paper scissors!")

    for (let round = 1; round <= 5; round ++) {

        console.log("Round " + round + "!")

        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()

        playRound(humanChoice, computerChoice)

        printScore()
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You won! Re-run this file to play again.")
    }
    else {
        console.log("Sorry! You lost. Rerun this file to try again.")
    }

}


playGame()
