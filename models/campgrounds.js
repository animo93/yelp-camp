//Schema Setup
var mongoose = require('mongoose');
var campGroundSchema = new mongoose.Schema({
  name : String,
  image : String,
  description : String,
  author : {
    id : {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    username:String
  },
  comments : [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    }
  ]
});

module.exports = mongoose.model("CampGround",campGroundSchema);