var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "adminPanel.html"
            });
    $routeProvider.when("/Accounts/",
            {
                templateUrl: "accounts.html",
                controller: "accountsSearchDeleteCtrl"
            });
    $routeProvider.when("/BranchOffice",
            {
                templateUrl: "branchOffice.html",
                controller: "branchOfficeSearchDeleteCtrl"
            });
    $routeProvider.when("/Entity/",
            {
                templateUrl: "entity.html",
                controller: "entitySearchDeleteCtrl"
            });
    $routeProvider.when("/Movements/",
            {
                templateUrl: "movements.html",
                controller: "movementsSearchCtrl"
            });
    $routeProvider.when("/Movements/Add/:idCuentaBancaria",
            {
                templateUrl: "movementsForm.html",
                controller: "movementsAddCtrl"
            });
    $routeProvider.when("/Accounts/Add",
            {
                templateUrl: "accountsForm.html",
                controller: "accountAddCtrl"
            });
    $routeProvider.when("/Accounts/Edit/:idCuentaBancaria",
            {
                templateUrl: "accountsForm.html",
                controller: "accountsEditCtrl"
            });
    $routeProvider.when("/Accounts/Details/:idCuentaBancaria",
            {
                templateUrl: "accountDetails.html",
                controller: "accountDetailsCtrl"
            });
    $routeProvider.when("/BranchOffice/Add/:idEntidadBancaria",
            {
                templateUrl: "branchOfficeForm.html",
                controller: "branchOfficeAddCtrl"
            });
    $routeProvider.when("/BranchOffice/Edit/:idSucursalBancaria",
            {
                templateUrl: "branchOfficeForm.html",
                controller: "branchOfficeEditCtrl"
            });  
    $routeProvider.when("/Entity/Add",
            {
                templateUrl: "entityForm.html",
                controller: "entityAddCtrl"
            });
    $routeProvider.when("/Entity/Edit/:idEntidadBancaria",
            {
                templateUrl: "entityForm.html",
                controller: "entityEditCtrl"
            });
    $routeProvider.when("/Entity/Details/:idEntidadBancaria",
            {
                templateUrl: "entityDetails.html",
                controller: "entityDetailsCtrl"
            });
    $routeProvider.otherwise({
        redirectTo: "/"
    });

});
