var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name: "Salmon Creek", image: "http://www.grindtv.com/wp-content/uploads/2015/02/shutterstock_242371765.jpg"},
            {name: "Granite Hill", image: "https://images3.campingworld.com/CampingWorld/portal/outdoor/tent_camping.jpg"},
            {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdIGneybx5fl8AmoaGlldg-cea-fCu0aK7vnUKHOGuvfmz31v"}
       ]; 
       

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
       res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image =req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});