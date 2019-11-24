app.controller('MovieController', ['$scope', '$http', function($scope, $http) {

    $scope.movie = {
        "Title":"Galaxy",
        "Year":"1986",
        "Rated":"N/A",
        "Released":"01 Jan 1986",
        "Runtime":"91 min",
        "Genre":"Action, Adventure, Sci-Fi",
        "Director":"Brett Piper",
        "Writer":"Brett Piper",
        "Actors":"Matt Mitler, Denise Coward, Joe Gentissi, Bill MacGlaughlin",
        "Plot":"After hijacking a space shuttle, a spy finds that the controls are malfunctioning and sees alien battleships approaching Earth. Many years later, when the arc of his flight path returns to earth, he finds the planet under alien domination.",
        "Language":"English, French",
        "Country":"USA",
        "Awards":"N/A",
        "Poster":"https://m.media-amazon.com/images/M/MV5BOTBhMGNhMTUtNTUwNS00NmYwLWI1ZmEtZWVlMTU4NDE3ZTFhXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
        "Ratings":[{
          "Source":"Internet Movie Database",
          "Value":"4.4/10"}
        ],
        "Metascore":"N/A",
        "imdbRating":"4.4",
        "imdbVotes":"191",
        "imdbID":"tt0404977",
        "Type":"movie",
        "DVD":"N/A",
        "BoxOffice":"N/A",
        "Production":"N/A",
        "Website":"N/A",
        "Response":"True"
    }

    actors();
    genre();
    director();

    function actors (){
    	var listActor = $scope.movie.Actors.split(', ');
    	for (var i in listActor) {
		  	$scope.movie.actors = listActor;
		}
    }

    function genre (){
    	var listGenre = $scope.movie.Genre.split(', ');
    	for (var i in listGenre) {
		  	$scope.movie.genres = listGenre;
		}
    }

    function director (){
    	var listDirector = $scope.movie.Director.split(', ');
    	for (var i in listDirector) {
		  	$scope.movie.directors = listDirector;
		}
    }

}]);

