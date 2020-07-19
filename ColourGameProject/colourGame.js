let colours = ["RGB(255, 0, 0)", "RGB(255, 255, 0)", "RGB(0, 255, 0)", "RGB(0, 255, 255)", "RGB(0, 0, 255)", "RGB(255, 0, 255)"];
let squares = document.querySelectorAll(".square");
let pickedColour = colours[3];
let colourDisplay = document.getElementById("colourDisplay");
let messageDisplay = document.querySelector("#message");

colourDisplay.textContent = pickedColour;

for (let i = 0; i < squares.length; i++) {

    //Add initial colours to squares
    squares[i].style.backgroundColor = colours[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {

        //Grab colour of picked square
        let clickedColour = this.style.backgroundColor;

        //Compare colour to picked colour
        if (clickedColour === pickedColour.toLowerCase()) {
            alert("Correct!");
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}