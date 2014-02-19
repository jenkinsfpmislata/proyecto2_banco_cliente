app.controller("mainCtrl",function($scope, $http){
     
    
    $scope.nickLogin = null;
   

$scope.logearse = function() {

        $http.post("/proyecto2_bank_server/api/Credenciales/", $scope.nickLogin).success(function(result) {
            alert("funciona");
        });
        $location.path("/../Client/clientIndex.html");
    };
  
    

});
    
