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
                controller: "entityCtrl"
            });
    $routeProvider.when("/Movements",
            {
                templateUrl: "Movements.html",
                controller: "MovementsCtrl"
            });
    $routeProvider.when("/Admin/Accounts",
            {
                templateUrl: "adminAccounts.html",
                controller: "adminAccountsCtrl"
            });
    $routeProvider.otherwise({
        redirectTo: "/"
    });

});
