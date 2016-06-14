angular.module("webService",[])
.service("baseService",function($http){
    
    // for creating the new user
    this.register = function(postData,callback,errcallback){
       
        $http({
            method:'POST',
            data:postData,
            url:"/api/register"
        }).then(callback,errcallback);
        
        
    };
    
    // for login
    this.login = function(params,callback,errcallback){
       
        $http({
            method:'GET',
            params:params,
            url:"/api/login"
        }).then(callback,errcallback);
        
        
    };
    
    //. for creating the new ride
    this.createRide = function(postData,callback,errcallback){
       
        $http({
            method:'POST',
            data:postData,
            url:"/api/newride"
        }).then(callback,errcallback);
        
        
    };
    
    
    
});