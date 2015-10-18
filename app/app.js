'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.aboutme',
  'myApp.view1',
  'myApp.view2',
  'myApp.TaskTracker',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/aboutme'});
}]);



