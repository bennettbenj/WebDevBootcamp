let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal", function(req, res){
    if(req.params.animal === "pig") res.send("The pig says 'Oink'");
    if(req.params.animal === "cow") res.send("The cow says 'Moo'");
    if(req.params.animal === "dog") res.send("The dog says 'Woof Woof!'");
});

app.get("/repeat/:word/:num", function(req, res){
    let str = "";

    if(req.params.word === "hello"){
        for (let i = 0; i < req.params.num; i++) {   
        str += "hello "     
        }
    }
    if(req.params.word === "blah"){
        for (let i = 0; i < req.params.num; i++) {
            str += "blah "
        }
    }
    res.send(str);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with you life");
});

app.listen(8080, function(){
    console.log("Server has started!");
});
