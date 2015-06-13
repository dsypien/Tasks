angular.module('tasksApp')
  .controller('TasksCtrl', ['$scope', 'projectStoreService', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    $scope.isOneColumn = window.innerWidth < 768;

    $scope.$watch(function(){
        return window.innerWidth;
    }, function(){
        //Gets called when window.innerWidth Changes
       $scope.isOneColumn = window.innerWidth < 768;
    });

    $scope.addTask = function(){
    	$scope.project.listAry[0].push($scope.project.task);
    	$scope.project.task = '';
    };

    $scope.moveTask = function(index, fromAry, toAry){
        var task = fromAry.splice(index, 1)[0];
        toAry.push(task);
    };

    $scope.removeTask = function(index, targetAry){
        targetAry.splice(index, 1);
    };

    $scope.getVisibilityClass = function(){
        if($scope.project.listAry[2].length === 0){
            return 'hidden';
        }
        else{
            return '';
        }
    };

    function createOptions () {
        return{
          placeholder: 'task-container',
          connectWith: '.sortable-container'
        };
    }

    $scope.sortableOptionsList = [createOptions('toDo'), createOptions('working'), createOptions('finished')];

    $scope.$watch('project', function(){
    	projectStoreService.save($scope.project);
    }, true);
  }]);
