app.factory('commentFactory', function(){
  var factory = {}

  factory.addLike = function(comment){
    $http.post('/comment/addLike', comment).then(function(data))
  }
  factory.getComments = function(cb){
    $http.get('/comments/get').then(function(data){
      cb(data.data)
    })
  }

  factory.addComment = function(comment){
    $http.post('/comment/add', comment).then(function(data){
      console.log(data.data.status);
      $route.reload()
    })
  }
  return factory;
})
