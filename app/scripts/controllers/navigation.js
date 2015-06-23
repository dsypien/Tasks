'use strict';

angular.module('tasksApp')
	.controller('NavCtrl', ['$scope', '$location', function($scope, $location){
		$scope.isActive = function(path){
			if($location.path() === path){
				return 'active';
			}
			return '';
		};
	}]);