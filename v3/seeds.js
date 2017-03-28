var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "blah blah blah"
    },
    {
        name: "Woods Camping",
        image: "https://farm4.staticflickr.com/3487/3753652204_a752eb417d.jpg",
        description: "blah blah blah"
    },
    {
        name: "SUCH TENTS",
        image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
        description: "blah blah blah"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("ADDED A CAMPGROUND!");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was Internet", 
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                //added a comment    
                                console.log("Created new comment");
                                campground.comments.push(comment);
                                campground.save();
                            }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;