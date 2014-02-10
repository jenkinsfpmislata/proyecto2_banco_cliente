app.controller("accountsSearchDeleteCtrl", function($scope, $http) {

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
    $scope.cuenta = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;


    $scope.readCuentas = function() {
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/" + $scope.params.idCuentaBancaria).success(function(result) {
            $scope.cuenta = result;
        });
    };
    $scope.updateCuentaBancaria = function() {

        $http.put("/proyecto2_bank_server/api/CuentaBancaria/"
                + $scope.params.idCuentaBancaria, $scope.cuenta).success(function(result) {
            $scope.cuenta = result;
        });
        $location.path("/Accounts");
    };
    $scope.readCuentas();
    $scope.buttonOK = function() {
        $scope.updateCuentaBancaria();
    };
});

app.controller("accountAddCtrl", function($scope, $http, $location) {
    $scope.cuenta = null;
    $scope.sucursalBancaria = null;
    $scope.sucursalesBancarias = [];
    $scope.idSucursalBancaria = null;
    $scope.title = "Add";

    $scope.insertCuentaBancaria = function() {

        $http.post("/proyecto2_bank_server/api/CuentaBancaria/", $scope.cuenta).success(function(result) {

            $scope.cuenta = result;
        });
        $location.path("/Accounts");
    };

    $scope.readSucursales = function() {
        $http.get("/proyecto2_bank_server/api/SucursalBancaria").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };

    $scope.buttonOK = function() {
        $scope.insertCuentaBancaria();
    };
    
     $scope.seleccionarSucursal = function(codigo) {
        $scope.idSucursalBancaria = codigo;
    };


});
app.controller("accountDetailsCtrl", function($scope, $http, $routeParams) {

    $scope.cuenta = null;

    $scope.cuentasBancarias = [];
    $scope.params = $routeParams;

    $scope.readCuentaBancaria = function() {
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/" + $scope.params.idCuentaBancaria).success(function(result) {
            $scope.cuenta = result;
        });
    };



    $scope.readCuentaBancaria();

});