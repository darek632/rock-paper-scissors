
alert(`The game will be played in the console. Open the console, type: 'playGame()'. A new pop up will appear, initiating the first round of the game.`) //creates a pop telling the user to open the console to start the game. 
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
    let min=1 ; let max=3; // declare minimum and maximum values for random number generator formula.
    let outcome; // local variable for storing the random generation. 
    let result = Math.floor(Math.random() * (max-min +1) + min); // gets random number between default parameters 1 and 3
  
if (result == 1) {
    // console.log(result, outcome);
    outcome = "rock"; 
    return outcome ; } // if result = 1 print 'rock'

else if (result==2) 
    {
        // console.log(result, outcome);
    outcome = "paper";
 return outcome ;} // if result = 2 print 'paper'

else {
    outcome = "scissors" 
    // console.log(result, outcome);;
     return outcome; } ; // else (meaning if result = 3) print 'scissors'
}


function getHumanChoice() {
let human = prompt("What\'s your weapon of choice?", "rock, paper or scissors");
let answer; 
if (human.toLowerCase() == "rock") 
    {answer = 'rock' ; 
        return answer;
    }
else if (human.toLowerCase() == "paper") {
    answer = "paper"; 
    return answer; } 
else if (human.toLowerCase() ==  "scissors") {
    answer = "scissors" ;
    return answer ; }
else  {alert('not a valid choice, please type rock, paper or scissors') ; }
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
        console.log(`It\'s a draw.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
    }

}



// -  The function needs to reset the humanChoice and computerChoice of first round. 
function playGame() { 
    for (var i = 1; i < 6; i++) { // for (var i = 0; i < 5; i++)
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    console.log(`Round ${i} complete.`)
    }
   if (humanScore > computerScore) { 
    return `You win :) Human: ${humanScore} vs Computer: ${computerScore}.` ;
   }
   else if ( humanScore < computerScore) { 
    return `You lose :( Human: ${humanScore} vs. Computer: ${computerScore}` ;
   }
   else if (humanScore == computerScore) {
     return `It\'s a draw :| Human: ${humanScore} vs. Computer: ${computerScore}. No winners today. call the playGame() function to start a new game.` ;
   }
    
  
}


// why is it asking me for my weapon of choice twice for each round, but only noting down the second time. 

   
    // function endResult () {
    //     if (noOfRounds == 5) {
    //          console.log(`Human: ${humanScore} vs. Computer: ${computerScore}. Game over buddy, the scores don\'t lie.`) ;
    //                         }
       
        
    

    // else if (i==5 && computerScore > humanScore) {
    //     console.log`Game over. You lose! Human:${humanScore} vs Computer:${computerScore}`
    // }
    // else if(i==5 && computerScore == humanScore) {
    //     console.log(`Game over. It\'s a draw. Human: ${humanScore} vs computer: ${computerScore}`);
    // }

    
    


// - It then needs to generate a new computerChoice and ask the human again for their choice. 
// - These new choices then need to be passed into playRound function to play a game. 
// - The no. of rounds starts at 0. Each time playRound is played, score goes up by 1. 
// - The steps above will repeat until no. of rounds = 5.
// - When no. of rounds = 5, print result message, including human score and computer score. 



// ask user for choice 
// if rock return rock
// if paper return paper 
// if scissors return scissors






 