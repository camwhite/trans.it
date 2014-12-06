'use strict';

angular.module('transitApp')
  .controller('QueCtrl', function ($scope, $http) {
    $http.get('api/things').success( function(data){
      $scope.things = data;
      console.log('QueCtrl data: ', data);
    });
  });
