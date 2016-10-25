(function(currentScriptPath) {
    'use strict';

    angular.module('ionicThreads', [])
        .directive('ionComment', ionComment)
        .directive('ionThread', ionThread);
        
	var thread_template = currentScriptPath.replace('js/ionic.threads.js', 'templates/thread.html'),
		comment_template = currentScriptPath.replace('js/ionic.threads.js', 'templates/comment.html');

    function ionComment() {
        return {
            restrict: 'EA', // element & attribute
            scope: {
	            template: '=',
                comment: '='
            },
            templateUrl: function(elem, attrs) {
				return attrs.template || comment_template;
			}
        }
    }

    function ionThread() {
        return {
            restrict: 'EA', // element & attribute
            scope: {
	            template: '=',
                comments: '='
            },
            templateUrl: function(elem, attrs) {
				return attrs.template || thread_template
			},
            link: function (scope, element, attrs) {
	        	scope.comment_template = scope.comment_template || comment_template;
            }
        }
    }
})(
	(function () {
        var scripts = document.getElementsByTagName("script");
        var currentScriptPath = scripts[scripts.length - 1].src;
        return currentScriptPath;
    })()
);
