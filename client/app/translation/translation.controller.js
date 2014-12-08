'use strict';

angular.module('transitApp')
  .controller('TranslationCtrl', function ($scope, $http, Auth, $location) {
    $scope.languages = [
      {name: 'Russian'},
      {name: 'English'}
    ];

    $scope.text = '';

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = function(event) {
      for(var i = event.resultIndex; i < event.results.length; ++i) {
        $scope.$apply(function() {
          $scope.text = event.results[i][0].transcript;
        });
        if(event.results[i].isFinal) {
          $scope.$apply(function() {
            $scope.text = event.results[i][0].transcript;
          });
        }
      }
    };

    $scope.on = false;

    $scope.startStop = function() {
      $scope.on = !$scope.on;
      if($scope.on) {
        recognition.start();
      }
      if(!$scope.on) {
        recognition.stop();
      }
    };

    $scope.notOkToSubmit = function() {

      var notOk = ($scope.fromLang === undefined) ||
                  ($scope.fromLang.length === 0) ||
                  ($scope.toLang === undefined) ||
                  ($scope.toLang.length === 0) ||
                  ($scope.text === undefined) ||
                  ($scope.text.length === 0);

      return notOk;

    };

    $scope.submitTranslation = function() {
      $http.post('api/things/mail', {recipient: 'irwin.litvak@gmail.com',
                   subject: 'Translation Requested',
                   content: 'Please log on and complete translation'}).success(function(data){});
      $http.post('api/things', {userObjId: Auth.getCurrentUser()._id, title: $scope.title,
        messageToBeTranslated: $scope.text, fromLang: $scope.fromLang,
        toLang: $scope.toLang, active: false}).success(function() {
          $scope.title = '';
          $scope.text = '';
          $location.path('/que');
        })

    }

    $scope.title = '';
    $scope.fromlang = '';
    $scope.toLang = '';

  });
