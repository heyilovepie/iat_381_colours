myApp.controller('resultsController', function($scope, dataProvider, processingProvider) {

  	$scope.init = function () {
		myApp.styling();

	    $scope.name = "Results";

	    dataProvider.getData(function(err, data){
	    	if(!err && myApp.data == undefined){
	    		myApp.data = data;
	    		$scope.data = myApp.data;
	    	}
		});
		$scope.data = myApp.data;

		$scope.canvas = document.getElementById("canvas");
    	$scope.sketch = processingProvider.sketch();
    	$scope.p = new Processing(canvas, $scope.sketch );
  	};

  	$scope.init();
});