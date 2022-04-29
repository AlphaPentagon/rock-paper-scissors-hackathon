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