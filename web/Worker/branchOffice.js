app.controller("branchOfficeSearchDeleteCtrl", function($scope, $http) {
    $scope.sucursal = null;
    $scope.sucursalesBancarias = [];


    $scope.readSucursales = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };
    $scope.readSucursales();
    
      $scope.deleteSucursalBancaria = function(idSucursalBancaria) {
        $http.delete("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/" + idSucursalBancaria).success(function(result) {
            $scope.readSucursales();
        });
    };

});


app.controller("branchOfficeEditCtrl", function($scope, $http, $routeParams) {
    $scope.sucursalBancaria = null;
    $scope.title = "Edit";
    $scope.action = "updateSucursalBancaria()";
    $scope.params = $routeParams;

    document.getElementById("insert").style.display = "none";

    $scope.readSucursalBancaria = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/" + $scope.params.idSucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
    };
    $scope.readSucursalBancaria();
    
     $scope.updateSucursalBancaria = function() {
        var sucursalBancariaJSON = angular.toJson($scope.sucursalBancaria);
        $http.put("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/"
                + $scope.params.idSucursalBancaria, sucursalBancariaJSON).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/BranchOffice");
    };

});

app.controller("branchOfficeAddCtrl", function($scope, $http, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Add";
    $scope.action = "insertSucursalBancaria()";

    document.getElementById("idBranch").removeAttribute("disabled");
    document.getElementById("update").style.display = "none";

    $scope.insertSucursalBancaria = function() {
        var sucursalBancariaJSON = angular.toJson($scope.sucursalBancaria);
        $http.post("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/", sucursalBancariaJSON).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/BranchOffice");
    };

});

