app.controller('MoviesController', ['$scope', '$http',  function($scope, $http) {

    $scope.searchMovie = function(search) {

    	var movies = [];
    	$scope.movies = "";

    	$http.get("http://www.omdbapi.com/?s=" + search + "&apikey=3238f869")
		.then(function(response){ 
			var sucess = response.data.Response;
			if (sucess == "True") {
				var films = {};
				films = response.data.Search;
				for (var i = 0; i < films.length; i ++) {
					if (films[i].Poster !== "N/A") {
						movies.push(films[i]);
					}
					$scope.movies = movies;
				}
				if (movies.length !== 0) {
					$scope.message = ""
				} else {
					$scope.message = "Oops!!! Try again my friend."
				}
				
			} else {
				$scope.message = "Oops!!! Try again my friend."
			}
		});

	}

}]);

