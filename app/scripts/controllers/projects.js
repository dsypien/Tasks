'use strict';

angular.module('tasksApp')
	.controller('ProjectsCtrl', function($scope, $location, localStorageService, projectStoreService){
		var projectsInStore = localStorageService.get('projects');

		$scope.projects = projectsInStore || [];

		$scope.create = function(){
			$scope.projects.push($scope.project);
			$scope.project = '';
		};

		$scope.delete = function(index){
			$scope.projects.splice(index, 1);
		};

		$scope.goToTasks = function(index){
			projectStoreService.setCurrent($scope.projects[index]);
			$location.path('/tasks');
		};

		// Save any changes to local storage
		$scope.$watch('projects',function(){
			localStorageService.set('projects', $scope.projects);
		}, true);

	});