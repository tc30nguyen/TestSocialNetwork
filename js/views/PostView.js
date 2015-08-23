define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/postTemplate.html'
], function($, _, Backbone, postTemplate){

	var PostView = Backbone.View.extend({

		initialze: function(options) {
			// this.listenTo(this.collection, 'add', this.addPosts);
		},

		render: function(post) {
			this.$el = $('#postsContainer');
			var currentHTML = this.$el.html();

			var newPostHTML = _.template(postTemplate)({model: post.toJSON()});
			this.$el.append(newPostHTML + currentHTML);
			return this;
		}
	});

	return PostView;
});