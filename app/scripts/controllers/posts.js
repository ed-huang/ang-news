'use strict';

app.controller('PostCtrl', function ($scope, Post) {
	$scope.posts = Post.all;
	$scope.post = {
		url: 'http://', 
		title: ''
	};
	$scope.submitPosts = function () {
		Post.create($scope.post).then( function() {
			$scope.post = {
				url: 'http://',
				title: ''
			};
		});		
	};
	
	$scope.deletePosts = function (postId) {
		Post.delete(postId);
	};
	
});
