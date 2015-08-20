define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/searchTemplate.html'
], function($, _, Backbone, searchTemplate){

	var HomeView = Backbone.View.extend({
		el: $('#container'),

		initialze: function() {
			var that = this;
		},

		render: function() {
			var compiledTemplate = _.template(searchTemplate);
			this.$el.html(compiledTemplate);
		}
	});

	return HomeView;
});