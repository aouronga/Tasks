# Tasks

Round 1: Technical Tasks
Angular Part:
Create an angular module that meets the following requirements:
1) It must be able to pass data between route controllers. Like for example have an input
field in one route where its contents will be displayed in the next route. Please do not
use $rootScope.
2) Has a filter that takes the following array and arranges its items by "name" and orders
them -
[
 {id: 3, name: ‘rahaman’},
 {id: 1, name: ‘bashar’},
 {id: 2, name: ‘anwar’},
]
3) Has a directive that is dependent of ngModel, restricts the input to numbers only for key
press.
4) Uses ui-route to have multiple ui-views in the page. Each view should load a content
based on the route.
Django and DRF Part:
Create a Django and DRF application that will expose the following API endpoints.
1) /api/v1/contact/ - A user will be able to get a list of all the contacts and will be able to
create a new contact using this endpoint.
2) /api/v1/contact/<id>/ - A user will be able to update and delete a contact using this
endpoint.
Other Requirements:
● Proper documentation
● All code must be indented properly.
● Use separate files for controller, service, factory, route etc in angularJS.
● Use proper spacing, semicolons, commas in your code.
● UI should be responsive.
● Test your code using pylint and eslint (If possible)
