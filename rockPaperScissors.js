// console.log("My first JS file linked to HTML");
function getComputerChoice() {
    //To randomly return either rock, paper or scissors:

    // Return randomly a number between 1 and 3 included
    let numericChoise = Math.floor(Math.random()*3) + 1; // Numero aleatorio entre [,3[
    // let computerChoise;
    // Associate each number with rock, paper or scissors
    switch (numericChoise) {
        case 1:// If the number is 1 then computerChoise is rock
            return "Rock"
            break;
        case 2:// If the number is 2 then computerChoise is paper
            return "Paper"
            break;
        case 3:// If the number is 3 then computerChoise is scissors
            return "Scissors"
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    // Take player selection and make it case-insensitive
    // Define winner
    // Compare playerSelection with computer Selection
    // if player choose rock:
        //computerSelection is paper ? player wins
        //else computer wins
    // if player choose paper
        //computerSelection is rock? player wins
        //else computer wins
    // if player choose scissors
        //computerSelection is paper? player wins
        //else computer wins
  }