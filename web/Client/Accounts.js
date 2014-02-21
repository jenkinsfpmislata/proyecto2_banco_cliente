app.controller("AccountsCtrl",function($scope, $http, $routeParams){
    $scope.cuenta = null;
    $scope.cuentasBancarias = [];
    $scope.nombreCuentaBancaria = null;
     $scope.params = $routeParams;
     
     $scope.cliente={};
     
     $scope.readClient=function(){
         $http.get("/proyecto2_bank_server/api/Login").success(function(result) {
         $scope.cliente = result;
      
        $scope.readAccountClient();
     })
     }
    

    $scope.readAccountClient = function() {
         
        // alert($scope.cliente.idCliente);
        $http.get("/proyecto2_bank_server/api/"+ $scope.cliente.idCliente +"/CuentaBancaria").success(function(result) {
            $scope.cuentasBancarias = result;
            
        });
    };
     $scope.readClient();
    
});

app.controller("accountDetailsCtrl", function($scope, $http, $routeParams) {

    $scope.cuenta = null;
    $scope.movimientoBancario = null;
    $scope.movimientosBancarios = [];
    $scope.cuentasBancarias = [];
    $scope.params = $routeParams;

    $scope.readCuentaBancaria = function() {
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/" + $scope.params.idCuentaBancaria).success(function(result) {
            $scope.cuenta = result;
        });
    };

    $scope.readMovimientos = function() {
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/" + $scope.params.idCuentaBancaria + "/MovimientoBancario").success(function(result) {
            $scope.movimientosBancarios = result;
        });
    };



    $scope.readCuentaBancaria();
    $scope.readMovimientos();
});


