var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
  // creating the database
  name: {type:String, required: true},
  age: {type: Number, require: true},
  _comments:[{type: Schema.Types.ObjectId, ref:'Comment'}]
}, {timestamps:true})

mongoose.model('User', userSchema)
