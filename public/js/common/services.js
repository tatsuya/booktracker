'use strict';

angular.module('booktracker.services', ['ngResource']).
  factory('Book', ['$resource', function($resource) {
    return $resource('/api/books/:id', null, {
      'update': {method: 'PUT'}
    });
  }]);