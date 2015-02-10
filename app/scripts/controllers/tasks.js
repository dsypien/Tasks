'use strict';

angular.module('tasksApp')
  .controller('TasksCtrl', function ($scope, localStorageService, projectStoreService) {
  	var tasksInStore = projectStoreService.get('toDoTasks');
  	var finishedTasksInStore = projectStoreService.get('finishedTasks');

    $scope.tasks = tasksInStore || [];
    $scope.finishedTasks = finishedTasksInStore || [];

    // Save tasks to local storage when task is changed
    $scope.$watch('tasks', function(){
    	projectStoreService.set('toDoTasks', $scope.tasks);
    }, true);

    //Save finished tasks to local storage
    $scope.$watch('finishedTasks', function(){
    	projectStoreService.set('finishedTasks', $scope.finishedTasks);
    }, true);
    
    $scope.addTask = function(){
    	projectStoreService.tasks.push($scope.task);
    	projectStoreService.task = '';
    };

    $scope.finishTask = function(index){
    	var task = projectStoreService.tasks.splice(index, 1)[0];
    	projectStoreService.finishedTasks.push(task);
    };

  });

angular.module('tasksApp')
	.controller('FinishedTasksCtrl', function($scope){
		$scope.revertTask = function(index){
	    	console.log('reverting task ' + index);
	    	var task = projectStoreService.finishedTasks.splice(index, 1)[0];
	    	projectStoreService.tasks.push(task);
	    };

	    $scope.removeTask = function(index){
	    	projectStoreService.finishedTasks.splice(index, 1);
	    };

	    $scope.getVisibilityClass = function(){
	    	if(projectStoreService.finishedTasks.length === 0){
	    		return 'hidden';
	    	}
	    	else{
	    		return '';
	    	}
	    };
	});
