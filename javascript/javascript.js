//Create random number and picks choice for computer

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

//Let user pick a choice

function getHumanChoice() {
    let humanChoice = prompt('Please pick your weapon of choice: rock, paper or scissors!\nClick cancel if you want to quit.');

    if (humanChoice === null) return 'You quit the game.'
    
    if (humanChoice.trim() === '') {
        alert('Error. Please pick one of the three options.\nClick cancel if you want to quit.');
        return getHumanChoice();
    }

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock') {
        return 'Rock';
    } else if (humanChoice === 'paper') {
        return 'Paper';
    } else if (humanChoice === 'scissors') {
        return 'Scissors';
    } else {
        alert('Error. Please pick one of the three options.\nClick cancel if you want to quit.');
        return getHumanChoice();
    }
}

console.log(getHumanChoice())