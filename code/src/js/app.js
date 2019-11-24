var app = angular.module('frontendTest', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/movies', {
			templateUrl: 'src/views/movies.html',
			controller: 'MoviesController'
		})
		.when('/movie', {
			templateUrl: 'src/views/movie.html',
			controller: 'MovieController'
		})
		.otherwise({
			redirectTo: '/movies'
		});
});
