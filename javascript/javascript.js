//Create random number and picks choicefor computer

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



console.log(getComputerChoice())