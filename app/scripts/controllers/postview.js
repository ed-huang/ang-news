'use strict'

app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
	console.log("post view controller");
	$scope.post = Post.find($routeParams.postId);

});
