'use strict';

describe('Directive: tooltip', function () {

  // load the directive's module
  beforeEach(module('angular14InterviewApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tooltip></tooltip>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tooltip directive');
  }));
});
