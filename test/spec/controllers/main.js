'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tasksApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no tasks to start', function () {
    expect(scope.tasks.length).toBe(0);
  });

  it('should add items to the list', function(){
    scope.task = 'Test 1';
    scope.addTask();
    expect(scope.tasks.length).toBe(1);

    scope.task = 'Test 2';
    scope.addTask();
    expect(scope.tasks.length).toBe(2);

    scope.task = 'Test 3';
    scope.addTask();
    expect(scope.tasks.length).toBe(3);
  });

  it('should add then remove an item from the list', function(){
    scope.task = 'Test 1';
    scope.addTask();
    expect(scope.tasks.length).toBe(1);

    scope.removeTask(0);
    expect(scope.tasks.length).toBe(0);
  });
});
