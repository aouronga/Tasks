//To display data in table
app.service('DisplayService', function ($http) {
    let service = {};
    service.setData = function (contact) {
        return $http({
            method: 'POST',
            url: app.host + '/api/v1/contacts/',
            data: contact,
            headers: {'Content-Type': 'application/json'}
        })
    };

    service.getAllData = function () {
        return $http.get(app.host + '/api/v1/contacts/')
    };
    return {
        setData: service.setData,
        getAllData: service.getAllData
    };
});

app.factory('EditFactory', function () {
    var contact = {};
    return contact;
});