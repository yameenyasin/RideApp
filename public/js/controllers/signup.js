'use strict';

/**
 * @ngdoc function
 * @name rideShareAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the rideShareAppApp
 */
angular.module('rideShareAppApp')
  .controller('SignupCtrl', function ($scope,userService,baseService) {
    
    $scope.userSingUp = function(newUser){
        
       if(userService.checkEmail(newUser.email) && userService.checkPassword(newUser.password,newUser.confPassword)){
           
           // call the backend to perfrom save operation
           baseService.register(newUser,function(data){
               console.log("Successs");
           },function(err){
               console.log("Error in save");
           })
           
       }
       
    };
    
    
  });
