let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.listen(80);