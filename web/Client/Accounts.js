app.controller("AccountsCtrl",function($scope, $http, $routeParams){
    $scope.cuenta = null;
    $scope.cuentasBancarias = [];
    $scope.nombreCuentaBancaria = null;


    $scope.readAccountClient = function() {
        $http.get("/proyecto2_bank_server/api/"+ $scope.params.idCliente+"/CuentaBancaria/").success(function(result) {
            $scope.cuentaBancaria = result;
        });
    };
});


