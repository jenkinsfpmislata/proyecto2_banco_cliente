app.controller("entitySearchCtrl", function($scope, $http) {
    $scope.entidad = null;
    $scope.entidadesBancarias = [];


    $scope.readEntidades = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria").success(function(result) {
            $scope.entidadesBancarias = result;
        });
    };
    $scope.readEntidades();
});

app.controller("entityEditCtrl", function($scope, $http, $routeParams) {
    $scope.entidadBancaria = null;
    $scope.title = "Edit";

    $scope.params = $routeParams;

    $scope.readEntidadBancaria = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/" + $scope.params.idEntidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
    };
    $scope.readEntidadBancaria();
    
    $scope.updateEntidadBancaria = function() {
        $http.put("http://localhost:8084/proyecto2_bank_server/api/EntidadBancaria/" 
                + $scope.params.idEntidadBancaria,{"nombreEntidadBancaria":"VALENCIA"}).success(function(result) {
            $scope.entidadBancaria = result;
        });
        
    };

});
