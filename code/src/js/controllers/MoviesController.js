app.controller('MoviesController', ['$scope', '$http',  function($scope, $http) {
	$scope.movies = {
        "Search":[
		{
			"Title":"Guardians of the Galaxy",
			"Year":"2014",
			"imdbID":"tt2015381",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"},
		{
			"Title":"Guardians of the Galaxy Vol. 2",
			"Year":"2017",
			"imdbID":"tt3896198",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"},
		{
			"Title":"Rise of the Guardians",
			"Year":"2012",
			"imdbID":"tt1446192",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg"},
		{
			"Title":"Legend of the Guardians: The Owls of Ga'Hoole",
			"Year":"2010",
			"imdbID":"tt1219342",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BMjE0NjA5OTA4N15BMl5BanBnXkFtZTcwODA3MTA3Mw@@._V1_SX300.jpg"},
		{
			"Title":"Guardians",
			"Year":"2017",
			"imdbID":"tt4600952",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BYzgxY2NkZGYtOGI4NC00MTc4LTlkY2QtNmRjOTU1NDI0NGQ1XkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg"},
		{
			"Title":"Naruto the Movie 3: Guardians of the Crescent Moon Kingdom",
			"Year":"2006",
			"imdbID":"tt1071815",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BNjk2ZWIzOTYtMGUxMC00MzdhLWI3ZGMtZGJhNzZmMDYxYjJlXkEyXkFqcGdeQXVyMjQ3NTQ4MjQ@._V1_SX300.jpg"},
		{
			"Title":"Guardians of the Tomb",
			"Year":"2018",
			"imdbID":"tt4915672",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BZjMzZDI4YmEtZDIwNS00YWQ5LTkzN2UtMzJiMTliNjZiMzRjXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg"},
		{
			"Title":"Guardians of the Galaxy",
			"Year":"2015–",
			"imdbID":"tt4176370",
			"Type":"series",
			"Poster":"https://m.media-amazon.com/images/M/MV5BNDM4NDQxMDU2MV5BMl5BanBnXkFtZTgwMDY2MDQ5NjE@._V1_SX300.jpg"},
		{
			"Title":"The Guardians",
			"Year":"2017",
			"imdbID":"tt6213362",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BNjdkZmU1MzEtNjQ4OC00ZWM3LWIwNGUtZmM1MjBjYTI2M2E0XkEyXkFqcGdeQXVyNDU0NjMyNTQ@._V1_SX300.jpg"},
		{
			"Title":"Guardians of the Galaxy: Inferno",
			"Year":"2017",
			"imdbID":"tt7131308",
			"Type":"movie",
			"Poster":"https://m.media-amazon.com/images/M/MV5BZGQ0YzEyNWQtNGJiMi00NTAxLThkNDctNGY2ODkzYWMxZmZkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}
		],
		"totalResults":"148",
		"Response":"True"
    }
	function searchMovie() {

	}
}]);

