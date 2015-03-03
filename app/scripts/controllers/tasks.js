angular.module('tasksApp')
  .controller('TasksCtrl', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    console.log('current proj: ' + $scope.project);

    $scope.$on('$viewContentLoaded', function(){
        jQuery('textarea').each(function(){
            updateTextAreaHeight();
        });
    });

    $scope.addTask = function(){
    	$scope.project.tasks.push($scope.project.task);
    	$scope.project.task = '';
    };

    $scope.finishTask = function(index){
    	var task = $scope.project.tasks.splice(index, 1)[0];
    	$scope.project.finishedTasks.push(task);
    };

    $scope.$watch('project', function(){
    	projectStoreService.save($scope.project);
    }, true);

    // var updateTextAreaHeight = function(){
    // 	jQuery(this).height(0).height(this.scrollHeight);
    // };

    // function init(){
    // 	jQuery('.tasklist').on('change keyup keydown paste cut', 'textarea', updateTextAreaHeight).find('textarea').change();	
    // }
    
    init();
  });
