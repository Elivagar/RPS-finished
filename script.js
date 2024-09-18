function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, paper or scissors? Choose wisely: ")
    userInput = userInput.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"]
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid option, make sure to choose rock, paper or scissors.")
        return getHumanChoice();
    }
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice + ", Computer chose: " + computerChoice);

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("Round won!");
        humanScore++;
    } else if ((humanChoice === "scissors" && computerChoice === "rock")|| 
               (humanChoice === "rock" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "scissors")) {
        console.log("Round lost!");
        computerScore++;
    } else {
        console.log("It's a draw!");
    }

    console.log("Current Score - You: " + humanScore + ", Computer: " + computerScore);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score - You: " + humanScore + ", Computer: " + computerScore);

    let winner = true;
    if (humanScore > computerScore) {
        console.log("Congratulations, you won!");
        return winner = true;
    } else if (humanScore < computerScore) {
        console.log("Bummer, better luck next time!");
        return winner = false;
    } else {
        console.log("It's a tie, reload and try again if you dare!")
        return winner = null;
    }
}

playGame();