angular.module('tasksApp')
	.directive('textareaFitContent', function($window, $timeout){
		function resizeTextArea(element){
			$(element).height(0).height( $(element)[0].scrollHeight );
		}

		return{
			// Restrict directive to attributes
			restrict: 'A', 
			link: function(scope, elem, attrs){
				// Resize text area on key up
				elem.bind('keyup', function(event){
					var element = event.target;
					resizeTextArea(element);
				});

				// Resize text area on window resize
				angular.element($window).bind('resize', function() {
					var element = elem;
					scope.$apply(function(){
						resizeTextArea(element);
					});
				});

				// Resize text area as soon as element is added to DOM
				$timeout(function(){
					var element = elem;
					resizeTextArea(element);
				}, 10);

			}
		};
	});