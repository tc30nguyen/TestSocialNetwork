define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/aboutTemplate.html'
], function($, _, Backbone, aboutTemplate){

	var AboutView = Backbone.View.extend({
		el: $('#container'),

		initialize: function(){
			var that = this;
		},

		render: function() {
			var compiledTemplate = _.template(aboutTemplate);
			this.$el.html(compiledTemplate);
		}
	});

	return AboutView;
});