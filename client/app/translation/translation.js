'use strict';

angular.module('transitApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('translation', {
        url: '/translation',
        templateUrl: 'app/translation/translation.html',
        controller: 'TranslationCtrl'
      });
  });
