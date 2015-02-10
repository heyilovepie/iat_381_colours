myApp.provider('processingProvider', function () {  
	this.$get = function () {
    	return {
    		sketch: function(typeID){
     			return function (processing) {
					processing.setup = function(){
						processing.size(200, 300);
						processing.background(255);
					};
					processing.draw = function(){
						processing.fill(100);
						processing.noStroke();
						processing.rect(0, 0, processing.width*typeID.length/10, processing.height);
					};
				};
			}
		};
	};
});