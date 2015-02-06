myApp.provider('dataProvider', function () {
	var message = "this is from the data provider";
	this.getMessage = function(){
		return "this is a test";
	}
  	this.$get = function ($http) {
    	var cache = null;
    	return {
     		getData: function (callback) {
        		if (cache !== null) {
          			return setTimeout(function () {
            			callback(null, cache);
          			});
        		}
        		return $http.get('json/data.json').success(function (data) {
          			cache = data;
          			callback(null, data);
        		});
      		}
    	};
  	};
});  