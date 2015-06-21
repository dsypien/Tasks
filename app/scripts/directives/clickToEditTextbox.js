'use strict';

angular.module('tasksApp')
	.directive('clickEditTextbox', function(){
		function controller($scope){
			$scope.isReadOnly = true;
			$scope.enableEdit = function(){
				$scope.isReadOnly = false;
				angular.element('#editable_proj_name').trigger('focus');
			};
			$scope.disableEdit = function(){
				$scope.isReadOnly = true;
			};
		}

		return{
			restrict: 'E',
			controller: controller,
			replace: true,
			templateUrl: '/scripts/directives/clickToEditTextbox.html'
		};
	});