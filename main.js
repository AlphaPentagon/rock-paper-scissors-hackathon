//initiates shared variables 
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

// call functions for player name

    getPlayerName();
    capitaliseName();
    
//game loop to call all necessary functions
    while(gamePlaying ===true){
    
    playerMove = getPlayerInput();
    computerMove = getComputerInput();
    result = getWinner(playerMove, computerMove);
    displayOutcome(result);
    gamePlaying = confirmCheck(); 

    };

};



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

//To ask for player move
function getPlayerInput(){

    return prompt(`Please input your move ${playerName}`);
};

//Display outcome of game
function displayOutcome(outcome){

    alert(outcome);
};


// Generates a random computer move
function getComputerInput() {

    let possibleMoves = ["rock", "paper", "scissors"];   
    let randomNum = Math.floor(Math.random() * 3);    
    return possibleMoves[randomNum];

};

//Checks if the player would like to keep playing 
function confirmCheck(){
    
    return confirm(`Games played: ${gameCount}\nWins: ${winCount}\nLosses: ${loseCount}\nDraws: ${drawCount}\nDo you wish to play again ${playerName}?`);
};


//two seperate checks for unique error message 
function getPlayerName(){

    let validName = false;

    playerName = prompt("Please input your User Name. This should be no more than 10 characters and must start with a letter");

    while(validName ===false){

        while(checkFirstLetter() === false){

            playerName = prompt(`Sorry that is not a valid User Name! The first character of your User Name MUST BE A LETTER!\n\nPlease enter a valid user name`);
       
        };
        while(checkNameLength() === false){

            playerName = prompt(`Sorry that is not a valid User Name! Please input a User Name LESS THAN 10 CHARACTERS!\n\nPlease enter a valid user name`);
        
        };
        if(checkFirstLetter() === true && checkNameLength() === true){
            return
        };
    };
};

//checks name length
function checkNameLength(){
    
    if(playerName.length<10){
        return true;
    }
    return false;
};

//checks first character is a letter
function checkFirstLetter(){

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (let i = 0; i < alphabet.length; i++) {
            
        if (alphabet[i] === playerName[0].toLowerCase()) {           
            return true;                  
        } ;  
    };
    return false;
};

function capitaliseName(){

    playerName = playerName[0].toUpperCase()+ playerName.slice(1);
}

//runs the program
main();






