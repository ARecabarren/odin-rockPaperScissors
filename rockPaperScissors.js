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
    playerSelection = playerSelection.toLowerCase()
    // Define winner
    // Compare playerSelection with computer Selection
    switch (playerSelection) {
        case computerSelection.toLowerCase()://If are equals then ties!
            return `It's a draw ${playerSelection} ties ${computerSelection}`;
            break;

        case "rock": // if player choose rock
            //computerSelection is paper? player wins
            if (computerSelection == 'Scissors') {
                return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {return `You lose! ${computerSelection} beats ${playerSelection}`};
            break;
        case "paper": // if player choose paper
            if (computerSelection == 'Rock') {
                return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {return `You lose! ${computerSelection} beats ${playerSelection}`};
            break;
        case "scissors": // if player choose scissors
            if (computerSelection == 'Paper') {
                return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection}`
            };
            break;
        default:
            break;
    }
}       
// //Testing winning cases
// console.log(playRound("Rock","Scissors"));
// console.log(playRound("Paper","Rock"));
// console.log(playRound("Scissors","Paper"));
// //Testing loser cases
// console.log(playRound("Rock","Paper"));
// console.log(playRound("Paper","Scissors"));
// console.log(playRound("Scissors","Rock"));
// //Testing ties
// console.log(playRound("Scissors","Scissors"));
// console.log(playRound("Rock","Rock"));
// console.log(playRound("Paper","Paper"));

function game() {
    
    let playerRecord = 0, 
        computerRecord = 0;
    for (let i = 0; i < 5; i++) {
        //Get player weapons
        let playerSelection = prompt("Choose your weapons: ").toLowerCase();
        //Get computer choise
        let computerChoice = getComputerChoice()
        //Check the result
        let result = playRound(playerSelection,computerChoice)
        
        //Register the points
        if(result == `You win! ${playerSelection} beats ${computerChoice}`){
            playerRecord += 1;
        } else if (result == `You lose! ${computerChoice} beats ${playerSelection}`){
            computerRecord += 1;
        }
        //Display the result
        console.log(result);
        console.log(`You ${playerRecord} points`);
        console.log(`Computer ${computerRecord} points`);
    }
    // Advise the winner
    if (computerRecord > playerRecord) {
        console.log('You lost')
    } else if (computerRecord < playerRecord){
        console.log('You won')
    } else {
        console.log("It's a tie!")
    }
}

let buttons = Array.from(document.querySelectorAll('button')); 

for(let btn of buttons){
    btn.addEventListener('click',() => {console.log(`I'm the ${btn.textContent} button`)})
    console.log(btn)
}

// buttons.forEach(button => {
//     // console.log(`button  ${button.textContent}`);
//     let computer = getComputerChoice()
//     let user = button.textContent
//     button.addEventListener('click',playRound(user,computer))
// })


// rock.addEventListener('click',playRound(rock.textContent,getComputerChoice()))

