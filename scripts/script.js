// create the module and name it scotchApp
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
    /*
    .otherwise({
      redirectTo: '/'
    });
*/
});


myApp.data = [{"name":"Eyes", "id":"eye", "colour":"blue"},
              {"name":"Hair", "id":"hair", "colour":"brown"},
              {"name":"Shirt", "id":"shirt", "colour":"pink"}];