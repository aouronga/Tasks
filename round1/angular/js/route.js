app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            templateUrl: "member1.html"
        })
        .when("/member2", {
            templateUrl: "member2.html"
        });
});