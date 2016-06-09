// grab the nerd model we just created
var User = require('./models/user');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/user', function (req, res) {

        var user = new User({
            email: "test.kmr@gmail.com",
            password: "test"
        });
        user.save(function (err, fluffy) {
            if (err) return console.error(err);
            console.log("User save success");
            res.send("Yaay !! Successs ... ");
        });
    });
    
    // sample api route
    app.post('/api/register', function (req, res) {
        var user = new User({
            email: req.body.email,
            password: req.body.password
        });
        user.save(function (err, fluffy) {
            if (err) return console.error(err);
            res.json({status:203,message:"Entries have been created"});
        });
        
        
    });
    
    // sample api route
    app.get('/api/login/:user', function (req, res) {
        
        console.log(req.params);
        var isValid = false, response = {};
        var email = req.body.email;
        var password = req.body.password;
        
        User.find({email: email,password:password }, function (err, docs) {
          // docs is an array
            isValid = true;
        });
        
        if(isValid){
            response = {status:200,message:"success"};
        }else{
            response = {status:505,message:"invalid credentials"};
        }
        res.json(response);
        
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    app.get('/partials/:filename', function (req, res) {
        console.log(req.params.filename);
        var filename = req.params.filename;
        if (!filename) return; // might want to change this
        res.sendFile(filename, {
                root: './public/views/partials'
        });
    });
    app.use(function (req, res) {
            res.sendFile('index.html', {
                root: './public/views'
            });
    });

};