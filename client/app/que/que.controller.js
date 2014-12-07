'use strict';

angular.module('transitApp')
  .controller('QueCtrl', function ($scope, $http, Auth) {
    $http.get('api/things').success( function(data){
      $scope.things = data;
    });

    $scope.curUserObjId = Auth.getCurrentUser()._id;
    $scope.isTranslator = Auth.isTranslator();
    $scope.isAdmin = Auth.isAdmin();
    $scope.curUserLanguages = Auth.getCurrentUser().languages;

    // filter out q items based on user role and user id
    // admin - all items
    // translator - my translated items, open items with my languages
    // user - my items
    $scope.filterMyQItems = function(qItem) {
      var myItem = true; // default for the admin user


      if ($scope.isTranslator) {
        // first check to see if I created this item, or if I translated this item
        if ($scope.curUserObjId === qItem.userObjId || qItem.translatorId == $scope.curUserObjId) {
          myItem = true;
        } else {
          // not mine, so check to see if status is open, and I know the language
          if (qItem.translatedMessage === undefined && !qItem.active) { // item is open
            // check if I know the from & to languages
            var knowFromLang = false;
            var knowToLang = false;
            var fromLang = qItem.fromLang;
            var toLang = qItem.toLang
            for (var i = 0; i < qItem.languages.length; i++) {
              if (fromLang == qItem.languages[i]) {
                knowFromLang = true;
              }
              if (toLang == qItem.languages[i]) {
                knowToLang = true;
              }
            }
            if (knowToLang && knowFromLang {
              myItem = true;
            }
          } else {
            // item is not mine, and has already been translated, so don't show it
            myItem = false;
          }
        }
      } else if (!$scope.isAdmin) { //means we are a user
        // return true if I created this item
        myItem = ($scope.curUserObjId === qItem.userObjId);
      }
      return myItem;
    }
    
    $scope.checkState = function(arg) {
      return arg === undefined;
    }
  });
