angular.module("webService",[])
.service("baseService",function($http){
    
    this.register = function(postData,callback,errcallback){
       
        $http({
            method:'POST',
            data:postData,
            url:"/api/register"
        }).then(callback,errcallback);
        
        
    };
    
    this.login = function(params,callback,errcallback){
       
        $http({
            method:'GET',
            params:params,
            url:"/api/login"
        }).then(callback,errcallback);
        
        
    };
    
    
    
});