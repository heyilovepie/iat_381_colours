// create the controller and inject Angular's $scope
myApp.controller('homeController', function($scope, dataProvider) {
	$scope.message = 'This is a shitty app!';
	dataProvider.getData(function(err, data){
		if(!err){
			$scope.data = data;
		}
	});

	function sketch(processing){
		processing.setup = function(){
			processing.size(200, 300);
			processing.background(255);
		};
		processing.draw = function(){
			processing.fill(100);
			processing.noStroke();
			processing.rect(0, 0, processing.width*($scope.percent)/100, processing.height);
		};
	}

	var canvas = document.getElementById("canvas");
	var p = new Processing(canvas, sketch);
});