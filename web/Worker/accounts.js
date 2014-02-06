app.controller("accountsSearchDeleteCtrl", function() {

    $scope.cuenta = null;
    $scope.cuentasBancarias = [];
    $scope.numeroCuentaBancaria = null;
    
     $scope.readCuentas = function() {
        var filter = {
            numeroCuentaBancaria: $scope.numeroCuentaBancaria
        };
        $http.get("/proyecto2_bank_server/api/CuentaBancaria", {params: filter}).success(function(result) {

            $scope.cuentasBancarias = result;
        });
    };
    
    $scope.deleteCuentasBancarias = function(idCuentaBancaria) {
        $http.delete("/proyecto2_bank_server/api/CuentaBancaria/" + idCuentaBancaria).success(function(result) {

            $scope.readCuentas();
        });
    };


 $scope.readCuentas();
});


