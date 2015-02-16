myApp.controller('resultsController', function($scope, dataProvider) {

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

  	$scope.init = function () {
		myApp.styling();

		$("#character").addClass("using");

	    $scope.name = "Results";

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