//Higher order functions can be used to pass one function to another.

function sing() {
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}

setInterval(sing, 500);

//annonymous function can be to define a function in place as an argument function(){}

setInterval(function() {
    console.log("I am an anonymous function!");
    console.log("This is awesome!");
}, 2000);