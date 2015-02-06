myApp.controller('resultsController', function($scope, dataProvider) {
	$scope.message = 'This is a shitty app!';
	dataProvider.getData(function(err, data){
	    if(!err && myApp.data == undefined){
	    	console.log("assign data");
	    	myApp.data = data;
	    }
	});
	$scope.data = myApp.data;
});