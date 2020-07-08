let answer = prompt("Are we there yet?");

while (!answer.includes("yes") && !answer.includes("yeah")) {
    answer = prompt("Are we there yet?")
}