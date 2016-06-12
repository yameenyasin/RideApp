'use strict';

/**
 * @ngdoc function
 * @name rideShareAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the rideShareAppApp
 */
angular.module('rideShareAppApp')
  .controller('LoginCtrl', function ($rootScope,$scope,baseService,$location) {
   
    $scope.loginError = false;
    
    $scope.doLogin = function(user){
        
        console.log(user);
        baseService.login(user,function(data){
            console.log(data);
            $scope.loginError = false;
            $rootScope.isAuthenticated = true;
            $location.url("/home");
        },function(err){
           console.log("error occured"); 
           $scope.loginError = true;
        });
    };
    
  });
