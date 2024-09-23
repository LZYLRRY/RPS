// Create random number and picks choice for computer
function getComputerChoice() {
    let rndNumber = Math.random();
    let computerChoice;

    if (rndNumber <= 0.33) {
        computerChoice = 'Rock';
    } else if (rndNumber > 0.33 && rndNumber <= 0.66) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

// Let user pick a choice
function getHumanChoice() {
    let humanChoice = prompt('Please pick your weapon of choice: rock, paper or scissors!');

    // if (humanChoice === null) return 'You quit the game.';

    // if (humanChoice.trim() === '') {
    //     alert('Error. Please pick one of the three options.\nClick cancel if you want to quit.');
    //     return getHumanChoice();
    // }
    if (humanChoice === null) {
        return getHumanChoice();
    }

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock') {
        return 'rock';
    } else if (humanChoice === 'paper') {
        return 'paper';
    } else if (humanChoice === 'scissors') {
        return 'scissors';
    } else {
        alert('Error. Please pick one of the three options.');
        return getHumanChoice();
    }
}

// Global score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log('It\'s a draw!')
        // spanComputer.textContent = ++computerScore
        // spanHuman.textContent = ++humanScore
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose')
        spanComputer.textContent = ++computerScore
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose')
        spanComputer.textContent = ++computerScore
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose')
        spanComputer.textContent = ++computerScore
    } else {
        console.log('You win')
        spanHuman.textContent = ++humanScore
    }



    if (computerScore === 5) {
        alert('You lost!')
        humanScore = 0;
        computerScore = 0;
        spanHuman.textContent = humanScore
        spanComputer.textContent = computerScore
    } else if (humanScore === 5) {
        alert('You won!')
        humanScore = 0;
        computerScore = 0;
        spanHuman.textContent = humanScore
        spanComputer.textContent = computerScore
    }
}



// Global returned variables
let humanChoice;
let computerChoice;

// function playGame() {

// }

// playGame();

// const container = document.querySelector('#container');
// const choice = ['Rock', 'Paper', 'Scissors'];

// // for (let i = 0; i < 3; ++i) {
// //     const btn = document.createElement('button');

// //     btn.textContent = choice[i];
// //     btn.id = choice[i].toLowerCase();
// //     container.appendChild(btn);
// // }

// container.appendChild(div)

const spanComputer = document.querySelector('.computer-score');
const spanHuman = document.querySelector('.human-score');

spanComputer.textContent = computerScore;
spanHuman.textContent = humanScore;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});

