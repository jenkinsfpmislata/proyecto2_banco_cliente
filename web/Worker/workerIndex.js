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
                controller: "branchOfficeCtrl"
            });
    $routeProvider.when("/Entity",
            {
                templateUrl: "entity.html",
                controller: "entitySearchCtrl"
            });
    $routeProvider.when("/Movements",
            {
                templateUrl: "Movements.html",
                controller: "MovementsCtrl"
            });
    $routeProvider.when("/Account/New",
            {
                templateUrl: "accountsForm.html",
                controller: "accountsForm"
            });
    $routeProvider.otherwise({
        redirectTo: "/"
    });

});
