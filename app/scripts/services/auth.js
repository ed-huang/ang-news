'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
	var ref = new Firebase(FIREBASE_URL);
	
	var auth = $firebaseSimpleLogin(ref);

	var Auth = {
		all: posts,
		create: function (post) {
			return posts.$add(post);
		},
		find: function (postId) {
			return posts.$child(postId);
		},
		delete: function (postId) {
			return posts.$remove(postId);
		}
	};
	
	return Post;
});
