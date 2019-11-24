app.controller('MovieController', ['$scope', '$http', function($scope, $http) {

    $scope.movie = [];
    var detailFilm = "Baby";

    $http.get("http://www.omdbapi.com/?t=" + detailFilm + "&apikey=3238f869")
    .then(function(response){ 
        if (response.data.Response == "True") {
            $scope.movie = response.data;
            $scope.message = ""
            actors();
            genre();
            director();
        } else {
            $scope.message = "Oops!!! Try again my friend."
        }
    });

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

