// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams, dataProvider){
    dataProvider.getData(function(err, data){
        if(!err && myApp.data == undefined){ //if you haven't already loaded the global variable (in another script) then load the data from the .json file
          myApp.data = data; //assign global variable
        }
    });
    $scope.data = myApp.data; //assign local variable

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

