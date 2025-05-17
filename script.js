console.log("Game has begun!");

//Keeping score
let humanScore = 0;
let computerScore = 0;
const btn = document.querySelector("#choice");


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

    console.log("Score: [Computer - "+ computerScore +"] [Player - "+ humanScore +"]");
}

//Event listeners for button
btn.addEventListener("click", function(e) {
    console.log(e.target.textContent);
    playRound(getComputerChoice(), e.target.textContent); // "e" is the div, target is the button clicked, textContent is the text of that button (think bubbling)
    if(humanScore === 5 || computerScore === 5){
        if (computerScore > humanScore){
            console.log("Computer wins! Better luck next time.");
        }
        else {
            console.log("You win! Thank you for playing.");
        }
        computerScore = 0;
        humanScore = 0;
    }
});