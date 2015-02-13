// create the controller and inject Angular's $scope
myApp.controller('homeController', function($scope, dataProvider, processingProvider) {
	$scope.message = 'This is a shitty app!';

	dataProvider.getData(function(err, data){
	    if(!err && myApp.data == undefined){
	    	myApp.data = data;
	    	$scope.data = myApp.data;
	    }
	});
	$scope.data = myApp.data;

	$scope.canvas = document.getElementById("canvas");
	$scope.p = new Processing(canvas, processingProvider.sketch("thisissf"));

	$scope.init = function () {
	    var h = $(window).height();
	    var w = $(window).width();

	    $('#home').addClass('using');

	    $('#canvas').css({ top: h*.2 });
		if (w > 720) {
			$('#canvas').css({ width: w*.5 });
		} else { //mobile
			$('#canvas').css({ width: w*.8 });
		}
  	};
});