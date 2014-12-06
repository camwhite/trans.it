'use strict';

angular.module('transitApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
    {
      'title': 'Translation',
      'link': '/translation'
    },
    {
      'title': 'Queue',
      'link': '/que'
    },
    {
      'title': 'Translator',
      'link': '/translator'
    }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
