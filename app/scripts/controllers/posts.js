'use strict';

app.controller('PostCtrl', function ($scope, Post) {
	$scope.posts = Post.get();
	$scope.post = {
		url: 'http://', 
		title: ''
	};
	$scope.submitPosts = function () {
		Post.save($scope.post, function(ref) {
			$scope.posts[ref.name] = $scope.post;
			$scope.post = {
				url: 'http://',
				title: ''
			};
		});		
	};
	
	$scope.deletePosts = function (postId) {
		Post.delete({id: postId}, function () {
				delete $scope.posts[postId];
			});
	};
	
});