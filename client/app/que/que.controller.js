'use strict';

angular.module('transitApp')
  .controller('QueCtrl', function ($scope, $http, Auth) {
    $scope.curUserObjId = Auth.getCurrentUser()._id;
    console.log('curUserObjId: ', $scope.curUserObjId);
    $http.get('api/things').success( function(data){
      $scope.things = data;
      console.log('QueCtrl data: ', data);
    });
    $scope.textNotTranslated = function(txt) {
      return txt === undefined;
    }
  });
