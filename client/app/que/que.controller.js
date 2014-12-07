'use strict';

angular.module('transitApp')
  .controller('QueCtrl', function ($scope, $http) {
    $http.get('api/things').success( function(data){
      $scope.things = data;
    });
    $scope.checkState = function(arg) {
      return arg === undefined;
    }
  });
