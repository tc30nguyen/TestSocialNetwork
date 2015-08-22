define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/searchQueriesTemplate.html'
], function($, _, Backbone, searchQueriesTemplate){

	var SearchQueriesView = Backbone.View.extend({
		el: $('#container'),

		initialize: function(options) {
			this.listenTo(this.collection, 'add', this.addQueries);
		},

		render: function() {
			console.log('asdf');
		},

		addQueries: function(a) {
			var value = a.get('query');
			var compiledTemplate = _.template(searchQueriesTemplate);
			this.$el.append(compiledTemplate({test: value}));
		}
	});

	return SearchQueriesView;
});