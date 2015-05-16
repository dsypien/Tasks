'use strict';

describe('ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('tasksApp');
  });

  var scope,
    location,
    projectsController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, projectStoreService) {
    location = $location;
    scope = $rootScope.$new();

    projectsController = $controller('ProjectsCtrl', {
      $scope: scope,
      location: $location,
      projectStoreService : projectStoreService
    });
  }));

  it('can create a new project', function(){
    //arrange
    scope.project.name = 'test project';

    //act
    scope.create();

    //assert
    expect(scope.projects.length).toBe(1);
    expect(scope.projects[0].name).toBe('test project');
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
});
