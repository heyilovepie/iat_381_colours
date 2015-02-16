var myApp = angular.module('characterApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'homeController'
    })
    .when('/characteristics/:charId', {
      templateUrl: 'pages/characteristics.html',
      controller : 'characteristicsController'
    })
    .when('/results', {
      templateUrl: 'pages/results.html',
      controller : 'resultsController'
    })
    .when('/example', {
      templateUrl: 'pages/example.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});


