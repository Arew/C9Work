var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam diam non mi pretium dapibus. Sed vitae enim augue. Aliquam mollis dignissim dictum. Sed interdum felis id dolor congue pulvinar. Nulla scelerisque quis felis non vulputate. Nam mattis velit sit amet quam finibus accumsan. Sed placerat nibh at sem semper pellentesque. Etiam tempus nunc non nibh pulvinar, a sagittis lacus auctor. Sed in semper tellus, at vulputate nulla. Integer a varius est. Aenean eget hendrerit tortor. Cras iaculis lectus non leo eleifend, in feugiat ante viverra. Nam elementum id risus eu luctus. Proin non magna eget mi sodales ultricies."
    },
    {
        name: "Woods Camping",
        image: "https://farm4.staticflickr.com/3487/3753652204_a752eb417d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam diam non mi pretium dapibus. Sed vitae enim augue. Aliquam mollis dignissim dictum. Sed interdum felis id dolor congue pulvinar. Nulla scelerisque quis felis non vulputate. Nam mattis velit sit amet quam finibus accumsan. Sed placerat nibh at sem semper pellentesque. Etiam tempus nunc non nibh pulvinar, a sagittis lacus auctor. Sed in semper tellus, at vulputate nulla. Integer a varius est. Aenean eget hendrerit tortor. Cras iaculis lectus non leo eleifend, in feugiat ante viverra. Nam elementum id risus eu luctus. Proin non magna eget mi sodales ultricies."
    },
    {
        name: "SUCH TENTS",
        image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam diam non mi pretium dapibus. Sed vitae enim augue. Aliquam mollis dignissim dictum. Sed interdum felis id dolor congue pulvinar. Nulla scelerisque quis felis non vulputate. Nam mattis velit sit amet quam finibus accumsan. Sed placerat nibh at sem semper pellentesque. Etiam tempus nunc non nibh pulvinar, a sagittis lacus auctor. Sed in semper tellus, at vulputate nulla. Integer a varius est. Aenean eget hendrerit tortor. Cras iaculis lectus non leo eleifend, in feugiat ante viverra. Nam elementum id risus eu luctus. Proin non magna eget mi sodales ultricies."
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