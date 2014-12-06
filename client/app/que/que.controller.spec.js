'use strict';

describe('Controller: QueCtrl', function () {

  // load the controller's module
  beforeEach(module('transitApp'));

  var QueCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueCtrl = $controller('QueCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
