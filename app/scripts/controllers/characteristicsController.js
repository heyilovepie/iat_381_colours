// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams, dataProvider){

  $scope.sketch = function (processing) {
    var x = 0;
    var eye = "black";
    var hair = "red";
    var shirt = "white";
    var pants = "black";
    processing.setup = function(){
      processing.size(200, 300);
      processing.background(255);
    };
    processing.draw = function(){
      x += 1;
      processing.fill(100);
      processing.noStroke();
      processing.rect(0, 0, x, processing.height);
    };
  }
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
  };

  $scope.init = function () {
    myApp.styling();

    $("#eye").addClass("using");

   dataProvider.getData(function(err, data){
      if(!err && myApp.data == undefined){
        myApp.data = data;
        $scope.data = myApp.data;
      }
    });

    $scope.data = myApp.data;

    $scope.setType();

    $scope.canvas = document.getElementById("canvas");
    $scope.p = new Processing(canvas, $scope.sketch );
  };

  $scope.init();
});

