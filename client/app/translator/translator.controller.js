'use strict';

angular.module('transitApp')
  .controller('TranslatorCtrl', function ($scope, $stateParams, $http, Auth) {

    $http.get('api/things/' + $stateParams.thingId).success(function(data) {
      $scope.thing = data;
      $scope.translated = data.translatedMessage;
    });

    $scope.isTranslator = Auth.isTranslator;

    $http.get('api/things/next').success(function(data) {
      console.log(data);
    });

    $scope.updateTranslatedCount = function() {
      $http.get('api/things/translator/' + Auth.getCurrentUser()._id)
        .success(function(data) {
          $scope.translatedCount = data.length;
        }
      );
    };

    $scope.updateTranslatedCount();

    $scope.emailNotice = function() {
      $http.post('api/things/mail', {recipient: Auth.getCurrentUser().email,
              subject: 'Translation by trans.it is ready',
              content: 'Your translation is complete.'}).success(function(data){});
    };

    $scope.submitTranslation = function() {

      $http.put('api/things/' + $scope.thing._id, {translatedMessage: $scope.translated, translatorId: Auth.getCurrentUser()._id}).success(function() {
        $http.get('api/things/next').success(function(data) {
          $scope.thing = data;
          $scope.translated = '';
          $scope.updateTranslatedCount();
          $scope.emailNotice();
        });
      }).error(function(status) {
        console.log(status);
      })

    };
  });
