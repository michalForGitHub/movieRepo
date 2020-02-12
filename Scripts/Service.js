ngModule.service("APIService", function ($http,config) {
    this.getMoviesData = function () {
        return $http.get(config.apiUrl +"/GetMovieData");
    }

    this.getMovieByID = function (movieID) {
        return $http.get(config.apiUrl + "/getMovieByID/" + movieID);
    }
});   


