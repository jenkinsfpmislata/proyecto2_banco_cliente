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
    
      // Seleccion de la Sucursal- MODAL
    $scope.readSucursales = function() {
        $http.get("/proyecto2_bank_server/api/SucursalBancaria").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };

    $scope.seleccionarSucursal = function(sucursal) {
        $scope.idSucursalBancaria = sucursal.idSucursalBancaria;
        $scope.sucursalMostrar = sucursal.codigoSucursalBancaria + " - " + sucursal.nombreSucursalBancaria;
    };

// Fin del MODAL

    $scope.buttonOK = function() {
        $scope.updateCuentaBancaria();
    };
});

app.controller("accountAddCtrl", function($scope, $http, $location) {
    $scope.cuenta = null;
    $scope.sucursalMostrar = null;
    $scope.sucursalBancaria = [];
    $scope.sucursalesBancarias = [];
    $scope.idSucursalBancaria = null;
    $scope.title = "Add";

    $scope.insertCuentaBancaria = function() {
        $scope.cuenta.sucursalBancaria = $scope.sucursalBancaria;
        $http.post("/proyecto2_bank_server/api/CuentaBancaria/", $scope.cuenta).success(function(result) {

            $scope.cuenta = result;
           
        });
        $location.path("/Accounts");
    };
    
    
    // Seleccion de la Sucursal- MODAL
    $scope.readSucursales = function() {
        $http.get("/proyecto2_bank_server/api/SucursalBancaria").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };

    $scope.seleccionarSucursal = function(sucursal) {
        $scope.sucursalBancaria = sucursal;
        $scope.sucursalMostrar = sucursal.codigoSucursalBancaria + " - " + sucursal.nombreSucursalBancaria;
    };

// Fin del MODAL

    $scope.buttonOK = function() {
        $scope.insertCuentaBancaria();
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
