'use strict';

angular.module('myApp.TaskTracker', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/TaskTracker', {
    templateUrl: 'TaskTracker/TaskTracker.html',
    controller: 'TaskTrackerCtrl'
  });
}])

.controller('TaskTrackerCtrl', function($scope) {
    
});