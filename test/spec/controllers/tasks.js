'use strict';

describe('Controller: finishedtasks', function () {

  // load the controller's module
  beforeEach(angular.module('tasksApp'));

  var scope,
    location,
    mockProjectStoreService
    tasksController;

  // Create Mock projectService
  angular.module(function($provide){
    $provide.service('projectStoreService', function(){
        return{
          getProjects: function(){
            jasmine.createSpy('getProjects').andCallFake(function(){
              //add fake implementation here
            });
          },
          getCurrent: function(){
            jasmine.createSpy('getCurrent').andCallFake(function(){
              //add fake implementation here
            });
          },
          save: function(project){
            jasmine.createSpy('save').andCallFake(function(project){
              //add fake implementation here
            });
          },
          setCurrent: function(project){
            jasmine.createSpy('setCurrent').andCallFake(function(project){
              //add fake implementation here
            });
          }
        }
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, projectStoreService) {
    scope = $rootScope.$new();
    tasksController = $controller('TasksCtrl', {
      $scope: scope,
      mockProjectStoreService : projectStoreService
    });
  }));

  it('can add a new task', function () {  
  });

  it('can delete a task', function(){

  });

  it('can move a task between lists', function () {

  });
});
