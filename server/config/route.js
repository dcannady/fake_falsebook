var user = require('./../controllers/userController.js')

module.exports=function(app){
  // req - request, res - response
  app.post('/user/add', function(req, res){
    console.log('Mike')
    user.addUser(req, res)
  })
  app.get('/user/get',function(req, res){
    user.getUsers(req, res)
  })
  app.post('/user/delete', function(req, res){
    user.delete(req, res)
  })
  app.get('/user/show/:id', function(req, res){
    user.showOne(req, res)
  })
  app.post('/comment/add', function(req, res){
    console.log(req.body)
    comment.addComment(req,res)
  })
  app.post('/comment/addLike', function(req, res){
    comment.addLike(req.res)
  })
}
