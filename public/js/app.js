'use strict';

angular.module('booktracker', [
  'ngRoute',
  'booktracker.books'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/books', {
      templateUrl: 'partials/books',
      controller: 'BooksCtrl'
    }).
    when('/books/:id', {
      templateUrl: 'partials/books'
      controller: ''
    })
    otherwise({
      redirectTo: '/books'
    });
  $locationProvider.html5Mode(true);
});