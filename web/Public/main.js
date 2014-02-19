app.controller("mainCtrl",function($scope, $http){
     
    
    $scope.nickLogin = null;
   

$scope.logearse = function() {
alert("funciona");
        $http.post("/proyecto2_bank_server/api/Cliente/", $scope.nickLogin).success(function(result) {
            alert("funciona2");
        });
        $location.path("/../Client/clientIndex.html");
    };
  
    

});
    
