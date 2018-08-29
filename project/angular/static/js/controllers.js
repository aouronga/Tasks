app.controller('ContactsController', function ($scope, $http, $location, EditService, DisplayService) {
    DisplayService.getAllData().then(function (response) {
        $scope.contacts = response.data
    });

    $scope.deleteContact = function (id) {
        $http({
            method: 'DELETE',
            url: app.host + '/api/v1/contacts/' + id + '/',
            headers: {'Content-Type': 'application/json'}
        }).then(function successCallback() {
            DisplayService.getAllData().then(function (response) {
                $scope.contacts = response.data
            });

        }, function errorCallback(response) {
                console.log(response)
        });
    };

    $scope.editcontact = function (id) {
        $http.get(app.host + '/api/v1/contacts/' + id + '/').then(function (response) {

            EditService.contact = response.data;
            $location.path('editcontact/' + id)
        });
    }
});

app.controller('AddController', function ($scope, $timeout, $http, RestrictToNumberService) {

    $scope.submitData = function () {
        $http({
            method: 'POST',
            url: app.host + '/api/v1/contacts/',
            data: $scope.contact,
            headers: {'Content-Type': 'application/json'}
        }).then(function successCallback() {
            $timeout(function () {
                $('.info').addClass('alert alert-success').text("Successfully Saved!")
            }, 1000)
        }, function errorCallback() {
            $timeout(function () {
                $('.info').addClass('alert alert-danger').text("Failed!")
            }, 1000)
        });
    };
    $scope.checkData = function () {
        let name = $scope.contact.name;

        if (RestrictToNumberService.checkNumber(name)) {
            $scope.contact.name = $scope.contact.name.substring(0, $scope.contact.name.length - 1)
        }
    }
});

app.controller('EditController', function ($scope, $http, $timeout, $location, EditService, RestrictToNumberService) {
    $scope.id = EditService.contact.id;
    $scope.contact = EditService.contact;
    $scope.submitData = function () {
        $http({
            method: 'PUT',
            url: app.host + '/api/v1/contacts/' + $scope.id + '/',
            data: $scope.contact,
            headers: {'Content-Type': 'application/json'}
        }).then(function successCallback() {
            $timeout(function () {
                $('.info').addClass('alert alert-success').text("Successfully Edited!")
            }, 1000)
        }, function errorCallback() {
            $timeout(function () {
                $('.info').addClass('alert alert-danger').text("Failed!")
            }, 1000)
        });
    };
    $scope.checkData = function () {
        let name = $scope.contact.name;

        if (RestrictToNumberService.checkNumber(name)) {
            $scope.contact.name = $scope.contact.name.substring(0, $scope.contact.name.length - 1)
        }
    }

});