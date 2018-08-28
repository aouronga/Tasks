app.controller("memberOne", function ($scope, chatFactory) {
    let member_id = "Member 1";
    $scope.pushMessage = function () {
        
        chatFactory.setMessage(member_id, $scope.textmessage);
        $scope.textmessage = ""
        $scope.messages = chatFactory
    };
});


app.controller("memberTwo", function ($scope, chatFactory) {
    let member_id = "Member 2";
    $scope.pushMessage = function () {
        
        chatFactory.setMessage(member_id, $scope.textmessage);
        $scope.textmessage = ""
        $scope.messages = chatFactory
    };
})