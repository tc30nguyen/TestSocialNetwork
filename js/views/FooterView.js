define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

	var FooterView = Backbone.View.extend({
		el: $('#footer'),

		initialize: function() {
			var that = this;
		},

		render: function(){
			var compiledTemplate = _.template(footerTemplate);
			// var compiledTemplate = '<h1>footer</h1>'
			// compiledTemplate = footerTemplate;
			this.$el.html(compiledTemplate);
		}
	});

	return FooterView;
});