'use strict';

angular.module('transitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('translator', {
        url: '/translator',
        templateUrl: 'app/translator/translator.html',
        controller: 'TranslatorCtrl'
      });
  });