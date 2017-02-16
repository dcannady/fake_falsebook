var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports=(function(){
  return {
    addUser: function(req, res){
          var user = new User(req.body);
          // User ties into var User above.
          user.save(function(err){
            if(err){
              console.log("error occurred...");
            }
            else{
              console.log("success");
            }
          })
    },
    getUsers:function(req,res){
      User.find({}, function(err, data){
        if(err){
          console.log("error...");
        }
        else{
          console.log(data);
          // ready to go to front-end with res.json
          res.json(data);
        }

      })
    },
  //   delete: function(req, res){
  //     User.findOne({_id: req.body.id}, function(err, data){
  //       User.remove(data)
  //
  //   })
  // },
  //   showOne:function(req, res){
  //     console.log(req.params.id);
  //     User.findOne({_id: req.params.id})
  //       .populate("_comments")
  //       .exec(function(err, data){
  //         res.json(data)
  //       })
  //   }
   }
})()
