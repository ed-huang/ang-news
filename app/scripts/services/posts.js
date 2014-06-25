'use strict';

app.factory('Post', function ($resource) {
	return $resource('https://dazzling-fire-7482.firebaseio.com/posts/:id.json');		
});
