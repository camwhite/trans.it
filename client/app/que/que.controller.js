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
    $scope.filterMyQItems = function(thing) {

      var myItem = false;
      // pull values from our thing object & set defaults if undefined
      var translatorId = (thing.translatorId === undefined) ? -1 : thing.translatorId;
      var userObjId = (thing.userObjId === undefined) ? -1 : thing.userObjId;
      var fromLang = (thing.fromLang === undefined) ? "" : thing.fromLang;
      var toLang = (thing.toLang === undefined) ? "" : thing.toLang;
      var languages = ($scope.curUserLanguages === undefined) ? [] : $scope.curUserLanguages;

      if ($scope.isTranslator) {
        // first check to see if I created this item, or if I translated this item
        if ($scope.curUserObjId === userObjId || translatorId == $scope.curUserObjId) {
          myItem = true;
        } else {
          // not mine, so check to see if status is open, and I know the language
          if (thing.translatedMessage === undefined && !thing.active) { // item is open
            // check if I know the from & to languages
            var knowFromLang = false;
            var knowToLang = false;
            for (var i = 0; i < languages.length; i++) {
              if (fromLang == languages[i]) {
                knowFromLang = true;
              }
              if (toLang == languages[i]) {
                knowToLang = true;
              }
            }
            if (knowToLang && knowFromLang) {
              myItem = true;
            }
          } else {
            // item is not mine, and has already been translated, so don't show it
            myItem = false;
          }
        }
      } else if (!$scope.isAdmin) { //means we are a user
        // return true if I created this item
        myItem = ($scope.curUserObjId === userObjId);
      } else {
        myItem = true; // admins get to see everything
      }
      return myItem;
    }

    $scope.checkState = function(arg) {
      return arg === undefined;
    }
  });
