// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams, dataProvider, processingProvider){

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
    console.log("this is " + id);
    //$('#'+id).addClass('using');
  };

  $scope.init = function () {
    var h = $(window).height();
    var w = $(window).width();

    $('#canvas').css({ top: h*.2 });
    if (w > 720) {
      $('#canvas').css({ width: w*.5 });
    } else { //mobile
      $('#canvas').css({ width: w*.8 });
    }

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

