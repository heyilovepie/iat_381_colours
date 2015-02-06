myApp.controller('resultsController', function($scope, dataProvider) {
	$scope.message = 'This is a shitty app!';
	dataProvider.getData(function(err, data){
		if(!err){
			$scope.data = data;
		}
	});
});