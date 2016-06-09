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
   
    
    $scope.doLogin = function(user){
        
        console.log(user);
        baseService.login(user,function(data){
            console.log("Login Successs");
            $rootScope.isAuthenticated = true;
            $location.url("/home");
        },function(err){
           console.log("error occured"); 
        });
    };
    
  });
