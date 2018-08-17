var myTask = angular.module("myTask", [])

myTask.controller("FirstController", function FirstController($scope){
    $scope.members = [
        {name: "Abir", address: "Dhaka", age: 99}
    ]
})

myTask.controller("SecondController", function($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/todos/").then(function(response){
        $scope.alldata = response.data
    })
})

var myRoute = angular.module("myRoute", ["ngRoute"])

myRoute.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "main.html"
    })
    .when('/one', {
        templateUrl: "one.html"
    })
    .when('/two', {
        templateUrl: "two.html"
    })
})