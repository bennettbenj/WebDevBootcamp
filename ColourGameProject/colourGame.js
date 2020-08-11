let numSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourDisplay = document.getElementById("colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected")

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {

            //Grab colour of picked square
            let clickedColour = this.style.backgroundColor;

            //Compare colour to picked colour
            if (clickedColour === pickedColour.toLowerCase()) {
                messageDisplay.textContent = "correct";
                resetButton.textContent = "Play Again?";
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }

    reset();
}



function reset() {
    //Generate new colours
    colours = generateRandomColours(numSquares);
    //Pick a new random colour from array
    pickedColour = pickColour();
    //Change colour display to match picked colour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours"
    messageDisplay.textContent = "";
    //Change colours of squares
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function() {
    reset();
})


function changeColours(colour) {
    //Loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //Change each colour to match given colour
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    let randomNum = Math.floor(Math.random() * colours.length);
    return colours[randomNum];
}

function generateRandomColours(num) {
    //Make an array
    let colours = []

    //Add num random colours to array
    for (let i = 0; i < num; i++) {
        //Get random colour and push in to array
        colours.push(randomColour());
    }
    //Return that array
    return colours;
}

function randomColour() {
    //Pick a red from 0 - 255
    let red = Math.floor(Math.random() * 256);
    //Pick a green from 0 - 255
    let green = Math.floor(Math.random() * 256);
    //Pick a blue from 0 - 255
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}