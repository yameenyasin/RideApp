angular.module("validationService",[])
.service("userService",function(){
    
    this.checkEmail = function(emailid){
        var isValid = false;
        
        if(emailid.length > 10){
            isValid = true;
        }
        
        return isValid;
    };
    
    this.checkPassword = function(password,confirmpassword){
        var isValid = false;
        
        if(password.length > 5 && password == confirmpassword){
            isValid = true;
        }
        
        return isValid;
    }
    
});