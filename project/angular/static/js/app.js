let app = angular.module('ContactsApp', ['ui.router']);

app.factory('EditFactory', function () {
    this.id = '';
    this.name = '';
    return [this.id, this.name]
});

app.controller('ContactsController', function ($scope, $http, EditFactory) {
    $http.get('http://127.0.0.1:8000/api/v1/contacts/').then(function (response) {
        $scope.contacts = response.data;
    });

    $scope.deleteContact = function (id) {
        $http({
            method: 'DELETE',
            url: 'http://127.0.0.1:8000/api/v1/contacts/' + id + '/',
            headers: {'Content-Type': 'application/json'}
        });
        window.location.reload()
    };

    $scope.editcontact = function (id) {
        $http.get('http://127.0.0.1:8000/api/v1/contacts/' + id + '/').then(function (response) {
            EditFactory.id = id;
            EditFactory.name = response.data.name;
            window.location.href = '#!/editcontact/' + id
        });
    }

});

app.controller('AddController', function ($scope, $http) {
    $scope.submitData = function () {
        let name = $('#name').val();
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/v1/contacts/',
            data: {name: name},
            headers: {'Content-Type': 'application/json'}
        });
        window.location.reload()
    }
});

app.controller('EditController', function ($scope, $http, EditFactory) {
    $scope.id = EditFactory.id;
    $scope.name = EditFactory.name;
    $scope.submitData = function () {
        $http({
            method: 'PUT',
            url: 'http://127.0.0.1:8000/api/v1/contacts/' + $scope.id + '/',
            data: {name: $scope.name},
            headers: {'Content-Type': 'application/json'}
        });
        window.location.reload()
    }
    $scope.checkData = function () {
        let matches = $scope.name.match(/\d+/g);
        if (matches != null) {
            $scope.name = $scope.name.substring(0,$scope.name.length-1)
        }
    }

});

let submitBtn = `<input type="submit" class="btn btn-primary " value="Save" ng-click="submitData()">`;
let addTemplate = `<div ng-controller="AddController">` + `<input type="text" class="form-control" ng-model="name" id="name" placeholder="Add New Contact">` + submitBtn + `</div>`;
let editTemplate = `<div ng-controller="EditController">` + `<input type="text" class="form-control" placeholder="Edit Contact" ng-model="name" ng-change="checkData()">` + submitBtn + `</div>`;

app.config(function ($stateProvider) {
    let addContact = {
        name: 'add',
        url: '/addnew',
        template: addTemplate
    };

    let editContact = {
        name: 'editcontact',
        url: '/editcontact/{contactid}',
        template: editTemplate,

    };

    $stateProvider.state(addContact);
    $stateProvider.state(editContact)
});