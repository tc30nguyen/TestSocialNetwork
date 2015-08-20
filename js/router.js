define([
	'jquery',
	'underscore',
	'backbone',
	'views/HomeView',
	'views/AboutView',
	'views/FooterView',
	'views/SearchView'
], function($, _, Backbone, HomeView, AboutView, FooterView, SearchView){

	var Router = Backbone.Router.extend({
		routes: {
			'about': 'showAbout',
			'home': 'showHome',
			'search': 'showSearch'
		}
	});

	var initialize = function(){
		var router = new Router;
		
		router.on('route:showHome', function(){
			var homeView = new HomeView();
			homeView.render();
		});

		router.on('route:showAbout', function(){
			var aboutView = new AboutView();
			aboutView.render();
		});

		router.on('route:showSearch', function(){
			var searchView = new SearchView();
			searchView.render();
		})

		var footerView = new FooterView();
		footerView.render();

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});