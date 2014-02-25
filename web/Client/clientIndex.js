var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "clientMain.html",
                controller: "mainCtrl"
            });
    
    $routeProvider.when("/Accounts",
            {
                templateUrl: "Accounts.html",
                controller: "AccountsCtrl"
            });
    $routeProvider.when("/BranchOffice",
            {
                templateUrl: "BranchOffice.html",
                controller: "BranchCtrl"
            });
    $routeProvider.when("/Deposit",
            {
                templateUrl: "Deposit.html",
                controller: "DepositCtrl"
            });
    $routeProvider.when("/Movements",
            {
                templateUrl: "Movements.html",
                controller: "MovementsCtrl"
            });
  $routeProvider.when("/Accounts/Details/:idCuentaBancaria",
            {
                templateUrl: "accountDetails.html",
                controller: "accountDetailsCtrl"
            });

});

app.controller("indexCtrl",function($scope, $http, $location){

$scope.cliente={};
     
     $scope.readClient=function(){
         $http.get("/proyecto2_bank_server/api/Login").success(function(result) {
         $scope.cliente = result;
     })
     }
     $scope.readClient();
     
     
     

      $scope.salir = function() {
        $http.delete("/proyecto2_bank_server/api/Login/").success(function() {
            $scope.readClient();
            alert($scope.cliente.idCliente);
            $location.path("../Public/");
              
        });
        
        
    };
});