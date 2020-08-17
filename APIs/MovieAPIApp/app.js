let express = require("express");
let request = require("request");
let app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    
    console.log(url);
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body);
            console.log(data);
            res.render("results", {data: data});
        }
    });
});

app.listen(8080, function(){
    console.log("Movie app has started!!!");
});