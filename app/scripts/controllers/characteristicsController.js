// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams, dataProvider, processingProvider){

	$scope.setType = function(){
		angular.forEach($scope.data, function(item) {
    	if (item.id == $routeParams.charId){
  		  $scope.type = item;
      }
 		 });
	};

	$scope.setColour = function(newColour){
		$scope.type.colour = newColour;
	};

  $scope.isActive = function(id){
    console.log("this is " + id);
    //$('#'+id).addClass('using');
  };

  $scope.init = function () {
    myApp.styling();

   dataProvider.getData(function(err, data){
      if(!err && myApp.data == undefined){
        myApp.data = data;
        $scope.data = myApp.data;
      }
    });

    $scope.data = myApp.data;

    $scope.setType();

    $scope.canvas = document.getElementById("canvas");
    $scope.sketch = processingProvider.sketch();
    console.log($scope.sketch);
    $scope.p = new Processing(canvas, $scope.sketch );
  };

  $scope.init();
});

