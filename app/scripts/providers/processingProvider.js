myApp.provider('processingProvider', function () {  
	this.$get = function () {
    	return {
    		sketch: function(typeID){
     			return function (processing) {
     				var x = 0;
     				var eye = "black";
     				var hair = "red";
     				var shirt = "white";
     				var pants = "black";
					processing.setup = function(){
						processing.size(200, 300);
						processing.background(255);
					};
					processing.draw = function(){
						x += 1;
						processing.fill(100);
						processing.noStroke();
						processing.rect(0, 0, x, processing.height);
					};

					processing.loadCharacteristics = function(data){
						eye = data[0].colour;
						hair = data[1].colour;
						shirt = data[2].colour;
						pants = data[3].colour;

						console.log(data);
						console.log(eye);
					};
					processing.changeCharacteristic = function(id, colour){
						if(id == "eye") eye = colour;
					};
				}
			}
		};
	};
});