var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "clientMain.html",
                controller: "mainCtrl"
            });
    $routeProvider.when("/Accounts",
            {
                templateUrl: "Accounts.html",
                controller: "AccountsCtrl"
            });
    $routeProvider.when("/BranchOffice",
            {
                templateUrl: "BranchOffice.html",
                controller: "BranchCtrl"
            });
    $routeProvider.when("/Deposit",
            {
                templateUrl: "Deposit.html",
                controller: "DepositCtrl"
            });
    $routeProvider.when("/Movements",
            {
                templateUrl: "Movements.html",
                controller: "MovementsCtrl"
            });

});