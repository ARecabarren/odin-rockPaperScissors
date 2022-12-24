console.log("My first JS file linked to HTML");
function getComputerChoice(params) {
    //To randomly return either rock, paper or scissors:

    // Return randomly a number between 1 and 3 included
    let numericChoise = Math.floor(Math.random()*3) + 1; // Numero aleatorio entre [,3[
    // let computerChoise;
    console.log(numericChoise);
    // Associate each number with rock, paper or scissors
    switch (numericChoise) {
        case 1:// If the number is 1 then computerChoise is rock
            return "rock"
            break;
        case 2:// If the number is 2 then computerChoise is paper
            return "paper"
            break;
        case 3:// If the number is 3 then computerChoise is scissors
            return "scissors"
        default:
            break;
    }


}
console.log(getComputerChoice())
