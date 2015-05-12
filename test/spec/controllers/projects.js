'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('tasksApp');
  });

  var scope,
    projectsController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, projectStoreService) {
    this.$location = $location;
    scope = $rootScope.$new();

    projectsController = $controller('ProjectsCtrl', {
      $scope: scope,
      $location: $location,
      projectStoreService : projectStoreService
    });
  }));

  it('can create a new project', function(){
    expect(scope.projects.length).toBe(0);

    //act
    scope.create();

    //assert
    expect(scope.projects.length).toBe(1);
  });

  it('can delete an existing project', function(){
    //arrange
    expect(scope.projects.length).toBe(0);
    scope.create();
    expect(scope.projects.length).toBe(1);

    //act
    scope.delete(0);

    //assert
    expect(scope.projects.length).toBe(0);
  });

  it('navigates to taks on click of a project', function(){

  });

  it('saves project when the project is updated', function(){

  });

});
