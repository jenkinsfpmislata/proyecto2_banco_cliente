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
    $routeProvider.otherwise({
        redirectTo: "/"
    });

});
