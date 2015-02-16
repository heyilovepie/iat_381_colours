// create the controller and inject Angular's $scope
myApp.controller('homeController', function($scope, dataProvider) {

	$scope.sketch = function (processing) {
		/* @pjs preload="pics/character/base.png, 
		pics/character/eyes_blue.png, pics/character/eyes_brown.png, pics/character/eyes_green.png, 
		pics/character/hair_black.png, pics/character/hair_blonde.png, pics/character/hair_brown.png, pics/character/hair_red.png,
		pics/character/pants_black.png, pics/character/pants_blue.png, pics/character/pants_green.png, pics/character/pants_red.png,
		pics/character/shirt_blue.png, pics/character/shirt_grey.png, pics/character/shirt_red.png, pics/character/shirt_white.png"; */
		
		var base, eyes_blue, eyes_brown, eyes_green, 
		hair_black, hair_blonde, hair_brown, hair_red,
		pants_black, pants_blue, pants_green, pants_red,
		shirt_blue, shirt_grey, shirt_red, shirt_white;

		processing.setup = function(){
			base = processing.loadImage("pics/character/base.png");
			eyes_blue = processing.loadImage("pics/character/eyes_blue.png");
			eyes_brown = processing.loadImage("pics/character/eyes_brown.png");
			eyes_green = processing.loadImage("pics/character/eyes_green.png");
			hair_black = processing.loadImage("pics/character/hair_black.png");
			hair_blonde = processing.loadImage("pics/character/hair_blonde.png");
			hair_brown = processing.loadImage("pics/character/hair_brown.png");
			hair_red = processing.loadImage("pics/character/hair_red.png");
			pants_black = processing.loadImage("pics/character/pants_black.png");
			pants_blue = processing.loadImage("pics/character/pants_blue.png");
			pants_green = processing.loadImage("pics/character/pants_green.png");
			pants_red = processing.loadImage("pics/character/pants_red.png");
			shirt_blue = processing.loadImage("pics/character/shirt_blue.png");
			shirt_grey = processing.loadImage("pics/character/shirt_grey.png");
			shirt_red = processing.loadImage("pics/character/shirt_red.png");
			shirt_white = processing.loadImage("pics/character/shirt_white.png");

			processing.size(200, 300);
			processing.imageMode(processing.CENTER);
		};
		processing.draw = function(){
			processing.background(0);

			processing.drawImage(base);
			var colour;
			colour = $scope.data[0].colour;
			if( colour == "blue" ){
				processing.drawImage(eyes_blue);
			}else if ( colour == "brown" ){
				processing.drawImage(eyes_brown);	
			}else if ( colour == "green" ){
				processing.drawImage(eyes_green);	
			}

			colour = $scope.data[1].colour;
			if( colour == "black" ){
				processing.drawImage(hair_black);
			}else if ( colour == "blonde" ){
				processing.drawImage(hair_blonde);	
			}else if ( colour == "brown" ){
				processing.drawImage(hair_brown);	
			}else { //red
				processing.drawImage(hair_red);	
			}

			colour = $scope.data[2].colour;
			if( colour == "grey" ){
				processing.drawImage(shirt_grey);
			}else if ( colour == "blue" ){
				processing.drawImage(shirt_blue);	
			}else if ( colour == "white" ){
				processing.drawImage(shirt_white);	
			}else { //red
				processing.drawImage(shirt_red);	
			}	

			colour = $scope.data[3].colour;
			if( colour == "black" ){
				processing.drawImage(pants_black);
			}else if ( colour == "blue" ){
				processing.drawImage(pants_blue);	
			}else if ( colour == "green" ){
				processing.drawImage(pants_green);	
			}else { //red
				processing.drawImage(pants_red);	
			}
		};

		processing.drawImage = function(img){
			processing.image(img, processing.width/2, processing.height/2, processing.height * base.width/base.height, processing.height);
		};
	}

	$scope.init = function () {
		myApp.styling();

	    $scope.name = "Home";

	    dataProvider.getData(function(err, data){
	    	if(!err && myApp.data == undefined){
	    		myApp.data = data;
	    		$scope.data = myApp.data;
	    	}
		});
		$scope.data = myApp.data;

		$scope.canvas = document.getElementById("canvas");
    	$scope.p = new Processing(canvas, $scope.sketch );
  	};

  	$scope.init();
});