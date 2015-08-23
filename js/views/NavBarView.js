define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/navBarTemplate.html'
], function($, _, Backbone, navBarTemplate){

	var NavBarView = Backbone.View.extend({
		el: $('#header'),

		initialize: function() {},

		render: function(){
			var compiledTemplate = _.template(navBarTemplate);
			this.$el.html(compiledTemplate);
			return this;
		}
	});

	return NavBarView;
});