let secretNumber = 4;

let guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT");
} else if (guess > secretNumber) {
    alert("Guess too high!");
} else {
    alert("Guess is too low!");
}