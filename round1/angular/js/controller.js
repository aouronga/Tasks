var app = angular.module("myApp", ['ngRoute']);
app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "add_member.html",
            controller: "inputCtrl"
        })
        .when("/about", {
            template: "<h2>About us</h2>",
            controller: "getResultCtrl"
        });
});
var x = app.controller("inputCtrl", ($scope) => {
    $scope.inputname = "ABC"
});

console.log(x)

app.controller("getResultCtrl", ($scope) => {
    console.log()
});