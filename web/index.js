var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "main.html",
                controller: "mainCtrl"
            });
    $routeProvider.when("/Entity",
            {
                templateUrl: "Entity.html",
                controller: "EntityCtrl"
            });
    $routeProvider.when("/BranchOffice",
            {
                templateUrl: "BranchOffice.html",
                controller: "BranchCtrl"
            });
    $routeProvider.when("/Accounts",
            {
                templateUrl: "Accounts.html",
                controller: "AccountsCtrl"
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
