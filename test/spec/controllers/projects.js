'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(angular.module('tasksApp'));

  var scope,
    location,
    mockProjectStoreService,
    projectsController;

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
    projectsController = $controller('ProjectsCtrl', {
      $scope: scope,
      mockProjectStoreService : projectStoreService
    });
  }));

  it('can create a new project', function(){

  });

  it('can delete an existing project', function(){

  });

  it('navigates to taks on click of a project', function(){

  });

});
