angular.module('tasksApp')
  .controller('TasksCtrl', ['$scope', 'projectStoreService', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    console.log('current proj: ' + $scope.project);

    $scope.addTask = function(){
        $scope.project.task.comments = [];
    	$scope.project.listAry[0].push($scope.project.task);
    	$scope.project.task = '';
    };

    $scope.moveTask = function(index, fromAry, toAry){
        var task = fromAry.splice(index, 1)[0];
        toAry.push(task);
    };

    // Delete Task from finished task list
    $scope.removeTask = function(index){
        $scope.project.listAry[2].splice(index, 1);
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
