app.controller("accountsSearchDeleteCtrl", function() {

    $scope.cuenta = null;
    $scope.cuentasBancarias = [];
    $scope.numeroCuentaBancaria = null;

    $scope.readCuentas = function() {
        var filter = {
            numeroCuentaBancaria: $scope.numeroCuentaBancaria
        };
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/", {params: filter}).success(function(result) {

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

app.controller("accountsEditCtrl", function($scope, $http, $routeParams, $location) {
    $scope.cuentaBancaria = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;


    $scope.readCuentas = function() {
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/" + $scope.params.idCuentaBancaria).success(function(result) {
            $scope.cuentaBancaria = result;
        });
    };
    $scope.updateCuentaBancaria = function() {

        $http.put("/proyecto2_bank_server/api/CuentaBancaria/"
                + $scope.params.idCuentaBancaria, $scope.cuentaBancaria).success(function(result) {
            $scope.cuentaBancaria = result;
        });
        $location.path("/Accounts");
    };
    $scope.readCuentas();
    $scope.buttonOK = function() {
        $scope.updateCuentaBancaria();
    };
});

app.controller("accountAddCtrl", function($scope, $http, $location) {
    $scope.cuentaBancaria = null;
    $scope.title = "Add";

    $scope.insertCuentaBancaria = function() {

        $http.post("/proyecto2_bank_server/api/CuentaBancaria/", $scope.cuentaBancaria).success(function(result) {

            $scope.cuentaBancaria = result;
        });
        $location.path("/Accounts");
    };

    $scope.buttonOK = function() {
        $scope.insertCuentaBancaria();
    };


});