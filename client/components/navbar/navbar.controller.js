'use strict';

angular.module('transitApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $http) {
    // $scope.getNext = function() {
    //   $http.get('api/things/next').success(function(data) {
    //     $scope.thing = data;
    //   });
    //   if($scope.thing === undefined) {
    //     return '/que';
    //   }
    //   return '/translator/' + $scope.thing._id;
    // }

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
    }
    // {
    //   'title': 'Translator',
    //   'link': $scope.getNext()
    // }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    console.log("current user role = ", $scope.getCurrentUser().role);
    $scope.isTranslator = Auth.isTranslator;
    $scope.isUser = Auth.isUser;



    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
