let age = prompt("Please enter your age:");


if (age < 0) {
    console.log("Error: Age is not valid!");

} else if (age === 21) {
    console.log("happy 21st birthday!!");
} else if (Math.sqrt(age) % 1 === 0) {
    console.log("perfect square!");
} else if (age % 2 != 0) {
    console.log("your age is odd!");
}