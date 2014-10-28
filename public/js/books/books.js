angular.module('booktracker.books', []).
  controller('BooksCtrl', function($scope, $http) {
    $http.get('/api/books').
      success(function(data) {
        $scope.books = data.books;
      });
  });