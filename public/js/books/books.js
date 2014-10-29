'use strict';

angular.module('booktracker.books', ['booktracker.services']).
  controller('BookListCtrl', ['$scope', 'Book',
    function($scope, Book) {
      $scope.books = Book.query();
      console.log($scope.books);
    }
  ]).
  controller('BookDetailCtrl', ['$scope', '$routeParams', 'Book',
    function($scope, $routeParams, Book) {
      $scope.book = Book.get({id: $routeParams.id});

      $scope.toggleCompleted = function(child) {
        child.completed = !child.completed;
        // PUT /books/:id with the book object in the request payload
        Book.update({id: $scope.book.id}, $scope.book);
      };
    }
  ]);
