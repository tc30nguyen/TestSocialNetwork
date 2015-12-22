define([
	'jquery',
	'underscore',
	'backbone',
], function($, _, Backbone){

	var PostModel = Backbone.Model.extend({
		urlRoot: '/post',
		defaults: {
			'poster': '',
			'postee': '',
			'text': ''
		}
	});

	return PostModel;
});