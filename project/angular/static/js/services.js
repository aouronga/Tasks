app.service('DisplayService', function ($http) {
    var service = {};
    service.setData = function (name) {
        return $http({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/v1/contacts/',
            data: {name: name},
            headers: {'Content-Type': 'application/json'}
        })
    };

    service.getAllData = function () {
        return $http.get('http://127.0.0.1:8000/api/v1/contacts/')
    };
    return {
        setData: service.setData,
        getAllData: service.getAllData
    };
});

app.factory('EditFactory', function () {
    this.id = '';
    this.name = '';
    return [this.id, this.name]
});
