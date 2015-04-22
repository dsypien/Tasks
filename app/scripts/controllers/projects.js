angular.module('tasksApp')
	.controller('ProjectsCtrl', ['$scope', '$location', 'projectStoreService', function($scope, $location, projectStoreService){
		'use strict';
		
		var projectsInStore = projectStoreService.getProjects();

		$scope.projects = projectsInStore || [];

		$scope.create = function(){
			var tasks = [];
			var workingTasks = [];
			var finishedTasks = [];

			$scope.project.listAry = [tasks, workingTasks, finishedTasks];
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

		$scope.$watch('projects',function(){
			projectStoreService.save('projects', $scope.projects);
		}, true);
	}]);