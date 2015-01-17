'use strict';

angular.module('tasksApp')
	.controller('ProjectsCtrl', function($scope, localStorageService){
		var projectsInStore = localStorageService.get('projects');

		$scope.projects = projectsInStore || [];

		$scope.create = function(){
			$scope.projects.push($scope.project);
			$scope.project = '';
		};

		$scope.delete = function(index){
			$scope.projects.splice(index, 1);
		};

		// Save any changes to local storage
		$scope.$watch('projects',function(){
			localStorageService.set('projects', $scope.projects);
		}, true);

	});