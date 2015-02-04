// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams){
  	$scope.data = myApp.data;

  	$scope.setType = function(){
  		angular.forEach($scope.data, function(item) {
      	if (item.id == $routeParams.charId) 
    		$scope.type = item;
   		 });
  	};

  	$scope.setType();

  	$scope.setColour = function(newColour){
  		$scope.type.colour = newColour;
  	};
});

