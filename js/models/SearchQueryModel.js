define([
	'jquery',
	'underscore',
	'backbone',
], function($, _, Backbone){

	var SearchQueryModel = Backbone.Model.extend({
		urlRoot: '/searchQuery',
		defaults: {
			'query': ''
		}
	});

	return SearchQueryModel;
});