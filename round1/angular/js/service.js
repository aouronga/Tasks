var app = angular.module("myApp", [])

app.factory("myFactory", function() {
    messages = {}
    messages.setMessage = (newMsg) => {
        messages.message = newMsg
    };
    // console.log(this.message)
    return messages
});

app.controller("anotherController", function ($scope, myFactory){
    
    $scope.pushMsg = function(){
        myFactory.setMessage("Hello From myFactory")
    }
});


app.controller("myController", function($scope, myFactory){
    $scope.factoryMsg = myFactory.message
    console.log(myFactory)
})

