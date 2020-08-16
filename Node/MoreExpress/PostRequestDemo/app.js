let express = require("express");
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.set("view engine", "ejs");

let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){

    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    let newfriend = req.body.newfriend;
    console.log(newfriend);
    friends.push(newfriend);
    res.redirect("/friends");
})

app.listen(8080, function(){
    console.log("Server started");
});