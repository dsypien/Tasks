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
  	var tasksInStore = localStorageService.get('tasks');

    $scope.tasks = tasksInStore || [];

    // Save tasks to local storage when task is changed
    $scope.$watch('tasks', function(){
    	localStorageService.set('tasks', $scope.tasks);
    }, true);
    
    $scope.addTask = function(){
    	$scope.tasks.push($scope.task);
    	$scope.task = '';
    };

    $scope.removeTask = function(index){
    	$scope.tasks.splice(index, 1);
    };
  });
