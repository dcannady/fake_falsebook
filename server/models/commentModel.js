var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = mongoose.Schema({
    content: {type: String, required: true},
    name: {type: String, required: true},
    like: Number,
    _user: {type: Schema.Types.ObjectId, ref:'User'}
})

mongoose.model('comment', commentSchema)
