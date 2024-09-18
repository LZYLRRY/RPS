function getComputerChoice() {
    let rndNumber = Math.random();
    let computerChoice;
    console.log(rndNumber);

    if (rndNumber <= 0.33) {
        computerChoice = 'Rock';
    } else if (rndNumber > 0.33 && rndNumber <= 0.66) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Please pick your weapon of choice: rock, paper, or scissors!');

    if (!humanChoice) {
        alert('Error. Please pick one of the three options.');
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
        alert('Error. Please pick one of the three options.');
        return getHumanChoice(); // Recursively call until valid input is given
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
