'use strict';

describe('Controller: finishedtasks', function () {

  // load the controller's module
  beforeEach(function(){
    module('tasksApp');
  });

  var scope,
    mockProjectStoreService,
    tasksController;

  beforeEach(function(){
    mockProjectStoreService = {
      getCurrent: function(){
        return {
          name: 'mock project',
          listAry: [[],[],[]]
        };
        
      }
    };
  });


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    tasksController = $controller('TasksCtrl', {
      $scope: scope,
      projectStoreService : mockProjectStoreService
    });
  }));

  function addMockTask(){
    scope.project.task ={ name: 'Test Task'};
    scope.addTask();

    expect(scope.project.listAry[0].length).toBe(1);
  }

  it('can add a new task', function () {  
    //Arrange & Act
    addMockTask();

    //assert
    expect(scope.project.listAry[0][0].name).toBe('Test Task');
  });

  it('can delete a task', function(){
    //arrange
    addMockTask();

    //act
    scope.removeTask(0, scope.project.listAry[0]);

    //assert
    expect(scope.project.listAry[0].length).toBe(0);
  });

  it('can move a task from "to do" list to "working on"', function () {
    //arrange
    addMockTask();

    //act
    scope.moveTask(0, scope.project.listAry[0], scope.project.listAry[1]);

    //assert
    expect(scope.project.listAry[1].length).toBe(1);
    expect(scope.project.listAry[1][0].name).toBe('Test Task');
  });


  it('can move a task back from "working on" list to "to do"', function () {  
    //arrange
    addMockTask();
    scope.moveTask(0, scope.project.listAry[0], scope.project.listAry[1]);

    //act
    scope.moveTask(0, scope.project.listAry[1], scope.project.listAry[0]);

    //assert
    expect(scope.project.listAry[0].length).toBe(1);
    expect(scope.project.listAry[0][0].name).toBe('Test Task');
  });


  it('can move a task from "working on"  list to "finished"', function () {
    //arrange
    addMockTask();
    scope.moveTask(0, scope.project.listAry[0], scope.project.listAry[1]);

    //act
    scope.moveTask(0, scope.project.listAry[1], scope.project.listAry[2]);

    //assert
    expect(scope.project.listAry[2].length).toBe(1);
    expect(scope.project.listAry[2][0].name).toBe('Test Task');
  });

  it('can move a task from "finished" list to "working on"', function () {
    //arrange
    addMockTask();
    scope.moveTask(0, scope.project.listAry[0], scope.project.listAry[1]);
    scope.moveTask(0, scope.project.listAry[1], scope.project.listAry[2]);

    //act
    scope.moveTask(0, scope.project.listAry[2], scope.project.listAry[1]);

    //assert
    expect(scope.project.listAry[1].length).toBe(1);
    expect(scope.project.listAry[1][0].name).toBe('Test Task');
  });
});
