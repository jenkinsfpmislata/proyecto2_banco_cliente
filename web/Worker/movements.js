app.controller("movementsSearchCtrl",function($scope, $http){
   
   $scope.movement=null;
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

app.controller("movementsAddCtrl", function($scope, $http, $location) {
    $scope.movement = null;
    $scope.title = "Add";

    $scope.insertMovement = function() {

        $http.post("/proyecto2_bank_server/api/MovimientoBancario/", $scope.movement).success(function(result) {

            $scope.movement = result;
        });
        $location.path("/Movements");
    };

    $scope.buttonOK = function() {
        $scope.insertMovement();
    };


});

