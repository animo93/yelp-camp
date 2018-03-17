var express = require('express');
var router = express.Router();
var CampGround = require("../models/campgrounds");
var middleware = require("../middleware");

router.get("/",function(req,res){
  CampGround.find({},function(err,allcampGrounds){
    if(err){
      console.log(err);
    }else{
      res.render("campgrounds/campgrounds",{campGrounds:allcampGrounds, currentUser:req.user});
    }
  })
  //res.render("campgrounds",{campGrounds:campGrounds});
})

router.post("/",middleware.isLoggedIn,function(req,res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
	var author = {
		id:req.user._id,
		username:req.user.username
	};
  var newCampGround = {name:name,image:image,description:desc,author:author};
  //campGrounds.push(newCampGround);
  CampGround.create(newCampGround,function(err,newlyCreated){
    if(err){
      console.log("error is "+err);
			res.redirect("/campgrounds");
    }else {
      res.redirect("/campgrounds");
    }
  })
  
});

router.get("/new",middleware.isLoggedIn,function(req,res){
  res.render("campgrounds/new");
});

router.get("/:id",function(req,res){
  var id = req.params.id;
  CampGround.findById(id).populate("comments").exec(function(err,foundCampGround){
    if(err){
      console.log(err);
    }
    else{
      res.render("campgrounds/show",{campGround:foundCampGround});
    }
  });
});

router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
		CampGround.findById(req.params.id,function(err,foundCampground){
			res.render("campgrounds/edit",{campground:foundCampground})	
	})
	
});

router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
	CampGround.findByIdAndUpdate(req.params.id, req.body.campground, function(err,updatedCampground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
});

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
	CampGround.findByIdAndRemove(req.params.id,function(err){
		if(err){
			console.log(err);
		}
		res.redirect("/campgrounds");
	})
});


module.exports = router;