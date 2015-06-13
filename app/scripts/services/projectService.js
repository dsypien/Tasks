'use strict';

angular.module('tasksApp')
	.service('projectStoreService', ['$routeParams', 'localStorageService', function( $routeParams,localStorageService){
		var currentProject ;
		var currentProjectIndex = -1;
		var projectsInStore = localStorageService.get('projects') || [];

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
			 save: function(project){
			 	projectsInStore[currentProjectIndex] = project;
			 	localStorageService.set('projects', projectsInStore);
			 },
			setCurrent : function(project){
				currentProject = project; 
			}
		};
	}]);