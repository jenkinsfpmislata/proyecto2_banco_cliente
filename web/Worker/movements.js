app.controller("movementsSearchCtrl", function($scope, $http) {

    $scope.movement = null;
    $scope.movimientosBancarios = [];
    $scope.conceptoMovimiento = null;

    $scope.readMovimientos = function() {
        var filter = {
            conceptoMovimiento: $scope.conceptoMovimiento
        };
        $http.get("/proyecto2_bank_server/api/MovimientoBancario", {params: filter}).success(function(result) {

            $scope.movimientosBancarios = result;
        });
    };

    $scope.readMovimientos();

});

app.controller("movementsAddCtrl", function($scope, $http, $location, $filter, $routeParams) {
    $scope.tiposMovimientosBancarios = [{
            enumMovimientoBancario: "DEBE",
            nombre: "Debit"
        }, {
            enumMovimientoBancario: "HABER",
            nombre: "Credit"
        }];

    $scope.params = $routeParams;
    $scope.movimientoBancario = {};
    $scope.movimientoBancario.tipoMovimientoBancario = $scope.tiposMovimientosBancarios[0].enumMovimientoBancario;
    $scope.movimientoBancario.fecha = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.movimientoBancario.cuentaBancaria = null;
    $scope.title = "Add";

    $scope.insertMovement = function() {
        $http.post("/proyecto2_bank_server/api/MovimientoBancario/", $scope.movimientoBancario).success(function(result) {
            $scope.movimientoBancario = result;
        });
        $location.path("/Accounts/Details/" + $scope.movimientoBancario.cuentaBancaria.idCuentaBancaria);
    };

    $scope.readCuentaBancaria = function() {
        $http.get("/proyecto2_bank_server/api/CuentaBancaria/" + $scope.params.idCuentaBancaria).success(function(result) {
            $scope.movimientoBancario.cuentaBancaria = result;
        });
    };
    $scope.readCuentaBancaria();


    $scope.buttonOK = function() {
        $scope.insertMovement();
    };


});

