var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "main.html",
                controller: "main"
            });
    $routeProvider.otherwise({
        redirectTo: "/"
    });

});
