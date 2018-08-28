app.config(function ($stateProvider) {
    let home = {
        name: 'home',
        url: '',
        templateUrl: '/static/templates/contacts_table.html'
    };

    let addContact = {
        name: 'add',
        url: '/addnew',
        templateUrl: '/static/templates/add_new.html'
    };

    let editContact = {
        name: 'editcontact',
        url: '/editcontact/{contactid}',
        templateUrl: '/static/templates/edit.html',

    };
    $stateProvider.state(home);
    $stateProvider.state(addContact);
    $stateProvider.state(editContact)
});