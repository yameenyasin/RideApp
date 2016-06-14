//// app/models/user-registration-model.js
//// grab the mongoose module
var mongoose = require('mongoose');

// define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('rideModel', {
    place_from: {type : String, default: ''},
    place_to  : {type : String, default: ''},
    trip_date : {type : String, default: ''},
    total_capacity: {type : String, default: ''},
    avl_seats :     {type : String, default: ''},
    car_type :     {type : String, default: ''},
    car_no  :      {type : String, default: ''},
    phone_no :     {type : String, default: ''}
});