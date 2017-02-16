app.factory('userFactory', function($http){
  var factory = {}

  factory.getUsers = function(cb){
    $http.get('user/get').then(function(data){
      // This is sending the response to the controller. cb(data)
        cb(data)
      })
  }
  factory.addUser=function(newUser){
    console.log(newUser)
    $http.post('/user/add', newUser).then(function(data){
      $route.reload()
    })
  }
  // factory.delete = function(index){
  //   $http.post('/user/delete', {_id:index}).then(function(data){
  //     $route.reload()
  //   })
  // }
  // factory.showOne = function(id, cb){
  //   $http.get('user/show/' + id).then(function(data){
  //     cb(data, data)
  //   })
  //
  // }
  return factory;
})
