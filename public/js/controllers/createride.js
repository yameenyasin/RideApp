'use strict';

/**
 * @ngdoc function
 * @name rideShareAppApp.controller:CreaterideCtrl
 * @description
 * # CreaterideCtrl
 * Controller of the rideShareAppApp
 */
angular.module('rideShareAppApp')
  .controller('CreaterideCtrl', function ($scope,baseService) {
    
    $scope.isError = false;
    $scope.isSuccess = false;
    
    $scope.createRide = function(rideDetails){
        rideDetails.toAddress.gm_accessors_.place.Od.formattedPrediction
        var newRideDetails = {
            placeFrom: rideDetails.toAddress.gm_accessors_.place.Od.formattedPrediction,
            placeTo  : rideDetails.fromAddress.gm_accessors_.place.Od.formattedPrediction,
            tripDate : rideDetails.tripDate,
            totalCapacity: rideDetails.totalCapacity,
            avlSeats :  rideDetails.avlSeats   ,
            carType :  rideDetails.carType   ,
            carNo  :   rideDetails.carNo   ,
            phoneNo :  rideDetails.phoneNo   
        }
        console.log(newRideDetails);
        
        baseService.createRide(newRideDetails,function(data){
           console.log(data);
           $scope.isError = false;
           $scope.isSuccess = true;
        },function(err){
           console.log("error occured"); 
           $scope.isError = true;
           $scope.isSuccess = false;
        });
        
    }
    
    
  });
