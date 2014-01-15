app.controller("branchOfficeSearchCtrl",function(){
    
     $scope.sucursalesBancarias = [];


    $scope.readSucursales = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };
    $scope.readSucursales();
});

app.controller("branchOfficEditEditCtrl", function($scope, $http,  $routeParams) {
    $scope.sucursalBancaria = null;
    $scope.title = "Edit";
    
    $scope.params = $routeParams;

    $scope.readSucursalBancaria = function() {
        $http.get("http://localhost:8084/proyecto2_bank_server/api/SucursalBancaria/"+$scope.params.idSucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
    };
    $scope.readSucursalBancaria();

});

