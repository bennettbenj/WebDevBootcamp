let express = require ("express");
let app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});


app.get("/fallinlovewith/:thing", function(req, res){
    let thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
    
});

app.get("/posts", function(req, res){
    let posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];

    res.render("posts.ejs", {posts: posts});
    
});


app.listen(8080, function(){
console.log("Server is listening!!!");
});