/**
 * Created by david on 10/30/16.
 */

var upper = 1000;
var ranNum = ranNumGenerator(upper);
var tries = 0;
var guess = 0;

function ranNumGenerator(upper){
    return Math.floor(Math.random() * upper)+ 1;
}

while (guess !== ranNum) {
    guess = ranNumGenerator(upper);
    tries += 1;
}

document.write('<p>The random number was ' + ranNum + '.</p>');
document.write('<p>It took the computer ' + tries + ' attempts to guess it correctly!</p>');

/* do/while loop version of random number generator

 var randomNumber = getRandomNumber(10);
 var guess;
 var guessCount = 0;
 var correctGuess = false;

 function getRandomNumber( upper ) {
 var num = Math.floor(Math.random() * upper) + 1;
 return num;
 }

 do {
 guess = prompt("I am thinking of a number between 1 and 10. What is it?");
 guessCount += 1;
 if (parseInt(guess) === randomNumber) {
 correctGuess = true;
 }
 } while (! correctGuess)
 document.write("You guessed the correct number " + randomNumber + " . It took you " + guessCount + " attempts!");
 */