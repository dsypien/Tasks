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


// This controller is nested within the TasksCtrl controller
angular.module('tasksApp')
	.controller('FinishedTasksCtrl', function($scope){
		$scope.revertTask = function(index){
	    	console.log('reverting task ' + index);
	    	var task = $scope.project.finishedTasks.splice(index, 1)[0];
	    	$scope.project.tasks.push(task);
	    };

	    $scope.removeTask = function(index){
	    	$scope.project.finishedTasks.splice(index, 1);
	    };

	    $scope.getVisibilityClass = function(){
	    	if($scope.project.finishedTasks.length === 0){
	    		return 'hidden';
	    	}
	    	else{
	    		return '';
	    	}
	    };
	});
