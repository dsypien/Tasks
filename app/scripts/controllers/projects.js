angular.module('tasksApp')
	.controller('ProjectsCtrl', function($scope, $location, projectStoreService){
		'use strict';
		
		var projectsInStore = projectStoreService.getProjects();

		$scope.projects = projectsInStore || [];

		$scope.create = function(){
			$scope.project.tasks = [];
			$scope.project.workingTasks = [];
			$scope.project.finishedTasks = []; 
			$scope.projects.push($scope.project);
			$scope.project = '';
		};

		$scope.delete = function(index){
			$scope.projects.splice(index, 1);
		};

		$scope.goToTasks = function(index){
			projectStoreService.setCurrent($scope.projects[index]);
			$location.path('/project/' + index);
		};

		// Save any changes to local storage
		$scope.$watch('projects',function(){
			projectStoreService.save('projects', $scope.projects);
		}, true);
	});