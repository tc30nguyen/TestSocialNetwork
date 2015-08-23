define([
	'jquery',
	'underscore',
	'backbone',
	'models/PostModel'
], function($, _, Backbone, PostModel){

	var PostsCollection = Backbone.Collection.extend({
		model: PostModel,
		
		initialze: function(model, options) {}
	});

	return PostsCollection;
});