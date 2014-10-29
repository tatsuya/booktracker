'use strict';

angular.module('booktracker', [
  'ngRoute',
  'booktracker.books'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/books', {
      templateUrl: 'partials/books',
      controller: 'BookListCtrl'
    }).
    when('/books/:id', {
      templateUrl: 'partials/book',
      controller: 'BookDetailCtrl'
    }).
    otherwise({
      redirectTo: '/books'
    });
  $locationProvider.html5Mode(true);
});