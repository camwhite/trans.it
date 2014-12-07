'use strict';

angular.module('transitApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.userMenu = [
    {
      'title': 'Translation',
      'link': '/translation'
    },
    {
      'title': 'Queue',
      'link': '/que'
    }
    ];
    $scope.translatorMenu = [
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
    console.log("current user role = ", $scope.getCurrentUser().role);
    $scope.isTranslator = ($scope.getCurrentUser().role === "translator");



    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
