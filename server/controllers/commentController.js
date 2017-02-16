var mongoose = require('mongoose');
var Comment = mongoose.model('Comment')
var User = mongoose.model('User')

module.exports = (function(){
  return{
    addComment: function(req, res)
      var comment = new Comment(req.body)
      Comment.save(function(err){
        User.findOne({_id: comment._user}, function(err, data){
          data._comments.push(comment._id);
          data.save();
          res.json({status: "true from save comment"})
        })
      })
    },
    addLike: function(req, res){
      Comment.findOne({_id: req.body._id}, function(err, data){
          data.like += 1;
          data.save();
          res.json({status: "I'm counting"})
          // console.log(data.like);
      })
    }
    }
})()
