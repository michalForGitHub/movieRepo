ngModule.controller('MoviesListController', function ($scope, APIService) {
    getMovie();
    $scope.orderByOptions = ["Title", "Views", "Season"];

    function getMovie() {
        var serverCall = APIService.getMoviesData();
        serverCall.then(function (d) {
            $scope.moviesData = d.data;
        }, function (error) {
          //  $log.error('Something went wrong while fetching the data.')
        })
    }
    

});


