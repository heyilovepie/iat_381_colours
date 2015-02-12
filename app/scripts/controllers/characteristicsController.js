// create the controller and inject Angular's $scope
myApp.controller('characteristicsController', function($scope, $routeParams, dataProvider, processingProvider){
  dataProvider.getData(function(err, data){
      if(!err && myApp.data == undefined){
        myApp.data = data;
        $scope.data = myApp.data;
      }
  });

  $scope.data = myApp.data;

	$scope.setType = function(){
		angular.forEach($scope.data, function(item) {
    	if (item.id == $routeParams.charId) 
  		  $scope.type = item;
 		 });
	};

	$scope.setType();

  $scope.init = function () {
    var h = $(window).height();
    var w = $(window).width();
    if (w > 720) {
        $('#navigation-bar .nav.navbar-nav.navbar-right').css({
            width: 350
        });
    } else {
        $('#navigation-bar .nav.navbar-nav.navbar-right').css({
            width: 250
        });
    }
  };

	$scope.setColour = function(newColour){
		$scope.type.colour = newColour;
	};

  $scope.isActive = function(id){
    //this makes the class active if the id matches this type
    if($scope.type.id == id) return "active";
  };

  $scope.canvas = document.getElementById("canvas");
  $scope.p = new Processing(canvas, processingProvider.sketch($scope.type.colour));
});

