app.controller("branchOfficeSearchDeleteCtrl", function($scope, $http) {
    $scope.sucursal = null;
    $scope.sucursalesBancarias = [];
    $scope.nombreSucursalBancaria = null;

    $scope.readSucursales = function() {
        var filter = {
            nombreSucursalBancaria: $scope.nombreSucursalBancaria
        };
        $http.get("/proyecto2_bank_server/api/SucursalBancaria", {params: filter}).success(function(result) {

            $scope.sucursalesBancarias = result;
        });
    };


    $scope.readSucursales();

});


app.controller("branchOfficeEditCtrl", function($scope, $http, $routeParams, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;
    $scope.disabled = false;

    $scope.readSucursalBancaria = function() {
        $http.get("/proyecto2_bank_server/api/SucursalBancaria/" + $scope.params.idSucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
    };


    $scope.updateSucursalBancaria = function() {

        $http.put("/proyecto2_bank_server/api/SucursalBancaria/"
                + $scope.params.idSucursalBancaria, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("#/entityDetails");
    };

    $scope.deleteSucursalBancaria = function(idSucursalBancaria) {
        $http.delete("/proyecto2_bank_server/api/SucursalBancaria/" + idSucursalBancaria).success(function(result) {

        });
        $location.path("#Entity/Details/{{sucursalBancaria.entidadBancaria}}");
    };

    $scope.readSucursalBancaria();
    $scope.buttonOK = function() {
        $scope.updateSucursalBancaria();
    };

});

app.controller("branchOfficeAddCtrl", function($scope, $http, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Add";
    $scope.disabled = true;
    
    $scope.insertSucursalBancaria = function() {

        $http.post("/proyecto2_bank_server/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {

            $scope.sucursalBancaria = result;
        });
        $location.path("#/entityDetails/");
    };

    $scope.buttonOK = function() {
        $scope.insertSucursalBancaria();
    };


});

