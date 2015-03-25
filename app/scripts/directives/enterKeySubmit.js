angular.module('tasksApp')
	.directive('enterKeySubmit', function(){
		return{
			// restrict to attributes
			restrict: 'A',
			link: function(scope, elem, attrs){
				elem.bind('keydown keypress', function(event){
					if(event.which === 13){
						scope.$apply(function(){
							scope.$eval(attrs.enterKeySubmit);
						});

						event.preventDefault();
					}
				});
			}
		};
	});