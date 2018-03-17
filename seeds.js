var mongoose = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment = require('./models/comments')
var data = [
  {
    name:"Clody jagah",
    image:"https://holidaysgenius.com/media/uploads/2016/04/camping_at_night.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, velit vel interdum varius, urna odio faucibus leo, nec pretium eros nulla vitae diam. Aliquam sit amet mi nisl. Mauris et odio volutpat eros rhoncus volutpat. Aliquam tristique lacinia diam, vel efficitur dui tempor auctor. Quisque maximus viverra ante id vehicula. Cras maximus, elit eu consectetur tristique, tortor massa feugiat nisi, quis tincidunt turpis mi sit amet dolor. Nulla lobortis maximus augue, sed pretium nulla sodales id. Vestibulum nec maximus leo. Nullam lacus mauris, interdum ac massa non, vestibulum ultrices lacus."
  },
  {
    name:"Clody jagah",
    image:"https://holidaysgenius.com/media/uploads/2016/04/camping_at_night.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, velit vel interdum varius, urna odio faucibus leo, nec pretium eros nulla vitae diam. Aliquam sit amet mi nisl. Mauris et odio volutpat eros rhoncus volutpat. Aliquam tristique lacinia diam, vel efficitur dui tempor auctor. Quisque maximus viverra ante id vehicula. Cras maximus, elit eu consectetur tristique, tortor massa feugiat nisi, quis tincidunt turpis mi sit amet dolor. Nulla lobortis maximus augue, sed pretium nulla sodales id. Vestibulum nec maximus leo. Nullam lacus mauris, interdum ac massa non, vestibulum ultrices lacus."
  },
  {
    name:"Clody jagah",
    image:"https://holidaysgenius.com/media/uploads/2016/04/camping_at_night.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, velit vel interdum varius, urna odio faucibus leo, nec pretium eros nulla vitae diam. Aliquam sit amet mi nisl. Mauris et odio volutpat eros rhoncus volutpat. Aliquam tristique lacinia diam, vel efficitur dui tempor auctor. Quisque maximus viverra ante id vehicula. Cras maximus, elit eu consectetur tristique, tortor massa feugiat nisi, quis tincidunt turpis mi sit amet dolor. Nulla lobortis maximus augue, sed pretium nulla sodales id. Vestibulum nec maximus leo. Nullam lacus mauris, interdum ac massa non, vestibulum ultrices lacus."
  }
]

function seedDB(){
  Campground.remove({},function(err){
  if(err){
    console.log(err)
  }else{
    /*console.log("Campgrounds removed");
    data.forEach(function(seed){
    Campground.create(seed,function(err,data){
      if(err){
        console.log(err);
      }else{
        console.log("added a campground");
        Comment.create(
          {
            text:"This place sucks",
            author:"Mu"
          },function(err,comment){
            if(err){
              console.log(err);
            }else{
              data.comments.push(comment);
              data.save();
            }
          });
      }
    });
  });*/
  }
});
  
}

module.exports = seedDB;

