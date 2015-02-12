'use strict';

angular.module('tasksApp')
	.service('projectStoreService', function($routeParams,localStorageService){
		var projectsInStore = localStorageService.get('projects');
		var currentProject ;
		var currentProjectIndex = -1;

		return{
			getProjects: function(){
				return projectsInStore;
			},
			getCurrent: function(){
				if(!currentProject){
					var index = $routeParams.index;
					currentProject = projectsInStore[index];
				}
				return currentProject;
			},
			save: function(key, val){
				localStorageService.set(key, val);
			},
			setCurrent : function(project){
				currentProject = project;
			}
		};
	});