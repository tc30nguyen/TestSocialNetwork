define([
	'jquery',
	'underscore',
	'backbone',
	'views/HomeView',
	'views/AboutView',
	'views/FooterView'
], function($, _, Backbone, HomeView, AboutView, FooterView){

	var Router = Backbone.Router.extend({
		routes: {
			'about': 'showAbout',
			'home': 'showHome'
		}
	});

	var initialize = function(){
		var router = new Router;
		
		router.on('route:showAbout', function(){
			var aboutView = new AboutView();
			aboutView.render();
		});

		router.on('route:showHome', function(){
			var homeView = new HomeView();
			homeView.render();
		});

		var footerView = new FooterView();
		footerView.render();

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});