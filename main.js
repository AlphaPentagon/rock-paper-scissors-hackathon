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
    gameCount++;
    if( player1 === "rock" && player2 === "scissors" ||
        player1 === "scissors" && player2 === "paper" ||
        player1 === "paper" && player2 === "rock" ){            
            winCount++;
            return `${playerName}'s ${player1} beat computers ${player2}`;    
    }else if(player1 === player2){
        drawCount++;
        return `${playerName}'s ${player1} drew against computers ${player2}`;
    }else{
        loseCount++;
        return `${playerName}'s ${player1} lost against computers ${player2}`;
    };    
}
/* used for ticket 2, not needed now
let result = getWinner("rock", "scissors");
*/

//Ticket 3

//To ask for player move
function getPlayerInput(){

    return prompt(`Please input your move ${playerName}`);
};

//Display outcome of game
function displayOutcome(outcome){

    alert(outcome);
};

//Calls all needed functions
let gameCount = 0;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;
let playerName;

function main(){
    let playerMove;
    let computerMove;
    let result;
    let gamePlaying = true;
    

    while(gamePlaying ===true){

    getplayerName();
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

    let possibleMoves = ["rock", "paper", "scissors"];   
    let randomNum = Math.floor(Math.random() * 3);    
    return possibleMoves[randomNum];
}

//Ticket 5

//Checks if the player would like to keep playing 
function confirmCheck(){
    
    return confirm(`Games played: ${gameCount}\nWins: ${winCount}\nLosses: ${loseCount}\nDraws: ${drawCount}\nDo you wish to play again ${playerName}?`)
}

//Ticket 7 
function getplayerName(){

    let approvedFirstLetter = false;

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    playerName = prompt("Please input your User Name. This should be no more than 10 characters and must start with a letter");

    

        
    playerName = prompt("Sorry that is not a valid User Name! The first character of your User Name MUST BE A LETTER!");
       
    playerName = prompt("Sorry that is not a valid User Name! Please input a User Name LESS THAN 10 CHARACTERS!");
    return playerName;
}
//checks name length
function checkNameLength(){
    
    if(playerName.length<10){
        return true;
    }
    return false;
}

//checks first character is a letter
function checkFirstLetter(){

    for (let i = 0; i < alphabet.length; i++) {
            
        if (alphabet[i] === playerName[0].toLowerCase()) {           
            return true;                  
        }   
    }
    return false;
}

//Bonus 1



//runs the program
main();






