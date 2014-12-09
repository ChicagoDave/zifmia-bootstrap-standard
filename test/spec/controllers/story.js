'use strict';

describe('Controller: StoryCtrl', function () {

  // load the controller's module
  beforeEach(module('zbsApp'));

  var StoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryCtrl = $controller('StoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a viewName to the scope', function () {
    expect(scope.viewName.length).toBeGreaterThan(0);
  });
});
