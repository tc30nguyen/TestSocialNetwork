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
			var queryResponses = this.collection;
			var user = query.save(null, {
				success: function(model, response) {
					var userData = response.email + ': ' 
						+ response.firstName + ' ' 
						+ response.lastName;
					queryResponses.add({ query: userData });
				},
				error: function(model, response) {
					console.log('Error: ' + response);
				}
			});
			this.inputElem.val('');
		}
	});

	return SearchView;
});