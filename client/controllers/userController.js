app.controller("userController", function($scope, userFactory, $routeParams){

  userFactory.getUsers(function(data){
    console.log(data.data);
    $scope.users = data.data
  })

  // userFactory.showOne($routeParams.id, function(data){
  //   $scope.showOneUser = data
  // })

  $scope.addUser = function(newUser){
    // userFactory.addUser($scope.newUser);
    if(!$scope.newUser || !$scope.newUser.name || !$scope.newUser.age){
      alert ('Please enter both your name and age.')
    }else{
      // console.log($scope.newUser)
      userFactory.addUser($scope.newUser);
    }
  }
  // $scope.delete = function($index){
  //   userFactory.delete($scope.users[$index]._id);
  //   console.log($scope.users[$index]._id);
  // }
})
