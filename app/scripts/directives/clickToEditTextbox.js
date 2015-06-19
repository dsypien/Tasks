'use strict';

angular.module('tasksApp')
	.directive('clickEditTextbox', function(){
		function controller($scope, $element){
			$scope.isReadOnly = true;
			$scope.enableEdit = function(){
				$scope.isReadOnly = false;
			};
			$scope.disableEdit = function(){
				$scope.isReadOnly = true;
			};
		}

		return{
			restrict: 'E',
			link: function(scope, elem, attrs){
				elem.bind('onblur', function(event){

				});
			},
			controller: controller,
			replace: true,
			templateUrl: '/scripts/directives/clickToEditTextbox.html'
		};
	});