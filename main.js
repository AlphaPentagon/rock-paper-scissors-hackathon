// Ticket 1 

/*

let playerMove = "paper";
let computerMove = "scissors";

if( playerMove === "rock" && computerMove === "scissors"){
    console.log("player wins");
}else if( playerMove === "scissors" && computerMove === "paper"){
    console.log("player wins");
}else if( playerMove === "paper" && computerMove === "rock"){
    console.log("player wins");
}else if(playerMove === computerMove){
    console.log("Its a draw");
}else{
    console.log("computer wins");
}; 

*/

//Ticket 2
//Works out who wins
function getWinner(player1, player2) {
    if( player1 === "rock" && player2 === "scissors"){
        return 1;
    }else if( player1 === "scissors" && player2 === "paper"){
        return 1;
    }else if( player1 === "paper" && player2 === "rock"){
        return 1;
    }else if(player1 === player2){
        return 0;
    }else{
        return -1;
    };
}
/* used for ticket 2, not needed now
let result = getWinner("rock", "scissors");
*/

//Ticket 3

//To ask for player move
function getPlayerInput(){

    return prompt("Please input your move");
};

//Display outcome of game
function displayOutcome(outcome){

    alert(outcome);
};

//Calls all needed functions
function main(){
    let playerMove;
    let computerMove;
    let result;
    let gamePlaying = true;

    while(gamePlaying ===true){

    playerMove = getPlayerInput();
    computerMove = getComputerInput();
    result = getWinner(playerMove, computerMove);
    displayOutcome(result);
    gamePlaying = confirmCheck();    
    }

};

// Ticket 4

// Generates a random computer move
function getComputerInput() {

    let computerMoves = ["rock", "paper", "scissors"];   
    let randomNum = Math.floor(Math.random() * 3);
    console.log(computerMoves[randomNum]); // This is so we can view the computerMove in the console for testing
    return computerMoves[randomNum];
}

//Ticket 5

//Checks if the player would like to keep playing 
function confirmCheck(){
    
    return confirm("Do you wish to play again?")
}

//runs the program
main();






