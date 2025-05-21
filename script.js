const prompt = require("prompt-sync")({sigint:true});

function getComputerChoice() {
    //Get the computer to return a random integer from 0 to 2
    let compChoice;
    compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice)

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

getHumanChoice()