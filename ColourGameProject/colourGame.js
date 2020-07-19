let colours = generateRandomColours(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
let colourDisplay = document.getElementById("colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let numSquares = 6;
colourDisplay.textContent = pickedColour;

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colours = generateRandomColours(3);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colours = generateRandomColours(3);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function() {
    //Generate new colours
    colours = generateRandomColours(6);
    //Pick a new random colour from array
    pickedColour = pickColour();
    //Change colour display to match picked colour
    colourDisplay.textContent = pickedColour;
    //Change colours of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "#232323";
})

for (let i = 0; i < squares.length; i++) {

    //Add initial colours to squares
    squares[i].style.backgroundColor = colours[i];

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