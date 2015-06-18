'use strict';

angular.module('tasksApp')
	.directive('clickEditTextbox', function(){
		return{
			restrict: 'A',
			link: function(scope, elem, attrs){
				elem.bind('onblur', function(event){

				});
			},
			replace: true,
			templateUrl: '/scripts/directives/clickToEditTextbox.html'
		};
	});