app.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: '/static/templates/contacts_table.html'
        })
        .state('add', {
            url: '/addnew',
            templateUrl: '/static/templates/add_new.html'
        })
        .state('editcontact', {
            url: '/editcontact/{contactid}',
            templateUrl: '/static/templates/edit.html',
        })
});