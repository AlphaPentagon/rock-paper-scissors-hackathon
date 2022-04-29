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

let result = getWinner("rock", "scissors");