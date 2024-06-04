console.log('Open the console to play rock, paper, scissors') ;

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






 function getComputerChoice() {
    min=1,max=3;
    let outcome; 
    let result = Math.floor(Math.random() * (max-min +1) + min); // gets random number between default parameters 1 and 3
  
if (result == 1) {
    console.log(result, outcome);
    outcome = "rock";
    return outcome ; } // if result = 1 print 'rock'

else if (result==2) 
    {
        console.log(result, outcome);
    outcome = "paper";
 return outcome ;} // if result = 2 print 'paper'

else {
    outcome = "scissors" 
    console.log(result, outcome);;
     return outcome; } ; // else (meaning if result = 3) print 'scissors'
}


function getHumanChoice() {
let human = prompt("What\'s your weapon of choice?", "rock, paper or scissors");
let answer; 
if (human.toLowerCase() === "rock") 
    {answer = 'rock' ; 
        return answer;
    }
else if (human.toLowerCase() === "paper") {
    answer = "paper"; 
    return answer; } 
else if (human.toLowerCase() === "scissors") {
    answer = "scissors" ;
    return answer ; }
else {alert('not a valid choice, please type rock, paper or scissors') ; }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice) { 

    if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You win! Rock beats scissors`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You lose! Paper beats rock.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You win! Paper beats rock.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You lose! Scissors beats paper.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You win! Scissors beats paper.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You lose! Scissors beats rock.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }
    else if (humanChoice == computerChoice) {
        
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`It\'s a draw. Play again.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }





}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


// ask user for choice 
// if rock return rock
// if paper return paper 
// if scissors return scissors






 