var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "main.html",
                controller: "mainCtrl"
            });
    $routeProvider.when("/Entity",
            {
                templateUrl: "EntityBank.html",
                controller: "EntityCtrl"
            });
    $routeProvider.when("/BranchOffice",
            {
                templateUrl: "BranchOffice.html",
                controller: "BranchCtrl"
            });
    $routeProvider.when("/Account",
            {
                templateUrl: "Account.html",
                controller: "AccountsCtrl"
            });
    $routeProvider.when("/Movements",
            {
                templateUrl: "Movements.html",
                controller: "MovementsCtrl"
            });
            $routeProvider.when("/client",
            {
                templateUrl: "../Client/",
               
            });
    $routeProvider.otherwise({
        redirectTo: "/"
    });
      
    
   


});

app.controller("loginCtrl",function($scope, $http){
     
    $scope.credenciales = {};
    $scope.cliente= {};
  
    
 $scope.logearse = function() {

        $http.post("/proyecto2_bank_server/api/Login/", $scope.credenciales).success(function(result) {
            
            $scope.cliente= result;
            alert($scope.cliente.idCliente)
            $location.path("/client");
              
        });
        
        alert("funciona3");
    };
  
    

});
