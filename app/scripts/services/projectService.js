'use strict';

angular.module('tasksApp')
	.service('projectStoreService', function(localStorageService){
		var projectsInStore = localStorageService.get('projects');
		var currentProject = {};
		var currentProjectIndex = -1;

		return{
			get: function(name){
				console.log(currentProject);
				return name;
			},
			save: function(name){
				return name;
			},
			setCurrent : function(project){
				currentProject = project;
				console.log(currentProject);
			}
		};
	});