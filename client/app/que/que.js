'use strict';

angular.module('transitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('que', {
        url: '/que',
        templateUrl: 'app/que/que.html',
        controller: 'QueCtrl'
      });
  });
