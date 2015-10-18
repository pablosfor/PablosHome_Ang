'use strict';

angular.module('myApp.aboutme', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutme', {
    templateUrl: 'aboutme/aboutme.html',
    controller: 'aboutmeCtrl'
  });
}])

.controller('aboutmeCtrl', function($scope) {
    angular.element(document).ready(function () {
        $('.parallax').parallax();
    });
});