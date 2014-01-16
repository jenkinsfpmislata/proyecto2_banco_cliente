app.controller("branchOfficeSearchDeleteCtrl", function($scope, $http) {
    $scope.sucursal = null;
    $scope.sucursalesBancarias = [];


    $scope.readSucursales = function() {
        var filter = {
            nombreEntidadBancaria: $scope.nombreEntidadBancaria
        }
        $http.get("/proyecto2_bank_server/api/SucursalBancaria", filter).success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };


    $scope.deleteSucursalBancaria = function(idSucursalBancaria) {
        $http.delete("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/" + idSucursalBancaria).success(function(result) {
            $scope.readSucursales();
        });
    };
    $scope.readSucursales();
});


app.controller("branchOfficeEditCtrl", function($scope, $http, $routeParams, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;


    $scope.readSucursalBancaria = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/" + $scope.params.idSucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
    };


    $scope.updateSucursalBancaria = function() {

        $http.put("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/"
                + $scope.params.idSucursalBancaria, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/BranchOffice");
    };

    $scope.readSucursalBancaria();
    $scope.buttonOK = function() {
        $scope.updateSucursalBancaria();
    };

});

app.controller("branchOfficeAddCtrl", function($scope, $http, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Add";




    $scope.insertSucursalBancaria = function() {
        $http.post("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/BranchOffice");
    };

    $scope.buttonOK = function() {
        $scope.insertSucursalBancaria();
    };


});

