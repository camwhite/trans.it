'use strict';

angular.module('transitApp')
  .controller('TranslatorCtrl', function ($scope, $stateParams, $http) {
    $http.get('api/things/' + $stateParams.thingId).success(function(data) {
      $scope.thing = data;
    })
  });
