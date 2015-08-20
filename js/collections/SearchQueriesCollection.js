define([
	'jquery',
	'underscore',
	'backbone',
	'models/SearchQueryModel'
], function($, _, Backbone, SearchQueryModel){

	var SearchQueryCollection = Backbone.Collection.extend({
		model: SearchQueryModel,
		
		initialze: function(model, options) {}
	});

	return SearchQueryCollection;
});