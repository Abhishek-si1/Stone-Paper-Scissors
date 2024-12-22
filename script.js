// Initialize scores
let userScore = 0;
let botScore = 0; 

// Select DOM elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userscore");
const botScorepara = document.querySelector("#botscore");

// Function to show the winner
const showWinner = (userWin, userChoice, botChoice) => {
    if (userWin) {
        msg.innerText = `You Won :), as ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
        userScorepara.innerText = userScore;
    } else {
        msg.innerText = `You Lost :(, as ${botChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
        botScore++;
        botScorepara.innerText = botScore;
    }
}

// Function to handle draw game
const drawGame = () => {
    msg.innerText = "Game Draw, Try Again !!";
    msg.style.backgroundColor = '#081b31';
}

// Function to generate the bot's choice
const genBotChoice = () => {
    const options = ["stone", 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * options.length); 
    return options[randomIdx];
}

// Function to play the game
const playGame = (userChoice) => {
    const botChoice = genBotChoice();

    if (userChoice === botChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === 'stone') {
            userWin = botChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = botChoice === 'scissors' ? false : true;
        } else { 
            userWin = botChoice === 'stone' ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
};

// Set up event listeners for choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
