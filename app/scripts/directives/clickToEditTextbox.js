'use strict';

angular.module('tasksApp')
	.directive('clickEditTextbox', function(){
		function controller($scope, $element){
			$scope.isReadOnly = true;
			$scope.enableEdit = function(){
				$scope.isReadOnly = false;
				$element[0].children[1].focus();
			};
			$scope.disableEdit = function(){
				$scope.isReadOnly = true;
			};
		}

		return{
			restrict: 'E',
			controller: controller,
			replace: true,
			scope: {
            	ngModel: '='
        	},
			templateUrl: '/scripts/directives/clickToEditTextbox.html'
		};
	});