'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
  .controller('NavCtrl', function ($scope, $location) {
  	$scope.getClass = function(path){
  		if($location.path().substr(0, path.length) == path){
  			return 'active';
  		}
  		return '';
  	};
    
  });