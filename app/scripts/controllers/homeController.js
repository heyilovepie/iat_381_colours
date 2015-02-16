// create the controller and inject Angular's $scope
myApp.controller('homeController', function($scope, dataProvider) {

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

		processing.loadCharacteristics = function(data){
			eye = data[0].colour;
			hair = data[1].colour;
			shirt = data[2].colour;
			pants = data[3].colour;

			console.log(data);
			console.log(eye);
		};
		processing.changeCharacteristic = function(id, colour){
			if(id == "eye") eye = colour;
		};
	}

	$scope.init = function () {
		myApp.styling();

	    $scope.name = "Home";

	    dataProvider.getData(function(err, data){
	    	if(!err && myApp.data == undefined){
	    		myApp.data = data;
	    		$scope.data = myApp.data;
	    	}
		});
		$scope.data = myApp.data;

		$scope.canvas = document.getElementById("canvas");
    	$scope.p = new Processing(canvas, $scope.sketch );
  	};

  	$scope.init();
});