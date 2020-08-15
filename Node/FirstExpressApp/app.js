let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("Hi Steve you are now live!!!!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye");
});

app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.listen(8080, function(){
    console.log("Server has started!");
});

