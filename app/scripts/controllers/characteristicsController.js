// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams, dataProvider, processingProvider){

  console.log("refreshing");
	$scope.setType = function(){
		angular.forEach($scope.data, function(item) {
    	if (item.id == $routeParams.charId){
  		  $scope.type = item;
      }
 		 });
	};

	$scope.setColour = function(newColour){
		$scope.type.colour = newColour;
	};

  $scope.isActive = function(id){
    //this makes the class active if the id matches this type
    if($scope.type.id == id) return "active";
  };


  $scope.init = function () {
    var h = $(window).height();
    var w = $(window).width();
    if (w > 720) {
        $('#navigation-bar .nav.navbar-nav.navbar-right').css({
            width: 400
        });
    } else {
        $('#navigation-bar .nav.navbar-nav.navbar-right').css({
            width: 350
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


   dataProvider.getData(function(err, data){
      if(!err && myApp.data == undefined){
        myApp.data = data;
        $scope.data = myApp.data;
      }
    });

    $scope.data = myApp.data;

    $scope.setType();

    $scope.canvas = document.getElementById("canvas");
    $scope.p = new Processing(canvas, processingProvider.sketch("dfsdfsd"));
  };

  $scope.init();
});

