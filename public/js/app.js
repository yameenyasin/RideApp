'use strict';

/**
 * @ngdoc overview
 * @name rideShareAppApp
 * @description
 * # rideShareAppApp
 *
 * Main module of the application.
 */
angular
    .module('rideShareAppApp', [
    'ngRoute',
    'validationService',
    'webService',
    'gm'
  ])
.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/partials/main.html'
                //controller: 'MainCtrl',
                //controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: '/partials/about.html'
                //controller: 'AboutCtrl',
                //controllerAs: 'about'
            })
            .when('/signup', {
                templateUrl: '/partials/signup.html',
                controller: 'SignupCtrl'
                //controllerAs: 'signup'
            })
            .when('/login', {
                templateUrl: '/partials/login.html',
                controller: 'LoginCtrl',
                //controllerAs: 'login'
            })
            .when('/bookride', {
                templateUrl: 'partials/bookride.html'
               // controller: 'BookrideCtrl',
               // controllerAs: 'bookride'
            })
            .when('/searchride', {
                templateUrl: 'partials/searchride.html',
                controller: 'SearchrideCtrl'
               // controllerAs: 'searchride'
            })
            .when('/createride', {
                templateUrl: 'partials/createride.html',
                controller: 'CreaterideCtrl'
               // controllerAs: 'createride'
            })
            .otherwise({
                redirectTo: '/login'
            });

    })

.controller("mainAppCtrl",function($rootScope,$scope){
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    };

    $scope.hideMe = function ()
        {
            if(!($location.path()==="/searchride" || $location.path()==="/createride" || $location.path==="/bookride")){
                return 0;
            }
            else
            {
                return 1;
            }
     
        };
    $rootScope.isAuthenticated = false;
    $rootScope.loggedInUser = null;
});