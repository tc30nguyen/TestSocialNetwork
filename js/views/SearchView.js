define([
	'jquery',
	'underscore',
	'backbone',
	'models/SearchQueryModel',
	'text!templates/searchTemplate.html',
], function($, _, Backbone, SearchQueryModel, searchTemplate){

	var SearchView = Backbone.View.extend({
		el: $('#container'),

		events: {
			'click #searchbar-btn': 'addQuery'
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

		addQuery: function(e) {
			e.preventDefault();
			var query = new SearchQueryModel({
				query: this.inputElem.val()
			})
			// this.collection.add({query: query});
			var user = query.save();
			this.inputElem.val('');
		}
	});

	return SearchView;
});