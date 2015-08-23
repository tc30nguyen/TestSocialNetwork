define([
	'jquery',
	'underscore',
	'backbone',
	'views/PostView',
	'text!templates/homeTemplate.html',
	'models/PostModel'
], function($, _, Backbone, PostView, homeTemplate, PostModel){

	var HomeView = Backbone.View.extend({
		el: $('#container'),

		initialize: function() {
			this.postsView = new PostView();
		},

		render: function() {
			var compiledTemplate = _.template(homeTemplate);
			this.$el.html(compiledTemplate);
			
			this.postsView.render(this.makePost());
			return this;
		},

		makePost: function() {
		    return new PostModel({
		    	poster: 'POSTER_NAME',
		    	postee: 'CURRENT_USER',
		    	text: this.randomString(300)
		    });
		},

		randomString: function(len) {
			var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for(var i=0; i < len; i++) {
		        text += possible.charAt(Math.floor(Math.random() * possible.length));
		    }

		    return text;
		}
	});

	return HomeView;
});