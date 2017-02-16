app.controller('commentController', function($scope, commentFactory){

    $scope.addLike = function(comment){
      commentFactory.addLike(comment)
      // console.log(comment);
    }
    // commentFactory.getComments(function(data){
    //   $scope.comments = data


    $scope.addComment = function(showOneUser){
        if(!$scope.newComment || !$scope.newComment.name || $scope.newComment.content){
          alert("Please add both a name and comment")
        }else{
          $scope.newComment._user = showOneUser._id
          $scope.newComment.like = 0;
          commentFactory.addComment($scope.newComment)
          // console.log($scope.newComment);
        }
    }

})
