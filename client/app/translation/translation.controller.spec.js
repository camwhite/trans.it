'use strict';

describe('Controller: TranslationCtrl', function () {

  // load the controller's module
  beforeEach(module('transitApp'));

  var TranslationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TranslationCtrl = $controller('TranslationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
