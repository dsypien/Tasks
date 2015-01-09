'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
  	var tasksInStore = localStorageService.get('toDoTasks');
  	var finishedTasksInStore = localStorageService.get('finishedTasks');

    $scope.tasks = tasksInStore || [];
    $scope.finishedTasks = finishedTasksInStore || [];

    // Save tasks to local storage when task is changed
    $scope.$watch('tasks', function(){
    	localStorageService.set('toDoTasks', $scope.tasks);
    }, true);

    //Save finished tasks to local storage
    $scope.$watch('finishedTasks', function(){
    	localStorageService.set('finishedTasks', $scope.finishedTasks);
    }, true);
    
    $scope.addTask = function(){
    	$scope.tasks.push($scope.task);
    	$scope.task = '';
    };

    $scope.finishTask = function(index){
    	var task = $scope.tasks.splice(index, 1);
    	$scope.finishedTasks.push(task);
    };
  });
