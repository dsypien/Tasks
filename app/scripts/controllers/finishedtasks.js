"using strict";

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