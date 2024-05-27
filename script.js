console.log('Hello world') ;

// write a code that will randomly return rock paper or scissors 


// function getComputerChoice() {
//     assing numbers 1-3 to each outcome
//     pick a random number between one and three
//     return the outcome associated to that number ;

// }

// function getComputerChoice() { 
//     let rock = 1;
//     let paper = 2;
//     let scissors = 3;
//     Math.random(1,3);






 function getComputerChoice(min=1,max=3) {
    let result = Math.floor(Math.random() * (max-min +1) + min); // gets random number between default parameters 1 and 3
  
if (result == 1) {return "rock" ; } // if result = 1 print 'rock'

else if (result==2) {return 'paper' ;} // if result = 2 print 'paper'
else {return 'scissors'} ; // else (meaning if result = 3) print 'scissors'
}


function getHumanChoice() {
let human = prompt("What\'s your weapon of choice?", "rock, paper or scissors");

if (human.toLowerCase() === "rock") 
    {return "rock" ; }
else if (human.toLowerCase() === "paper") {
    return "paper" ; } 
else if (human.toLowerCase() === "scissors") {
    return "scissors" ; }
else {alert('not a valid choice, please type rock, paper or scissors') ; }
}

let humanScore = 0;
let computerScore = 0;




// ask user for choice 
// if rock return rock
// if paper return paper 
// if scissors return scissors






 