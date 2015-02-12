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
	    if (w > 720) {
	        $('#navigation-bar .nav.navbar-nav.navbar-right').css({
	            width: 250
	        });
	    } else {
	        $('#navigation-bar .nav.navbar-nav.navbar-right').css({
	            width: 250
	        });
	    }
	    $('#canvas').css({ top: h*.2 });
		if (w > 720) {
			$('#canvas').css({ width: w*.5 });
		} else { //mobile
			$('#canvas').css({ width: w*.8 });
		}
		
		var homeHeight = $('#navigation-bar .nav.navbar-nav.navbar-left').height();
		$('#navigation-bar .nav.navbar-nav.navbar-left').css({ width: homeHeight });
  	};
});