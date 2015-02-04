// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams){
	$scope.message = 'This is the about tab...you suck';
  	$scope.data = myApp.data;

  	angular.forEach($scope.data, function(item) {
      if (item.id == $routeParams.charId) 
    	$scope.type = item;
    });
});

