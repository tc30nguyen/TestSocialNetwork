define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

	var HomeView = Backbone.View.extend({
		el: $('#container'),

		initialze: function() {
			var that = this;
		},

		render: function() {
			var compiledTemplate = _.template(homeTemplate);
			this.$el.html(compiledTemplate);
		}
	});

	return HomeView;
});