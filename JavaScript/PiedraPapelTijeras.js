const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "sissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("Error");
    }
};

const getComputerChoice = function () {
    let aleatorio = Math.floor(Math.random() * 3 + 1);
    if (aleatorio === 1) {
        return "rock";
    } else if (aleatorio === 2) {
        return "paper";
    } else if (aleatorio === 3) {
        return "scissors";
    }
};

function determineWinner(getUserChoice, getComputerChoice) {
    if (getUserChoice === "bomb") {
        return "User won";
    }
    if (getUserChoice === getComputerChoice) {
        return "Tie";
    }

    if (getUserChoice === "rock") {
        if (getComputerChoice === "paper") {
            return "Computer won";
        } else {
            return "User won";
        }
    }
    if (getUserChoice === "paper") {
        if (getComputerChoice === "scissors") {
            return "Computer won";
        } else {
            return "User won";
        }
    }

    if (getUserChoice === "scissors") {
        if (getComputerChoice === "rock") {
            return "User won";
        } else {
            return "Computer won";
        }
    }
}

function playGame() {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
