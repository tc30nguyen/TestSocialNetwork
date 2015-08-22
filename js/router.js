define([
	'jquery',
	'underscore',
	'backbone',
	'views/HomeView',
	'views/AboutView',
	'views/FooterView',
	'views/SearchView',
	'views/SearchQueriesView',
	'collections/SearchQueriesCollection'
], function(
	$,
	_,
	Backbone,
	HomeView,
	AboutView,
	FooterView,
	SearchView,
	SearchQueriesView,
	SearchQueriesCollection
){
	
	var Router = Backbone.Router.extend({
		routes: {
			'about': 'showAbout',
			'home': 'showHome',
			'search': 'showSearch',
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
			var queriesCollection = new SearchQueriesCollection();

			var searchView = new SearchView({collection: queriesCollection});
			var searchQueriesView = new SearchQueriesView({collection: queriesCollection});
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