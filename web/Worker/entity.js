app.controller("entitySearchDeleteCtrl", function($scope, $http) {
    $scope.entidad = null;
    $scope.entidadesBancarias = [];
    $scope.nombreEntidadBancaria = null;


    $scope.readEntidades = function() {
        var filter = {
            nombreEntidadBancaria: $scope.nombreEntidadBancaria
        };
        $http.get("/proyecto2_bank_server/api/EntidadBancaria", {params: filter}).success(function(result) {

            $scope.entidadesBancarias = result;
        });

    };

    $scope.deleteEntidadBancaria = function(idEntidadBancaria) {
        $http.delete("/proyecto2_bank_server/api/EntidadBancaria/" + idEntidadBancaria).success(function(result) {
            $scope.readEntidades();
        });
    };


    $scope.readEntidades();
});

app.controller("entityEditCtrl", function($scope, $http, $routeParams, $location) {
     $scope.tiposEntidadBancaria = [{
        enumEntidadBancaria: "BANCO",
        nombre: "Bank"
    }, {
        enumEntidadBancaria: "CAJADEAHORRO",
        nombre: "Savings bank"
    }, {
        enumEntidadBancaria: "COOPERATIVASDECREDITO",
        nombre: "Cooperative Credit"     
    }, {
        enumEntidadBancaria: "ESTABLECIMIENTOSFINACIEROSDECREDITO",
        nombre: "Credit institutions"
    }];    
    
    $scope.entidadBancaria = null;
    $scope.title = "Edit";
    $scope.params = $routeParams;


    $scope.readEntidadBancaria = function() {
        $http.get("/proyecto2_bank_server/api/EntidadBancaria/" + $scope.params.idEntidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
    };


    $scope.updateEntidadBancaria = function() {
        $http.put("/proyecto2_bank_server/api/EntidadBancaria/"
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
    $scope.tiposEntidadBancaria = [{
        enumEntidadBancaria: "BANCO",
        nombre: "Bank"
    }, {
        enumEntidadBancaria: "CAJADEAHORRO",
        nombre: "Savings bank"
    }, {
        enumEntidadBancaria: "COOPERATIVASDECREDITO",
        nombre: "Cooperative Credit"     
    }, {
        enumEntidadBancaria: "ESTABLECIMIENTOSFINACIEROSDECREDITO",
        nombre: "Credit institutions"
    }];    
    
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.tipoEntidadBancaria = $scope.tiposEntidadBancaria[0].enumEntidadBancaria;
    $scope.title = "Add";

    $scope.insertEntidadBancaria = function() {

        $http.post("/proyecto2_bank_server/api/EntidadBancaria/", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/Entity");
    };

    $scope.buttonOK = function() {
        $scope.insertEntidadBancaria();
    };
    
});
