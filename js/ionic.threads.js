(function(currentScriptPath) {
    'use strict';

    angular.module('ionicThreads', [])
        .directive('ionComment', ionComment)
        .directive('ionThread', ionThread);
        
	var threadTemplate = currentScriptPath.replace('js/ionic.threads.js', 'templates/thread.html'),
		commentTemplate = currentScriptPath.replace('js/ionic.threads.js', 'templates/comment.html');

    function ionComment() {
        return {
            restrict: 'EA', // element & attribute
            scope: {
	            template: '=',
                comment: '='
            },
            templateUrl: function(elem, attrs) {
				return attrs.template || commentTemplate;
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
				return attrs.template || threadTemplate
			},
            link: function (scope, element, attrs) {
	        	scope.commentTemplate = scope.commentTemplate || commentTemplate;
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
