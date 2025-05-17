console.log("Game has begun!");

//Computer Logic
let getComputerChoice = () => {
    let randomNum = Math.random();
    let compChoice = "unplayed";
    if (randomNum <= 1/3){
        compChoice = "ROCK";
    }
    else if (randomNum > 1/3 && randomNum <= 2/3){
        compChoice = "PAPER";
    }
    else {
        compChoice = "SCISSORS";
    }
    return (compChoice);
}

//Human Logic
let getHumanChoice = () =>{
    let humanChoice = prompt("Enter \"Rock\", \"Paper\" or \"Scissors\"");
    return humanChoice;
}


//Game Logic
let playGame = () =>{

    //Keeping score
    let humanScore = 0;
    let computerScore = 0;

    //Round Logic
    let playRound = (compChoice, humanChoice) => {
        console.log("Computer has played: " + compChoice);
        console.log("Player has played: " + humanChoice.toUpperCase());

        //If both play the same
        if (compChoice === humanChoice.toUpperCase()){ 
            console.log("Round is a tie!");
        }
        //If computer wins
        else if ((compChoice === "ROCK" && humanChoice.toUpperCase() === "SCISSORS") ||
                (compChoice === "PAPER" && humanChoice.toUpperCase() === "ROCK") ||
                (compChoice === "SCISSORS" && humanChoice.toUpperCase() === "PAPER")){
            console.log("You lose! Computer beats "+ humanChoice.toUpperCase() +" with "+ compChoice +"!");
            computerScore++;
        }
        //If player wins
        else {
            console.log("You win! Player beats "+ compChoice +" with "+ humanChoice.toUpperCase() +"!");
            humanScore++;
        }
    }

    
    playRound(getComputerChoice(), getHumanChoice());
    console.log("Score: [Computer - "+ computerScore +"] [Player - "+ humanScore +"]");
    

    console.log("End of the game!")
    if (computerScore == humanScore){
        console.log("The game is a tie! Thank you for playing.");
    }
    else if (computerScore > humanScore){
        console.log("Computer wins! Better luck next time.");
    }
    else {
        console.log("You win! Thank you for playing.");
    }
}

//Start the game
playGame();