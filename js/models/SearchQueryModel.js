define([
	'jquery',
	'underscore',
	'backbone',
], function($, _, Backbone){

	var SearchQueryModel = Backbone.Model.extend({

		defaults: {
			'query': ''
		}
	});

	return SearchQueryModel;
});