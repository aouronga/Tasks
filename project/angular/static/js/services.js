//To display data in table
app.service('DisplayService', function ($http) {

    return {
        getAllData: function () {
            return $http.get(app.host + '/api/v1/contacts/')
        }
    }
});

app.service('EditService', function () {
    var contact = {};
    return contact;
});

app.factory("RestrictToNumberService", function () {

    return {
        checkNumber: function (name = '') {
            let matches = name.match(/\d+/g);
            if (matches != null) {
                return true;
            }
        }
    };
});