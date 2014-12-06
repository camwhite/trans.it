'use strict';

describe('Controller: TranslatorCtrl', function () {

  // load the controller's module
  beforeEach(module('transitApp'));

  var TranslatorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TranslatorCtrl = $controller('TranslatorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
