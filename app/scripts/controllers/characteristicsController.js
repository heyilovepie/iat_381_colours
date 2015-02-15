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

    var iconwidth = w * 1/8;
    if (iconwidth > h * .18) iconwidth = h * .18;
    if (iconwidth < h * .1) iconwidth = h * .1;
    $('#navigation-bar .icon').css({
      height: iconwidth
    })

    var navheight = h * .2;

    $('#navigation-bar').css({
      height: navheight
    })

    var icontop = ( navheight - iconwidth ) / 2;

    $('#navigation-bar .selectable').css({
      top: icontop
    })

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

