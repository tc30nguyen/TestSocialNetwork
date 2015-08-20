require.config({
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/backbone/node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		templates: '../templates'
	}
});

require([
	'app'

], function(App){
	App.initialize();
});