(function(currentScriptPath) {
    'use strict';

    angular.module('ionicThreads', [])
        .directive('ionComment', ionComment)
        .directive('ionThread', ionThread);
        
	var threadTemplate = currentScriptPath.replace('js/ionic.threads.js', 'templates/thread.html'),
		commentTemplate = currentScriptPath.replace('js/ionic.threads.js', 'templates/comment.html'),
		replyToComment = false;

    function ionComment() {
        return {
            restrict: 'EA', // element & attribute
            scope: {
                comment: '='
            },
            templateUrl: commentTemplate,
            link: function(scope, element, attrs) {
	            scope.toggleComment = function(comment) {
		            comment.showChildren = comment.showChildren ? false : true;
	            },
	            scope.replyToComment = function(comment) {
		            replyToComment && replyToComment({comment: comment});
	            }
		    }
        }
    }

    function ionThread() {
        return {
            restrict: 'EA', // element & attribute",
            scope: {
	            commentTemplate: '@',
	            replyToComment: '&',
	            template: '=',
                comments: '='
            },
            templateUrl: function(elem, attrs) {
	            commentTemplate = attrs.commentTemplate || commentTemplate;
				return attrs.template || threadTemplate
				
			},
			link: function(scope, element, attrs) {
	            replyToComment = scope.replyToComment || replyToComment;
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
