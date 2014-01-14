app.controller("entitySearchCtrl",function($scope, $http){
      $scope.entidad = null;
      $scope.entidadesBancarias = [];
      
      
      $scope.readEntidades=function(){
        $http.get("proyecto2_bank_server/api/EntidadBancaria").success(function(result) {
            $scope.entidadesBancarias=result;
        });
    }
    
});


