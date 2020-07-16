let button = document.addEventListener("click", function() {
    if (document.body.style.background === "white") {
        document.body.style.background = "blue";
    } else {
        document.body.style.background = "white";
    }
});