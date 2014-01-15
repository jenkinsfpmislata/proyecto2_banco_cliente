app.controller("branchOfficeSearchCtrl",function(){
    
     $scope.sucursalesBancarias = [];


    $scope.readSucursales = function() {
        $http.get("/proyecto2_bank_server/api/SucursalBancaria").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    };
    
});

