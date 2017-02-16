var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/dash', {
    templateUrl: 'partials/dash.html'
  })
  .when('/show', {
    templateUrl: 'partials/show.html'
  })
  .otherwise({
    redirectTo: '/dash'
  })
})
