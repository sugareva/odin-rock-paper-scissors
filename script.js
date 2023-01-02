
//An array stores the different selections computer and user can get
const selection = ["rock", "paper", "scissors"];
//Computer select rock paper or scissors
const computerSelection = selection[Math.floor(Math.random() * selection.length)];


//Computer and User play a round, rock(0) beats scissors(2), scissors(2) beats paper(1) and paper(1) beats rock(0). The winner gets a point and the result is shown
function playRound(userSelection, computerSelection){

    if (userSelection === "rock" && computerSelection === "scissors"){
        return `You Won ! ${userSelection} beats ${computerSelection}`;
    } else if (userSelection === "scissors" && computerSelection === "paper"){
        return `You Won ! ${userSelection} beats ${computerSelection}`;
    } else if (userSelection === "paper" && computerSelection === "rock"){
        return `You Won ! ${userSelection} beats ${computerSelection}`;
    } else if (userSelection == computerSelection){
        return "It's a tie!"
    } else {
        return `You Lose ! ${computerSelection} beats ${userSelection}`;
    }
}




//The game loops for 5 rounds. 
function game(){
    let computerScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++){
        userSelection = prompt("Will you choose Rock, Paper or Scissors?").toLowerCase()
        console.log(`You chose ${userSelection}`)
        console.log(`Computer chose ${computerSelection}`)
        console.log(playRound(userSelection, computerSelection));
       if (playRound(userSelection, computerSelection).charAt(4) === "W"){
            userScore += 1;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        } else if (playRound(userSelection, computerSelection).charAt(4) === "L"){
            computerScore += 1;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        } else {
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        }
    }
    //Final winner is announced
   if (userScore > computerScore){
    
        return `You are the winner !`
    } else {
        return `You lose.`
    }
}

console.log(game())
