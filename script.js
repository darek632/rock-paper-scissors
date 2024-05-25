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



function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;


    let randomNumber = (min,max) => Math.floor(Math.random() * (max-min +1) + min) ;
randomNumber(1,3) ;
    if (randomNumber == rock) { return 'Rock';}
    else if (randomNumber == paper) {return 'Paper';}
    else {return 'Scissors' ;}
 }


 function getComputerChoice(min=1,max=3) {
    let result = Math.floor(Math.random() * (max-min +1) + min); // gets random number between default parameters 1 and 3
    console.log(result);
if (result == 1) {return 'Paper' ; } // if result = 1 print 'paper'

else if (result==2) {return 'Scissors' ;} // if result = 2 print 'scissors'
else {return 'Rock'} ; // else (meaning if result = 3) print 'rock'
}

// }
