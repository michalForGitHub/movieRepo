var ngModule = angular.module('APIModule', ['ngRoute']);

ngModule.constant('config', {
    apiUrl: 'http://localhost:62621/Api/Movie',
    baseUrl: '/',
    enableDebug: true
});


ngModule.config(function ($routeProvider) {
   
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'MoviesListController'
        })
        .when('/movieDetails/:movieID', {
            templateUrl: 'viewMovie.html',
            controller: 'MovieDetailsController'
        })
     
        .otherwise({
            redirectTo: '/home'
        });
});


