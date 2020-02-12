ngModule.controller('MovieDetailsController', function ($scope, APIService, $routeParams) {
    $scope.movieID = $routeParams.movieID;
    getMovieByID($scope.movieID);
    function getMovieByID(movieID) {
        var serverCall = APIService.getMovieByID(movieID);
        serverCall.then(function (d) {
            $scope.currentMovie = d.data;
        }, function (error) {
          //  $log.error('Something went wrong while fetching the data.')
        })
    }
});