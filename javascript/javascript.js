// Create random number and picks choice for computer
function getComputerChoice() {
    let rndNumber = Math.random();
    let computerChoice;

    if (rndNumber <= 0.33) {
        computerChoice = 'rock';
    } else if (rndNumber > 0.33 && rndNumber <= 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// Let user pick a choice
function getHumanChoice() {
    let humanChoice = prompt('Please pick your weapon of choice: rock, paper or scissors!\nClick cancel if you want to quit.');

    if (humanChoice === null) return 'You quit the game.';

    if (humanChoice.trim() === '') {
        alert('Error. Please pick one of the three options.\nClick cancel if you want to quit.');
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
        alert('Error. Please pick one of the three options.\nClick cancel if you want to quit.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a draw!')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose')
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose')
        computerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose')
        computerScore++
    } else {
        console.log('You win')
        humanScore++
    }

    // console.log(humanScore);
    // console.log(computerScore);
}

// Global score variables
let humanScore = 0;
let computerScore = 0;

// Global returned variables
let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()





