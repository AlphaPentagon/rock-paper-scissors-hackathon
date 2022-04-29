let playerMove = "rock";
let computerMove = "paper";

if( playerMove === "rock" && computerMove === "scissors"){
    console.log("player wins");
}; 
if( playerMove === "scissors" && computerMove === "paper"){
    console.log("player wins");
}; 
if( playerMove === "paper" && computerMove === "rock"){
    console.log("player wins");
}; 
if(playerMove === computerMove){
    console.log("Its a draw");
}
else{
    console.log("computer wins");
};