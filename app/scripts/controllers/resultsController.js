myApp.controller('resultsController', function($scope, dataProvider, processingProvider) {
	$scope.message = 'This is a shitty app!';
	dataProvider.getData(function(err, data){
	    if(!err && myApp.data == undefined){
	    	myApp.data = data;
	    	$scope.data = myApp.data;
	    }
	});
	$scope.data = myApp.data;

	$scope.canvas = document.getElementById("canvas");
	$scope.p = new Processing(canvas, processingProvider.sketch("dsffa"));
});