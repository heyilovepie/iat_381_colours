myApp.controller('resultsController', function($scope, dataProvider) {
        dataProvider.getData(function(err, data){
            if(!err && myApp.data == undefined){ //if you haven't already loaded the global variable (in another script) then load the data from the .json file
              myApp.data = data; //assign global variable
            }
        });
        $scope.data = myApp.data; //assign local variable
});