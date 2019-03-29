


// Variables
//  ================================================================================================

// Possible Answers

var possibleGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Wins, losses, guesses left (user gets 9 guesses) and guesses so far

var win = 0;
var losses = 0;
var guessesLeft =  9;
var guessesSoFar = 0;



// Variables that hold refrences to the HTML that is displayed

var WinsText = document.getElementById("wins-text");
var LossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessesSoFarText = document.getElementById("guesses-so-far");



// Function 
// ================================================================================================

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

        // Determines which key was pressed and also converts it to lower case.
        var userGuess = event.key;
        


        // gets a random number from an array
        var computerChooses = possibleGuesses[Math.floor(Math.random() * possibleGuesses.length)]; 



// Conditionals  
// ================================================================================================ 



// Only uses letter keys

if (event.keyCode >=65 && event.keyCode<= 90 ) {

    // If the user choose the right letter that the computer chose. 
if (userGuess===computerChooses) {
    alert("You got it! The letter was " + computerChooses);
    win++; guessesSoFar=0;guessesLeft=9;
}


// If the user runs out of guesses
if (guessesLeft === 0) {
    // alert("No more guesses left!");
    // alert("I was thinking of the letter " + computerChooses);
    guessesLeft=10; losses++; guessesSoFar=-1;
    alert("You lose! I was thinking of the lesster " + computerChooses);
    
}


// If what you user chooses is not in the array
if (computerChooses.indexOf(userGuess)===-1) {
    ; guessesSoFar++; guessesLeft--;
}




}
 


// End of event 
// ================================================================================================





// Updating HMTL Screen: Display the user and computer guesses 
// ================================================================================================
guessesLeftText.textContent = "You have: " + guessesLeft + " guesses left";
guessesSoFarText.textContent= "You've guessed: " + guessesSoFar + " times";
LossesText.textContent= "Loses: " + losses;
WinsText.textContent="Wins: " + win;


 }



 









 










