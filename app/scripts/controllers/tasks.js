angular.module('tasksApp')
  .controller('TasksCtrl', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    console.log('current proj: ' + $scope.project);

    $scope.addTask = function(){
        $scope.project.task.comments = [];
    	$scope.project.tasks.push($scope.project.task);
    	$scope.project.task = '';
    };


    $scope.moveTask = function(index, fromAry, toAry){
        var task = fromAry.splice(index, 1)[0];
        toAry.push(task);
    }

    $scope.addComment = function(index){
        var task = $scope.project.tasks[index];
    }

    $scope.showComments = function(index){
        console.log("Show comments");
    };

    // Delete Task from finished task list
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

    $scope.$watch('project', function(){
    	projectStoreService.save($scope.project);
    }, true);
  });
