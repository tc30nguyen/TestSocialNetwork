define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/searchQueriesTemplate.html'
], function($, _, Backbone, searchQueriesTemplate){

	var SearchQueriesView = Backbone.View.extend({

		initialize: function(options) {
			this.listenTo(this.collection, 'add', this.addQueries);
			this.setElement($('#queriesContainer'));
		},

		render: function() {
			return this;
		},

		addQueries: function(a) {
			var value = a.get('query');
			var compiledTemplate = _.template(searchQueriesTemplate);
			this.$el.css('background-color', 'lightblue');
			this.$el.css('border', '1px solid grey');
			this.$el.css('box-shadow', '0 2px 4px rgba(0,0,0,0.2)');
			this.$el.html(compiledTemplate({collection: this.collection.toJSON()}));
		}

	});

	return SearchQueriesView;
});