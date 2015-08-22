define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/searchTemplate.html',
], function($, _, Backbone, searchTemplate){

	var SearchView = Backbone.View.extend({
		el: $('#container'),

		events: {
			'click #searchbar-btn': 'poop'
		},

		initialze: function(options) {},

		cacheElem: function(){
			this.inputElem = this.$el.find('#searchbar-input');
		},

		render: function() {
			var compiledTemplate = _.template(searchTemplate);
			this.$el.html(compiledTemplate());
			this.cacheElem();
			return this;
		},

		poop: function(e) {
			e.preventDefault();
			var newValue = this.inputElem.val();
			this.collection.add({query: newValue});
			this.inputElem.val('');
		}
	});

	return SearchView;
});