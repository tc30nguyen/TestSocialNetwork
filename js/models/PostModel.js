define([
	'jquery',
	'underscore',
	'backbone',
], function($, _, Backbone){

	var PostModel = Backbone.Model.extend({

		defaults: {
			'poster': '',
			'postee': '',
			'text': ''
		}
	});

	return PostModel;
});