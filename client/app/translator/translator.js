'use strict';

angular.module('transitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('translator', {
        url: '/translator/:thingId',
        templateUrl: 'app/translator/translator.html',
        controller: 'TranslatorCtrl'
      });
  });
