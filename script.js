
// alert(`The game will be played in the console. Open the console, type: 'playGame()'. A new pop up will appear, initiating the first round of the game.`) //creates a pop telling the user to open the console to start the game. 
// // write a code that will randomly return rock paper or scissors 


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


// I am adding this line so I can try out multi line commit message in VSCode.




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

let humanChoice ;
let computerChoice;


function playRound (humanChoice,computerChoice) { 

    const scores = document.querySelector("#scores");

    if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You win! Rock beats scissors`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;
        
        const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    You win! Rock beats scissors. Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    
        
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You lose! Paper beats rock.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;

        const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    You lose! Paper beats rock. Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You win! Paper beats rock.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;

       const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    You win! Paper beats rock. Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You lose! Scissors beats paper.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;

        const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    You lose! Scissors beats paper. Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You win! Scissors beats paper.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;

       const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    You win! Scissors beats paper. Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    }
    
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`You lose! Scissors beats rock.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;

        const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    You lose! Scissors beats rock. Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    }
    else if (humanChoice == computerChoice) {
        
        console.log(`You chose ${humanChoice}. The computer chose ${computerChoice}.`) ;
        console.log(`It\'s a draw.`);
        console.log(`Your score: ${humanScore}. Computer score: ${computerScore}.`) ;

        const para = document.createElement("p");
        para.textContent = `You chose ${humanChoice}. The computer chose ${computerChoice}.
    It\'s a draw.Your score: ${humanScore}. Computer score: ${computerScore}. `;
    scores.appendChild(para);
    }
showScore();
}


function showScore () { 
    const finalScore = document.createElement("h3");
    let finalResult;

    if (humanScore === 5) { 
finalResult = `You win :) Human: ${humanScore} vs Computer: ${computerScore}.` ; 
    }
    else if (computerScore === 5) { 
        finalResult = `You lose :( Human: ${humanScore} vs Computer: ${computerScore}.`;
    }

    finalScore.textContent = finalResult;
    scores.appendChild(finalScore);
}
// function playGame() { 

//    if (humanScore > computerScore) { 
//     return `You win :) Human: ${humanScore} vs Computer: ${computerScore}.` ;
//    }
//    else if ( humanScore < computerScore) { 
//     return `You lose :( Human: ${humanScore} vs. Computer: ${computerScore}` ;
//    }
//    else if (humanScore == computerScore) {
//      return `It\'s a draw :| Human: ${humanScore} vs. Computer: ${computerScore}. No winners today. call the playGame() function to start a new game.` ;
//    }
    
  
// }

// let rockBtn = document.querySelector("#rock");
// let paperBtn = document.querySelector("#paper");
// let scissorsBtn = document.querySelector("#scissors");

let buttons = document.querySelector(".button-holder");

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id)  { 
        case "rock" : 
            humanChoice = "rock";
            
            break;
        case "paper" : 
            humanChoice = "paper";
            break;
        case "scissors" : 
            humanChoice = "scissors";
           
    }
    if (humanChoice) {
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
} )

// function handleRock() { 
//     humanChoice = "rock";
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice,computerChoice) ;
// }

// function handlePaper() { 
//     humanChoice = "paper";
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice,computerChoice) ;
// }

// function handleScissors() { 
//     humanChoice = "scissors";
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice,computerChoice) ;
// }

// rockBtn.addEventListener("click", handleRock); 
// paperBtn.addEventListener("click", handlePaper);
// scissorsBtn.addEventListener("click", handleScissors);

    
    









 