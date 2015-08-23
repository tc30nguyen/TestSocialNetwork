define([
	'jquery',
	'underscore',
	'backbone',
	'views/HomeView',
	'views/AboutView',
	'views/NavBarView',
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
	NavBarView,
	FooterView,
	SearchView,
	SearchQueriesView,
	SearchQueriesCollection
){

	var Router = Backbone.Router.extend({
		routes: {
			'': 'showHome,',
			'home': 'showHome',
			'about': 'showAbout',
			'search': 'showSearch',
		}
	});

	var initialize = function(){
		var router = new Router;
		var homeView = new HomeView();
		
		router.on('route:showHome', function(){
			homeView.render();
		});

		router.on('route:showAbout', function(){
			var aboutView = new AboutView();
			aboutView.render();
		});

		router.on('route:showSearch', function(){
			var queriesCollection = new SearchQueriesCollection();

			var searchView = new SearchView({collection: queriesCollection});
			searchView.render();
			var searchQueriesView = new SearchQueriesView({collection: queriesCollection});
		})

		var navBarView = new NavBarView();
		navBarView.render();
		homeView.render();
		var footerView = new FooterView();
		footerView.render();

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});