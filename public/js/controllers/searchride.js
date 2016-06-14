'use strict';

/**
 * @ngdoc function
 * @name rideShareAppApp.controller:SearchrideCtrl
 * @description
 * # SearchrideCtrl
 * Controller of the rideShareAppApp
 */
angular.module('rideShareAppApp')
  .controller('SearchrideCtrl', function ($scope,baseService) {
    
    $scope.searchResults = null;
    
    $scope.doSearch = function(rideDetails){
        
        var searchRideDetails = {
            placeFrom: rideDetails.toAddress.gm_accessors_.place.Od.formattedPrediction,
            placeTo  : rideDetails.fromAddress.gm_accessors_.place.Od.formattedPrediction,
            tripDate : rideDetails.tripDate 
        }
        console.log(searchRideDetails);
        
        baseService.searchRide(searchRideDetails,function(data){
            console.log("Suucesss");
            console.log(data);
            $scope.searchResults = data.data.data;
            console.log($scope.searchResults);
        },function(err){
           console.log("error occured"); 
        });
        
    }
    
  });
