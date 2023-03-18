const btn = document.querySelectorAll('#button');
let round = 0;
let computerScore = 0;
let userScore = 0;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const roundScore = document.getElementById("round");
const info = document.getElementById("infotext");
const nBar = document.getElementById("notification-bar");

//An array stores the different selections computer and user can get
const selection = ["rock", "paper", "scissors"];


//Computer and User play a round, rock(0) beats scissors(2), scissors(2) beats paper(1) and paper(1) beats rock(0). The winner gets a point and the result is shown
function playRound(userSelection, computerSelection){
    let winnerRound = ""
    if (userSelection === "rock" && computerSelection === "scissors"){
        document.getElementById('notification-bar').setAttribute('class', 'notification is-success is-light has-text-centered');
        info.textContent = `You Won ! ${userSelection} beats ${computerSelection}`;
        return winnerRound = "User";
    } else if (userSelection === "scissors" && computerSelection === "paper"){
        info.textContent = `You Won ! ${userSelection} beats ${computerSelection}`;
        document.getElementById('notification-bar').setAttribute('class', 'notification is-success is-light has-text-centered');
        return winnerRound = "User";
    } else if (userSelection === "paper" && computerSelection === "rock"){
        document.getElementById('notification-bar').setAttribute('class', 'notification is-success is-light has-text-centered');

        info.textContent = `You Won ! ${userSelection} beats ${computerSelection}`;
        return winnerRound = "User";
    } else if (userSelection == computerSelection){
        document.getElementById('notification-bar').setAttribute('class', 'notification is-warning is-light has-text-centered');
        info.textContent = "It's a tie!"
        return "It's a tie!"
    } else {
        document.getElementById('notification-bar').setAttribute('class', 'notification is-danger is-light has-text-centered');
        info.textContent = `You Lose ! ${computerSelection} beats ${userSelection}`;
        return winnerRound = "Computer";
    }
}




//The game loops for 5 rounds. 
//Computer choose its selection, score and round are updated.
function game(){
    for (let i = 0; i === 0; i++){
        computerSelection = selection[Math.floor(Math.random() * selection.length)];
        console.log(`You chose ${userSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        playRound(userSelection, computerSelection)
       if (playRound(userSelection, computerSelection) === "User"){
            userScore += 1;
            round++;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        } else if (playRound(userSelection, computerSelection) === "Computer"){
            computerScore += 1;
            round++;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        } else {
            round++;
            console.log(`Your score is ${userScore}. The computer score is ${computerScore}`)
        }
        pScore.textContent = userScore;
        roundScore.textContent = round;
        cScore.textContent = computerScore;
    }
    //Final winner is announced
    //Reset the game
    if (userScore === 5 || computerScore === 5) {
        if (userScore > computerScore){
        alert(`You are the winner !`);
        reset()

    } else {
        alert(`Sorry, computer wins.`);
        reset()
    }
    }

   
}

function reset () {
    userScore = 0;
    computerScore = 0;
    round = 0;
    info.textContent = "Waiting for your choice";
    pScore.textContent = userScore;
    roundScore.textContent = round;
    cScore.textContent = computerScore;
}



btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === 'Rock'){
            userSelection = 'rock';
        } else if(e.target.textContent === 'Paper'){
            userSelection = 'paper';
        } else if(e.target.textContent === 'Scissors'){
            userSelection = 'scissors';
        } else (console.log('Error in btn.addEventListener'))
        game();
    });
});

