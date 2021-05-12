// create secretNumber
const secretNumber = 4;

// ask user for guess

const stringGuess = prompt("Guess a number");
const guess = Number(stringGuess);

// check if guess is right

if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!!!");
}
// check if guess is higher
else if(guess > secretNumber) {
	alert("too high guess again");
}
// otherwise, check if lower
else {
	alert("too low guess again")
}