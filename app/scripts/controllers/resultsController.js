myApp.controller('resultsController', function($scope, dataProvider, processingProvider) {

	$scope.init = function () {
	    var h = $(window).height();
	    var w = $(window).width();

	    $('#character-click').addClass('using');

	    //right part of navigation bar
		rightWidth = w*.4;
		if(rightWidth < 200) rightWidth = 200;
		var charSize = $('#character-click').height();
		if(charSize != undefined) rightWidth += charSize;
	    $('#navigation-bar .nav.navbar-nav.navbar-right').css({
	        width: rightWidth
	    });

	    $('#canvas').css({ top: h*.2 });
		if (w > 720) {
			$('#canvas').css({ width: w*.5 });
		} else { //mobile
			$('#canvas').css({ width: w*.8 });
		}

		var homeHeight = $('#navigation-bar .nav.navbar-nav.navbar-left').height();
		$('#navigation-bar .nav.navbar-nav.navbar-left').css({ width: homeHeight });

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
  	};

  	$scope.init();
});