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
    // checkPlayerInput(playerMove);       
    // computerMove = getComputerInput(); 
    computerMove = fixOdds(playerMove); //this ensures the computer will always win!
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

// Checks if the player has entered a valid move

function checkPlayerInput(playerMove) {
    let possiblePlayerMoves = ["rock", "paper", "scissors"];
    for (let i = 0; i < possiblePlayerMoves.length; i++) {
        if (playerMove === possiblePlayerMoves[i]) {
            return true;
        }
    }
    alert("That is not a valid move - please enter 'rock', 'paper' or 'scissors");
    playerMove = getPlayerInput();
}
   



//Display outcome of game
function displayOutcome(outcome){

    alert(outcome);
};


// Generates a random computer move
function computerRandom() {

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
            return;
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
        };  
    };
    return false;
};

// capitalises the first letter of the username

function capitaliseName(){

    playerName = playerName[0].toUpperCase()+ playerName.slice(1);
}

// ensures the computer wins 

function computerWin(playerMove) {
    
    let cheatCodes =
        {
            rock: "paper",
            paper: "scissors",
            scissors: "rock"
        };

    return cheatCodes[playerMove];
    };
        
    

    // if gameCount is divisible by n then computer wins, else computer loses e.g.
    // e.g. 2 for 50%, 4 for 25%, 

    // if (gameCount % 10) {
    //     return cheatCodes[1][playerMove];
    // } else {
    //     return cheatCodes[0][playerMove];
    // };


// ensures the computer loses

function computerLose(playerMove) {
    let cheatLoseCodes = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    return cheatLoseCodes[playerMove];
}

// ensures the computer wins n% amount of times, but not always on the same turn
// e.g. computer will win 1 in 4 rounds, but not every 4th round
// this is to give the play some depth

function fixOdds(playerMove) {
    if (gameCount === 0) {
        return computerRandom();
        // if the computer has won less then 25% of the number of
        // games played (ignoring draws)
    } else if ((loseCount / (gameCount - drawCount)) * 100 < 25) {

        // if above is true
        // determines if the next game must be won to ensure that computer
        // always wins n% of times
        if ((gameCount - drawCount + loseCount + 1) % 4 === 0) {
            return computerWin(playerMove);
        }

        // checks if computer has won more than 25% of the number of games
        // played (ignoring draws) and if true then ensures the computer loses
    } else if ((loseCount / (gameCount - drawCount)) * 100 > 25) {
        return computerLose(playerMove);

        // otherwise returns a random computer result
    } else {
        return computerRandom();
    }  
}   

//runs the program
main();

