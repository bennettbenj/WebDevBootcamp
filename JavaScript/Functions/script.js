let number = prompt("Please enter a number")

function isEven(number) {
    if (number % 2 === 0) return true;
    else return false;
}

function factorial(number) {
    if (number === 0) return 1;

    return number * factorial(number - 1);
}

function kebabToSnake(word) {
    return word.replace("-", "_");
}

alert("Even number: " + isEven(number) + "\nFactorial: " + factorial(number));

let str = prompt("Enter a word to convert to snake case");

console.log(kebabToSnake(str));