app.controller("entitySearchDeleteCtrl", function($scope, $http) {
    $scope.entidad = null;
    $scope.entidadesBancarias = [];
    $scope.nombreEntidadBancaria = null;

    $scope.readEntidades = function() {
        var filter = {
            nombreEntidadBancaria: $scope.nombreEntidadBancaria
        };
        $http.get("/proyecto2_bank_server/api/EntidadBancaria", {params:filter}).success(function(result) {

            $scope.entidadesBancarias = result;
        });

    };

    $scope.deleteEntidadBancaria = function(idEntidadBancaria) {
        $http.delete("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {
            $scope.readEntidades();
        });
    };


    $scope.readEntidades();
});

app.controller("entityEditCtrl", function($scope, $http, $routeParams, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;


    $scope.readEntidadBancaria = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/" + $scope.params.idEntidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
    };


    $scope.updateEntidadBancaria = function() {
        $http.put("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/"
                + $scope.params.idEntidadBancaria, $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/Entity");
    };

    $scope.readEntidadBancaria();
    $scope.buttonOK = function() {
        $scope.updateEntidadBancaria();
    };

});

app.controller("entityAddCtrl", function($scope, $http, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Add";

    $scope.insertEntidadBancaria = function() {

        $http.post("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/Entity");
    };

    $scope.buttonOK = function() {
        $scope.insertEntidadBancaria();
    };

});
