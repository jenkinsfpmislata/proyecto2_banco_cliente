var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "adminPanel.html"
            });
    $routeProvider.when("/Accounts",
            {
                templateUrl: "accounts.html",
                controller: "accountsCtrl"
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
    $routeProvider.when("/Movements",
            {
                templateUrl: "movements.html",
                controller: "movementsCtrl"
            });
    $routeProvider.when("/Accounts/Add",
            {
                templateUrl: "accountsForm.html",
                controller: "accountsForm"
            });
    $routeProvider.when("/Accounts/Edit",
            {
                templateUrl: "accountsForm.html",
                controller: "accountsForm"
            });
    $routeProvider.when("/BranchOffice/Add/",
            {
                templateUrl: "branchOfficeForm.html",
                controller: "branchOfficeAddCtrl"
            });
    $routeProvider.when("/BranchOffice/Edit/:idSucursalBancaria",
            {
                templateUrl: "branchOfficeForm.html",
                controller: "branchOfficeEditCtrl"
            });
    $routeProvider.when("/Movements/Add",
            {
                templateUrl: "movementsForm.html",
                controller: "movementsForm"
            });
    $routeProvider.when("/Movements/Edit",
            {
                templateUrl: "movementsForm.html",
                controller: "movementsForm"
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
    $routeProvider.otherwise({
        redirectTo: "/"
    });

});
