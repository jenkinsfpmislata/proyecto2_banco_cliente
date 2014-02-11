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
    $scope.idEntidadBancaria = null;
    $scope.entidadMostrar = null;
    $scope.disabled = false;

    $scope.readSucursalBancaria = function() {
        $http.get("/proyecto2_bank_server/api/SucursalBancaria/" + $scope.params.idSucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
            $scope.entidadMostrar=$scope.sucursalBancaria.entidadBancaria.codigoEntidadBancaria +" - "+$scope.sucursalBancaria.entidadBancaria.nombreEntidadBancaria;
            $scope.idEntidadBancaria = $scope.sucursalBancaria.entidadBancaria.idEntidadBancaria;
        }); 
    };

    $scope.updateSucursalBancaria = function() {

        $http.put("/proyecto2_bank_server/api/SucursalBancaria/"
                + $scope.params.idSucursalBancaria, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/Entity/Details/"+$scope.idEntidadBancaria);
    };

    $scope.deleteSucursalBancaria = function(idSucursalBancaria) {
        $http.delete("/proyecto2_bank_server/api/SucursalBancaria/" + idSucursalBancaria).success(function(result) {

        });
        $location.path("Entity/Details/"+$scope.idEntidadBancaria);
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
    $scope.entidadMostrar = null;
    
    $scope.entidadMostrar=$scope.sucursalBancaria.entidadBancaria.codigoEntidadBancaria +" - "+$scope.sucursalBancaria.entidadBancaria.nombreEntidadBancaria;
    
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

