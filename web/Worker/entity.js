app.controller("entitySearchDeleteCtrl", function($scope, $http) {
    $scope.entidad = null;
    $scope.entidadesBancarias = [];
    $scope.searchEntidadBancaria = null;

    $scope.readEntidades = function() {
        $http.get("/proyecto2_bank_server/api/EntidadBancaria/"+$scope.searchEntidadBancaria).success(function(result) {
            $scope.entidadesBancarias = result;
        });
    };
    $scope.readEntidades();

    $scope.deleteEntidadBancaria = function(idEntidadBancaria) {
        $http.delete("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {
            $scope.readEntidades();
        });
    };

});

app.controller("entityEditCtrl", function($scope, $http, $routeParams, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;

    document.getElementById("insert").style.display = "none";

    $scope.readEntidadBancaria = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/" + $scope.params.idEntidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
    };
    $scope.readEntidadBancaria();

    $scope.updateEntidadBancaria = function() {
        var entidadBancariaJSON = angular.toJson($scope.entidadBancaria);
        $http.put("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/"
                + $scope.params.idEntidadBancaria, entidadBancariaJSON).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/Entity");
    };

});

app.controller("entityAddCtrl", function($scope, $http, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Add";

    document.getElementById("idEntity").removeAttribute("disabled");
    document.getElementById("update").style.display = "none";

    $scope.insertEntidadBancaria = function() {
        var entidadBancariaJSON = angular.toJson($scope.entidadBancaria);
        $http.post("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/", entidadBancariaJSON).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/Entity");
    };

});
