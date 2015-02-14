'use strict';

angular.module('tasksApp')
  .controller('TasksCtrl', function ($scope, localStorageService, projectStoreService) {
    $scope.project = projectStoreService.getCurrent();
    console.log("current proj: " + $scope.project);
    
    $scope.addTask = function(){
    	$scope.project.tasks.push($scope.project.task);
    	$scope.project.task = '';
    };

    $scope.finishTask = function(index){
    	var task = $scope.project.tasks.splice(index, 1)[0];
    	$scope.project.finishedTasks.push(task);
    };

  });
