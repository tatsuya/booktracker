'use strict';

var app = angular.module('booktracker', [
  'ngRoute',
  'booktrackerControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        controller: 'BooksCtrl'
      }).
      otherwise({
        redirectTo: '/books'
      });
  }]);