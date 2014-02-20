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
    $routeProvider.otherwise({
        redirectTo: "/"
    });
      
    
   


});

app.controller("loginCtrl",function($scope, $http){
     
    $scope.credenciales = {};
    $scope.cliente= {};
  
    
 $scope.logearse = function() {

        $http.post("/proyecto2_bank_server/api/Login/", $scope.credenciales).success(function(result) {
            alert("funciona"); 
            $scope.cliente= result;
            alert($scope.cliente)
            $location.path("/../Client");
            
        $location.path("/../../Client");
        
            
           
        });
        
        alert("funciona3");
    };
  
    

});
