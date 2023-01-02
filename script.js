
//An array stores the different selections computer and user can get
const selection = ["rock", "paper", "scissors"];

//Computer and User play a round, rock(0) beats scissors(2), scissors(2) beats paper(1) and paper(1) beats rock(0). The winner gets a point and the result is shown
function playRound(userSelection, computerSelection){
    let winnerRound = ""
    if (userSelection === "rock" && computerSelection === "scissors"){
        console.log(`You Won ! ${userSelection} beats ${computerSelection}`);
        return winnerRound = "User";
    } else if (userSelection === "scissors" && computerSelection === "paper"){
        console.log(`You Won ! ${userSelection} beats ${computerSelection}`);
        return winnerRound = "User";
    } else if (userSelection === "paper" && computerSelection === "rock"){
        console.log(`You Won ! ${userSelection} beats ${computerSelection}`);
        return winnerRound = "User";
    } else if (userSelection == computerSelection){
        return "It's a tie!"
    } else {
        console.log(`You Lose ! ${computerSelection} beats ${userSelection}`);
        return winnerRound = "Computer";
    }
}




//The game loops for 5 rounds. 
function game(){
    let computerScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++){
        userSelection = prompt("Will you choose Rock, Paper or Scissors?").toLowerCase();
        computerSelection = selection[Math.floor(Math.random() * selection.length)];
        console.log(`You chose ${userSelection}`);
        console.log(`Computer chose ${computerSelection}`);
       if (playRound(userSelection, computerSelection) === "User"){
            userScore += 1;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        } else if (playRound(userSelection, computerSelection) === "Computer"){
            computerScore += 1;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        } else {
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        }
    }
    //Final winner is announced
   if (userScore > computerScore){
    
        return `You are the winner !`;
    } else {
        return `Sorry, the computer wins.`;
    }
}

console.log(game())
