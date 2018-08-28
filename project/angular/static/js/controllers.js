
app.controller('ContactsController', function ($scope, $http, $location, EditFactory, DisplayService) {

    DisplayService.getAllData().then(function (response) {
        $scope.contacts = response.data
    });

    $scope.deleteContact = function (id) {
        $http({
            method: 'DELETE',
            url: 'http://127.0.0.1:8000/api/v1/contacts/' + id + '/',
            headers: {'Content-Type': 'application/json'}
        });
        $location.reload()
    };

    $scope.editcontact = function (id) {
        $http.get('http://127.0.0.1:8000/api/v1/contacts/' + id + '/').then(function (response) {
            EditFactory.id = id;
            EditFactory.name = response.data.name;
            $location.path('editcontact/' + id)
        });
    }

});

app.controller('AddController', function ($scope, $http, DisplayService) {

    $scope.submitData = function () {
        let name = $('#name').val();
        DisplayService.setData(name)
            .then(function successCallback(response) {
                console.log(response)
            }, function errorCallback(response) {
                console.log(response)
            });
    }
});

app.controller('EditController', function ($scope, $http, $location, EditFactory) {
    $scope.id = EditFactory.id;
    $scope.name = EditFactory.name;
    $scope.submitData = function () {
        $http({
            method: 'PUT',
            url: 'http://127.0.0.1:8000/api/v1/contacts/' + $scope.id + '/',
            data: {name: $scope.name},
            headers: {'Content-Type': 'application/json'}
        });
    };
    $scope.checkData = function () {
        let matches = $scope.name.match(/\d+/g);
        if (matches != null) {
            $scope.name = $scope.name.substring(0, $scope.name.length - 1)
        }
    }

});