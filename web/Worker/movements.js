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

app.controller("movementsAddCtrl", function($scope, $http, $location, $filter) {
    $scope.tiposMovimientosBancarios = [{
            enumMovimientoBancario: "DEBE",
            nombre: "Debit"
        }, {
            enumEntidadBancaria: "HABER",
            nombre: "Credit"
        }];
    
    $scope.movimientoBancario = {};
    $scope.movimientoBancario.tipoMovimientoBancario = $scope.tiposMovimientosBancarios[0].enumMovimientoBancario;
    $scope.movimientoBancario.fecha = $filter('date')(new Date(),'yyyy-MM-dd') ;
    $scope.title = "Add";

    $scope.insertMovement = function() {
        $http.post("/proyecto2_bank_server/api/MovimientoBancario/", $scope.movimientoBancario).success(function(result) {
            $scope.movimiento = result;
        });
        $location.path("/Movements");
    };

    $scope.buttonOK = function() {
        $scope.insertMovement();
    };


});

