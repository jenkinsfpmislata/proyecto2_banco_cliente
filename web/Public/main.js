app.controller("mainCtrl",function($scope, $http){
     
    $scope.credenciales = {};
  alert("funciona");
    
 $scope.logearse = function() {

        $http.post("/proyecto2_bank_server/api/Cliente/", $scope.credenciales).success(function(result) {
            alert("funciona2");
        });
        $location.path("/../Client/clientIndex.html");
    };
  
    

});
    
