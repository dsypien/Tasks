'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    
    $scope.addTask = function(){
    	$scope.tasks.push($scope.task);
    	$scope.task = '';
    };

    $scope.removeTask = function(index){
    	$scope.tasks.splice(index, 1);
    };
  });
