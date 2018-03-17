
var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/cat_app",{useMongoClient: true });
mongoose.connect('mongodb://localhost/advisorDemoTestDB', { useMongoClient: true })

var catSchema = new mongoose.Schema({
  name : String,
  age : Number,
  temperament : String
});

var Cat = mongoose.model("Cat",catSchema);
var george = new Cat({
  name : "George",
  age : "10",
  temperament : "banda"
})
george.save(function(err,cat){
  if(err){
    console.log("Something went wrong "+err);
  }else {
    console.log("Success "+cat);
  }
})
