'use strict';

app.controller('PostCtrl', function ($scope, $location, Post) {
	$scope.posts = Post.all;

	$scope.post = {
		url: 'http://', 
		'title': ''
	};

	$scope.submitPosts = function () { Post
		.create($scope.post)
		.then( function (ref) {
			$location.path('/posts/' + ref.name());
		});
	};
	
	$scope.deletePosts = function (postId) {
		console.log("delete");
		Post.delete(postId);
	};
	
});
