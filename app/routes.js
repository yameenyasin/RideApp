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
    app.get('/api/login', function (req, res) {
        
        var isValid = false, response = {};
        var email = req.query.email;
        var password = req.query.password;
        
        User.find({email: email,password:password }, function (err, docs) {
          if (err || docs.length === 0){
              console.log("error occured");
              return res.status(404).json({message:"Invalid Credentials"});
              
          }
          else{
              console.log(docs);
              return res.status(200).json({data:docs});
          }
            
        });
        
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