let userScore = document.querySelector('#userScore'),
    computerScore = document.querySelector('#computerScore'),
    buttons = Array.from(document.querySelectorAll('button')),
    display = document.querySelector('#result'),
    buttonsDiv = document.querySelector('.buttons'),
    numericalUserScore = 0,
    numericalCpuScore = 0,
    numericalRound = 0,
    images = document.querySelectorAll('img')

    
    console.log(images[0].attributes['src'])

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
function endGame(){
    buttonsDiv.classList.toggle('hidden')
    if(numericalUserScore > numericalCpuScore){
        return 'Congratulations, you won'
    }else if(numericalUserScore == numericalCpuScore){
        return "It's a tie !"
    }else{
        return 'Game over'
    }
}


function playRound(playerSelection, computerSelection) {
    // console.log('Starting a round')
    // Take player selection and make it case-insensitive
    playerSelection = playerSelection.toLowerCase()
    

    if(numericalRound == 5){
        buttonsDiv.classList.toggle('hidden')
        if(numericalUserScore > numericalCpuScore){
            return 'Congratulations, you won'
        }else if(numericalUserScore == numericalCpuScore){
            return "It's a tie !"
        }else{
            return 'Game over'
        }
    }else{
        numericalRound += 1
        switch (playerSelection) {
        case computerSelection.toLowerCase()://If are equals then ties!
            return `It's a draw ${playerSelection} ties ${computerSelection}`;
            break;
        case "rock": // if player choose rock
            //computerSelection is paper? player wins
            if (computerSelection == 'Scissors') {
                numericalUserScore += 1
                userScore.textContent = numericalUserScore

                return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                numericalCpuScore += 1
                computerScore.textContent = numericalCpuScore;
                return `You lose! ${computerSelection} beats ${playerSelection}`};
            break;
        case "paper": // if player choose paper
            if (computerSelection == 'Rock') {
                numericalUserScore += 1
                userScore.textContent = numericalUserScore
                return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                numericalCpuScore += 1
                computerScore.textContent = numericalCpuScore;
                return `You lose! ${computerSelection} beats ${playerSelection}`};
            break;
        case "scissors": // if player choose scissors
            if (computerSelection == 'Paper') {
                numericalUserScore += 1
                userScore.textContent = numericalUserScore
                return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                numericalCpuScore += 1
                computerScore.textContent = numericalCpuScore;
                return `You lose! ${computerSelection} beats ${playerSelection}`
            };
            break;
        default:
            break;
    }


    }
    
    
        

    

   
  
    
    
}       


for(let btn of buttons){
    
    btn.addEventListener('click',() =>{
        let cpuChoice = getComputerChoice();

        display.textContent = playRound(btn.textContent,cpuChoice)
        if(numericalRound == 5){
            display.textContent = endGame()

        }
        

    })
    // console.log(btn)
}