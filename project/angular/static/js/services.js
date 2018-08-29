//To display data in table
app.service('DisplayService', function ($http) {
    let service = {};
    service.getAllData = function () {
        return $http.get(app.host + '/api/v1/contacts/')
    };
    return {
        getAllData: service.getAllData
    };
});

app.service('EditService', function () {
    var contact = {};
    return contact;
});

app.factory("RestrictToNumberService", function () {

    return {
        checkNumber: function (name='') {
            let matches = name.match(/\d+/g);
            if (matches != null) {
                return true;
            }
        }
    };
});