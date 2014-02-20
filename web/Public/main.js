app.controller("mainCtrl",function($scope, $http){
     
    $scope.credenciales = {};
  
    
 $scope.logearse = function() {
alert("funciona");
        $http.post("/proyecto2_bank_server/api/Login/", $scope.credenciales).success(function(result) {
            alert("funciona2");
        });
        $location.path("/../Client/clientIndex.html");
    };
  
    

});
    
