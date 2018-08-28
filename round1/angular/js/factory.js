var app = angular.module("chatApp", ['ngRoute']);

app.factory("chatFactory", function () {
    messages = []
    messages.setMessage = (member_id, newMsg) => {
        messages.push(member_id + ": " + newMsg)
    };
    return messages
});